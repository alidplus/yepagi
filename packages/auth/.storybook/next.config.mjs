export default {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/trpc/:path*",
        destination: "http://localhost:3030/trpc/:path*",
      },
    ];
  },
};
