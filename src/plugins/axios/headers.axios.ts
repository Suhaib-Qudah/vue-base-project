import type {AxiosRequestHeaders, InternalAxiosRequestConfig} from 'axios';

export const setHeaders = (config: InternalAxiosRequestConfig) => {

    config = config ?? {};
    if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
    }

    /*
     * example of setting the locale header
     * const locale = useLocaleStore().locale;
     * config.headers['Accept-Language'] = locale;
     */
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
};