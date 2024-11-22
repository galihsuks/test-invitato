import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "invitato.net",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
