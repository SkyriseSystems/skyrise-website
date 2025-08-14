import { NextResponse } from 'next/server';
import { payloadClient } from '@/app/lib/payload-client';

export async function GET() {
  try {
    const services = await payloadClient.find({
      collection: 'services',
      limit: 10,
    });
    const simplifiedServices = {
      docs: services.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug || doc.id,
        description: doc.description,
        icon: doc.icon && typeof doc.icon === 'object' && doc.icon.url ? { url: doc.icon.url } : null,
      })),
    };
    console.log('Services fetched:', JSON.stringify(simplifiedServices, null, 2));
    return NextResponse.json(simplifiedServices);
  } catch (error: any) {
    console.error('Error fetching services:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to load services', details: error.message },
      { status: 500 }
    );
  }
}