# Merge apis

Merge a Swagger API splited into serveral files refered using `$ref` inot a single file.

The files must be splited using the following structure:
```
.
├── index.yaml -- base Swagger definition
├── definitions
│   └── index.yaml -- definitions compilation
│   └── folders|files with the definitions
├── paths
│   └── index.yaml -- paths compilation
│   └── folders|files with the paths
```
or you can use a similar structure as long has the index.yaml in the root directory stays in place.

## Dependencies
- [node ^4.2.5](https://nodejs.org/en/)
- [npm ^3.5.3](https://www.npmjs.com/)

## Install
`$ npm install`

## Usage
`$ node index.js`

The above command will result in the file `result.json` and print in the console if the resulting API is valid or not.
