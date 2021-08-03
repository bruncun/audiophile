module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return { url: false };
      },
    },
  },
  webpack: {
    configure: {
      output: {
        publicPath: "/",
      },
    },
  },
};
