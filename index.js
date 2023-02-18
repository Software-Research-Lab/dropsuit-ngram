//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(inp, dsout) {
  this.inp = inp;
  this.dsout = dsout;
}

//#endregion

//#region tok

/**
 * @class Ngram
 * @classdesc Ngram class processes a given string and returns N-grams
 * @param {string} input - Input sentence/word to be processed
 * or using NULL returns default object instance key value 'input'.
 * @param {number} [n=1] - N-gram value (range: 1-9).
 * @returns {array} Array of N-grams.
 */

Constructor.prototype.ngram = function (input, n) {
  input = objOrFncInp(input, this.inp);
  let out = ngram_f(input, n, this.dsout);
  return out;
};

//#endregion

//#region ngram_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

/**
 * ngram_f function returns an array of N-grams for a given input string.
 * @function
 * @param {string} input - Input sentences
 * @param {number} [n=1] - N-gram value (range: 1-9).
 * @param {boolean} [dispout=false] - Flag to control the display of processing output in the terminal.
 * @returns {array} Array of N-grams
 * @example
 * let grams = gram_f('input sentence', 3, true);
 * console.log(grams); // Returns array of trigrams
 * and displays processing output in the terminal
 */

function ngram_f(input, n, dispout) {
  let arraySize = [];
  let sequencesArr = [];
  let contactedTokens = [];
  let ngramsRaw = [];
  let ngrams = [];

  input = ds_clnstr.clnstr(input).txt();
  let words = input.split(" ");
  for (let w = 0; w < words.length; w++) {
    arraySize.push(w);
  }

  let size = String(arraySize.join(""));

  for (let i = 0; i < size.length - (n - 1); ++i) {
    sequencesArr.push(size.slice(i, i + n));
  }

  for (let l = 0; l < sequencesArr.length; ++l) {
    let ids = sequencesArr[l].split("");
    for (let x = 0; x < ids.length; x++) {
      let group;
      let vaz = words[parseInt(ids[x])];
      contactedTokens.push(vaz);
      if (x >= n - 1) {
        group = contactedTokens.join();
        contactedTokens = [];
        ngramsRaw.push(group);
      }
    }
  }

  for (let x = 0; x < ngramsRaw.length; x++) {
    let ng = ngramsRaw[x];
    ng = ds_clnstr.clnstr(ng).txt();
    ngrams.push(ng);
  }

  display(input, n, ngrams, dispout);
  return ngrams;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(input, n, ngrams, dispout) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput sentence:\n\n",
      [input],
      "\n\nOutput:\n\n",
      { n },
      "-grams:\n\n",
      ngrams,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
