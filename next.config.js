/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://aviroop:aviroop@cluster0.b7hcz.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
