import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Services } from './collections/Services';
import { About } from './collections/About';
import { Mission } from './collections/Mission';
import { Vision } from './collections/Vision';
import { Story } from './collections/Story';
import { Team } from './collections/Team';
import { ServiceDetails } from './collections/ServiceDetails';
import { Projects } from './collections/Projects';
import { ProjectDetails } from './collections/Projectdetails';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services, About, Mission, Vision, Story, Team, ServiceDetails,Projects, ProjectDetails],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
  cors: ['http://localhost:3000'],
  upload: {
    limits: {
      fileSize: 10000000, // 10MB limit
    },
  },
});