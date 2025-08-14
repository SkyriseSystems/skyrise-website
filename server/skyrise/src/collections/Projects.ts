import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true, // Allow public read access
    create: ({ req: { user } }) => !!user, // Allow authenticated users
    update: ({ req: { user } }) => !!user, // Allow authenticated users
    delete: ({ req: { user } }) => !!user, // Allow authenticated users
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
      admin: {
        description: 'The title of the project (e.g., Enterprise Resource Planning Implementation).',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'Unique identifier for the project (e.g., erp-implementation).',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      admin: {
        description: 'Brief description of the project for the projects list.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Project Image',
      admin: {
        description: 'Image for the project, displayed in the projects list.',
      },
    },
  ],
};