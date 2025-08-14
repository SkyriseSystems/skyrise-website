import { NextResponse } from 'next/server';
import { payloadClient } from '@/app/lib/payload-client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get('where[serviceId][equals]');
    const slug = searchParams.get('where[slug][equals]');

    const query: any = {
      collection: 'servicedetails',
      limit: 1,
    };

    if (serviceId) {
      query.where = {
        serviceId: {
          equals: serviceId,
        },
      };
    } else if (slug) {
      query.where = {
        slug: {
          equals: slug,
        },
      };
    } else {
      throw new Error('No serviceId or slug provided in query parameters.');
    }

    const services = await payloadClient.find(query);
    console.log('Raw Payload CMS response:', JSON.stringify(services, null, 2));

    const simplifiedServices = {
      docs: services.docs.map((doc: any) => ({
        id: doc.id,
        serviceId: doc.serviceId,
        title: doc.title,
        slug: doc.slug,
        description: doc.description,
        image: doc.image && typeof doc.image === 'object' && doc.image.url ? { url: doc.image.url } : null,
        approach: doc.approach || null,
        customDevelopment: doc.customDevelopment || null,
        developmentServices: doc.developmentServices || null,
        applications: doc.applications || null,
        technologies: Array.isArray(doc.technologies) ? doc.technologies.map((tech: any) => ({
          category: tech.category || '',
          tools: tech.tools || '',
        })) : [],
      })),
    };

    console.log('Simplified service details:', JSON.stringify(simplifiedServices, null, 2));
    return NextResponse.json(simplifiedServices);
  } catch (error: any) {
    console.error('Error fetching service details:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to load service details', details: error.message },
      { status: 500 }
    );
  }
}