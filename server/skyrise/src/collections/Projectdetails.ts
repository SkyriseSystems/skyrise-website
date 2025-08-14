import type { CollectionConfig } from 'payload';

export const ProjectDetails: CollectionConfig = {
  slug: 'projectdetails',
  admin: {
    useAsTitle: 'title',
    description: 'Collection for project details, including title, description, and image.',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'projectId',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
      label: 'Project Reference',
      admin: {
        description: 'Reference to the corresponding project in the Projects collection.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Project Image',
    },
    {
      name: 'implementationProcess',
      type: 'array',
      label: 'Implementation Process',
      fields: [
        {
          name: 'step',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};