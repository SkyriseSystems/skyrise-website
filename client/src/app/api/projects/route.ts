
import { NextResponse } from 'next/server';
import { payloadClient } from '@/app/lib/payload-client';

export async function GET() {
  try {
    const projects = await payloadClient.find({
      collection: 'projects',
      limit: 10,
    });
    const simplifiedProjects = {
      docs: projects.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug || doc.id,
        description: doc.description,
        image: doc.image && typeof doc.image === 'object' && doc.image.url ? { url: doc.image.url } : null,
      })),
    };
    console.log('Projects fetched:', JSON.stringify(simplifiedProjects, null, 2));
    return NextResponse.json(simplifiedProjects);
  } catch (error: any) {
    console.error('Error fetching projects:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to load projects', details: error.message },
      { status: 500 }
    );
  }
}