/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_I18N_LOCALE: string;
  readonly VITE_I18N_FALLBACK_LOCALE: string;
  readonly VITE_I18N_SUPPORTED_LOCALE: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
