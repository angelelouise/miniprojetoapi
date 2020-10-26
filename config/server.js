module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3333),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e991d274b0a9ee5bd7d36c2c0579276d'),
    },
  },
});
