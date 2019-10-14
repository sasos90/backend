const glob = require('glob');
const path = require('path');

module.exports = function (webpackConfig, context) {
  const parentDirectory = path.dirname(context.options.sourceRoot).split(path.sep).pop()
  // clean base directory for dist
  const baseDirectory = path.resolve(__dirname, 'dist/' + parentDirectory);
  // generate additionalEntries
  const additionalEntries = {
    ...getAdditionalEntries("apps/api/**/*.entity{.ts,.js}"),
    ...getAdditionalEntries("apps/api/**/migrations/*{.ts,.js}"),
    ...getAdditionalEntries("apps/api/**/*.subscriber{.ts,.js}")
  }

  // merge entries
  webpackConfig.entry = {
    ...webpackConfig.entry,
    ...additionalEntries
  }
  console.log(JSON.stringify(webpackConfig.entry, undefined, 2));

  //output
  webpackConfig.output = {
    path: baseDirectory,
    filename: '[name].js',
    libraryTarget: 'commonjs',
  }
  return webpackConfig
}

function getAdditionalEntries(globPattern) {
  const relativePaths = glob.sync(globPattern, {
    absolute: false
  });
  const additionalEntries = {};
  for (let index = 0; index < relativePaths.length; index++) {
    const relativePath = relativePaths[index]
    const absolutePath = glob.sync(relativePath, {
      absolute: true
    });
    const key = relativePath.split('/src/')[1].split('.').slice(0, -1).join('.');
    additionalEntries[key] = absolutePath;
  }
  return additionalEntries;
}
