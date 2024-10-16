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
    }
};

export default nextConfig;
