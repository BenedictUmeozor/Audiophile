declare namespace NodeJS {
  interface ProcessEnv {
    readonly RESEND_API_KEY: string;
    readonly NEXT_PUBLIC_CONVEX_URL: string;
    readonly CONVEX_DEPLOYMENT: string;
    readonly GOOGLE_APP_PASSWORD: string;
    readonly EMAIL_USER: string;
  }
}
