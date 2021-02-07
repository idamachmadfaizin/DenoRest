import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config({safe: true})

interface IEnvironment {
    APP_NAME: string;
    APP_URL: string;
    APP_PORT: string;
    APP_VERSION: string;

    DB_CONNECTION: string | 'mongodb';
    DB_HOST: string;
    DB_NAME: string;

    TOKEN_SECRET: string;
    TOKEN_LIFETIME: string;
    REFRESH_TOKEN_LIFETIME: string;
}

export const environment: IEnvironment = {
    APP_NAME: env.APP_NAME,
    APP_VERSION: env.APP_VERSION,
    APP_URL: env.APP_URL,
    APP_PORT: env.APP_PORT,

    DB_CONNECTION: env.DB_CONNECTION,
    DB_HOST: env.DB_HOST,
    DB_NAME: env.DB_NAME,

    TOKEN_SECRET: env.TOKEN_SECRET,
    TOKEN_LIFETIME: env.TOKEN_LIFETIME,
    REFRESH_TOKEN_LIFETIME: env.REFRESH_TOKEN_LIFETIME,
};