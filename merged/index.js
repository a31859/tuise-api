var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var fs = require('fs');
var SwaggerParser = require('swagger-parser');

var root = YAML.load(fs.readFileSync('index.yaml').toString());
var options = {
  filter        : ['relative', 'remote'],
  loaderOptions : {
    processContent : function (res, callback) {
      callback(null, YAML.load(res.text));
    }
  }
};
resolve(root, options)
  .then(function (results) {
    fs.writeFile('result.json', JSON.stringify(results.resolved, null, 2), function (err) {
      if (err)
        return console.error('[ERROR]',err);
        SwaggerParser.validate(results.resolved)
          .then(function(api) {
            console.log('The API is valid.');
          })
          .catch(function(err) {
            console.error('Onoes! The API is invalid. ' + err.message);
          });
    });
  })
  .catch(function(err) {
    console.error(err.stack);
  });
