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
        source: '/gh',
        destination: 'https://github.com/alexanderpaolini',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
