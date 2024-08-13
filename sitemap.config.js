module.exports = {
  siteUrl: "https://respondnow.io/",
  changefreq: "daily",
  generateRobotsTxt: true,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
