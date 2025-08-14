import { NextResponse } from 'next/server';
import { payloadClient } from '@/app/lib/payload-client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('where[projectId][equals]');
    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }
    const projectDetails = await payloadClient.find({
      collection: 'projectdetails',
      where: {
        projectId: { equals: projectId },
      },
      // Removed limit:1 to fetch all if multiple exist, but in frontend we still use the first one.
      // If multiple are intended, revise the logic in projectdetails.tsx to merge data.
    });
    const simplifiedDetails = {
      docs: projectDetails.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug || doc.id,
        description: doc.description,
        image: doc.image && typeof doc.image === 'object' && doc.image.url ? { url: doc.image.url } : null,
        implementationProcess: doc.implementationProcess || [],
        benefits: doc.benefits || [],
      })),
    };
    console.log('Project details fetched:', JSON.stringify(simplifiedDetails, null, 2));
    return NextResponse.json(simplifiedDetails);
  } catch (error: any) {
    console.error('Error fetching project details:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to load project details', details: error.message },
      { status: 500 }
    );
  }
}