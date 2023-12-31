/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'minio.salvawebpro.com', protocol: 'https', port: '9000' }
        ],
        domains : [
            "minio.salvawebpro.com",
            "lh3.googleusercontent.com",
        ]
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
    async headers() {
        return [
            {
                // Routes this applies to
                source: "/(.*)",
                // Headers
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://drfranciscorodriguez.mx",
                    },
                    // Allows for specific methods accepted
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    // Allows for specific headers accepted (These are a few standard ones)
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type, Authorization",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig