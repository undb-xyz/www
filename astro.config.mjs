import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind(), partytown()]
});