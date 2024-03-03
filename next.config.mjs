/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        /**
         * @TODO: '/push-protocol-demo' is temporarily disabled,
         * until authentication can be added to protected routes.
         */
        source: "/push-protocol-demo",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
