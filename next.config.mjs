/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/authentication",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images3.alphacoders.com',
            port: '',
            pathname: '/135/thumb-1920-1358192.png',
        }]
    }
};

export default nextConfig;
