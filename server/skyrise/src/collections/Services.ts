import { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
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
        description: 'Brief description of the service for the services list.',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Service Icon',
      admin: {
        description: 'Icon for the service, displayed in the services list.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      admin: {
        description: 'Optional rich text content for the service.',
      },
    },
  ],
};