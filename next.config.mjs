/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ Allows images from any domain
      },
    ],
  },
};

export default nextConfig;
=======
    images: {
      domains: ['res.cloudinary.com'],
    },
  };
  
  export default nextConfig;
  
>>>>>>> Dheeraj
