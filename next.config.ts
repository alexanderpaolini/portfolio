import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/resume',
        destination: '/assets/resume.pdf',
        permanent: true,
      },
      {
        source: '/gh/:path*',
        destination: 'https://github.com/alexanderpaolini/:path*',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
