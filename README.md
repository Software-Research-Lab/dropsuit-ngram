[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-ngram.svg?style=flat)](https://www.npmjs.com/package/dropsuit-ngram) [![npm](https://img.shields.io/npm/dt/dropsuit-ngram.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-ngram) [![License](https://img.shields.io/npm/l/dropsuit-ngram.svg)](https://www.npmjs.com/package/dropsuit-ngram)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the ngram Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The ngram function is one of its modules, designed for generating N-grams from input strings. It is available under the Apache License 2.0.

## DropSuit NLP Method: A JavaScript and Node.js function for generating N-grams

The ngram function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that generates N-grams from input strings. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-ngram
```

### Usage

Import the library in your project:

```
const dropsuit_ngram = require("dropsuit-ngram");

```

insert 'intentData' and set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsngram = new dropsuit_ngram(null, false);

```

#### ngram(input: string|null, n: number)

- **input**: The input sentence, which you want to process. It can be a string type or null. If set to null, it will process the default instance key value input.
- **n**: The return option parameter N-grams, which specifies the value of N. The range of N is from 1 to 9.

#### Output:

- The function returns an array of N-grams.

```

let out = dsngram.ngram(myInputString, 3);
console.log(out);

```

Output:

```
Input sentence:

 [ 'hi there what can i do for you' ]

Output:

 { n: 3 } -grams:

 [
  'hi there what',
  'there what can',
  'what can i',
  'can i do',
  'i do for',
  'do for you'
]
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-ngram

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)