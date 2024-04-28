const config = require('./tsconfig.json')





// module.exports = function(api){
//   api.cache(true)
//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     env: {
//     production: {
//       plugins: [
//         'react-native-paper/babel',
//         'babel-plugin-module-resolver',

        
//       ],
      
//     },
//   },
//   }
  
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            app: "./src/app/",
            shared: "./src/shared/",
            entities: "./src/entities/",
            features: "./src/features/",
            pages: "./src/pages/",
            widgets: "./src/widgets/"
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      'react-native-paper/babel'
    ],
  };
};
