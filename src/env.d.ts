/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly RELEASE_MANIFEST_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}