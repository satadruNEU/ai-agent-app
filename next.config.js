/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'hoirqrkdgbmvpwutwuwj-all.supabase.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'hoirqrkdgbmvpwutwuwj.supabase.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;