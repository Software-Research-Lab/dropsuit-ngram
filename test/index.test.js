//#region ngram test

const assert = require("assert");
const dropsuit_ngram = require("../index.js");

let input = "hi there what can i do for you";
expected_output_ngram_3 = [
  "hi there what",
  "there what can",
  "what can i",
  "can i do",
  "i do for",
  "do for you",
];

expected_output_ngram_2 = [
  "hi there",
  "there what",
  "what can",
  "can i",
  "i do",
  "do for",
  "for you",
];

describe("dropsuit-ngram", () => {
  describe("ngram()", () => {
    it("should return three-grams array with parameter argument 3", () => {
      let dsngram = new dropsuit_ngram(null, true);
      let ngram_output = dsngram.ngram(input, 3);
      assert.deepEqual(ngram_output, expected_output_ngram_3);
      // console.log("\n\n3-gram output:", ngram_output);
    });
    it("should return two-grams array with parameter argument 2", () => {
      let dsngram = new dropsuit_ngram(null, true);
      let ngram_output = dsngram.ngram(input, 2);
      assert.deepEqual(ngram_output, expected_output_ngram_2);
      // console.log("\n\n2-gram output:", ngram_output);
    });
  });
});

//#endregion
