// collections/Media.js
import { CollectionConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(dirname, '../../media'), // Store in `media` directory
    staticURL: '/media', // Serve at `/media` (may be overridden by plugin)
    mimeTypes: ['image/*'],
    
  },
  fields: [],
  access: {
    read: () => true, // Allow public read access
  },
};