import type { CollectionConfig } from 'payload';

export const ServiceDetails: CollectionConfig = {
  slug: 'servicedetails',
  admin: {
    useAsTitle: 'title',
    description: 'Collection for service details, including title, description, image, approach, and technologies.',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'serviceId',
      type: 'relationship',
      relationTo: 'services',
      required: true,
      label: 'Service Reference',
      admin: {
        description: 'Reference to the corresponding service in the Services collection.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
      admin: {
        description: 'The title of the service (e.g., Software Development).',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'Unique identifier for the service (e.g., software-development).',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      admin: {
        description: 'Main description of the service, displayed in the first article.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Service Image',
      admin: {
        description: 'Main image for the service, displayed at the top of the service details.',
      },
    },
    {
      name: 'approach',
      type: 'textarea',
      required: false,
      label: 'Our Approach',
      admin: {
        description: 'Text describing the approach for the service.',
      },
    },
    {
      name: 'customDevelopment',
      type: 'textarea',
      required: false,
      label: 'Custom Development',
      admin: {
        description: 'Text for the Custom Development section.',
      },
    },
    {
      name: 'developmentServices',
      type: 'textarea',
      required: false,
      label: 'Development Services',
      admin: {
        description: 'Text for the Development Services section.',
      },
    },
    {
      name: 'applications',
      type: 'textarea',
      required: false,
      label: 'Applications',
      admin: {
        description: 'Text describing applications.',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Technologies',
      admin: {
        description: 'List of technologies used in the service.',
      },
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Category',
          admin: {
            description: 'Technology category (e.g., Frontend, Backend).',
          },
        },
        {
          name: 'tools',
          type: 'text',
          required: true,
          label: 'Tools',
          admin: {
            description: 'List of tools (e.g., HTML, CSS, JavaScript).',
          },
        },
      ],
    },
  ],
};