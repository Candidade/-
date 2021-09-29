const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(0,50,100)',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
