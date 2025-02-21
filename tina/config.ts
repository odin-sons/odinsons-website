import { defineConfig } from "tinacms";

import * as sections from "./sections";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "_site",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: 'boolean',
            name: 'published',
            label: 'Published'
          },
          {
            type: 'string',
            label: 'Page title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'object',
            list: true,
            name: 'sections',
            label: 'Sections',
            templates: Object.values(sections),
          },
        ],
      },
    ],
  },
});
