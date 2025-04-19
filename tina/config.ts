import { defineConfig } from "tinacms";

import * as collections from "./collections";
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
      collections.settings,
      {
        name: "authors",
        label: "Authors",
        path: "content/authors",
        match: {
          include: '*',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'wide',
            label: 'Wide',
          }
        ]
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        match: {
          include: '*',
        },
        format: 'md',
        fields: [
          {
            type: 'boolean',
            name: 'published',
            label: 'Опубликовано',
            description: 'Переключи вправо, чтоб опубликовать. Влево, чтобы скрыть.'
          },
          {
            type: 'string',
            label: 'Заголовок страницы',
            description: 'Будет на вкладке браузера, а также в описательном блоке при шаринге в соц. сетях',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Картинка для поисковиков и соц. сетей',
            name: 'source',
          },
          {
            type: 'object',
            list: true,
            name: 'sections',
            label: 'Секции',
            templates: Object.values(sections),
          },
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/news",
        match: {
          include: '*',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'wide',
            label: 'Wide',
          }
        ]
      },
    ],
  },
});
