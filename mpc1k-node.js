/*
 * Thanks to http://www.mybunnyhug.com/fileformats/pgm/
 */

// imports
const fs  = require('fs');
const parser = require('./lib/parser');
const generator = require('./lib/generator');

//exports
exports.parser = parser;
exports.generator = generator;
exports.version = '0.0.1';
exports.emptyPGM = emptyPGM;

function emptyPGM(){
  var emptyPGMBytes = fs.readFileSync(`${__dirname}/data/Program01.PGM`);
  var pgmParser = parser.createParser();
  pgmParser.parseBytes(emptyPGMBytes);
  return pgmParser.pgm;
};
