/** @type {import('next').NextConfig} */

const PRODUCTION = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        styledComponents: true,
        removeConsole: PRODUCTION ? true : false,
    },
    images: {
        domains: [''],
    },
    eslint: {
        dirs: ['pages', 'utils', 'components'],
    },
    distDir: 'build',

    // in case there where any CDN for assets
    // assetPrefix: PRODUCTION ? 'https://[URL]/' : '',
};

module.exports = nextConfig;
