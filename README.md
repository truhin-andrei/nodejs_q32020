# Task 1. Caesar cipher CLI tool
## Parameters

- -s, --shift: a shift : integer number;
- -i, --input: an input file, if omitted stdin is used;
- -o, --output: an output file, if omitted stdout is used;
- -a, --action: an action encode/decode

## Restriction

shift and action is required.

## Usage
 Make sure you are in the "task1" directory or use "task/index.js" instead of "index.js".
 If you in the root, to change directory type:
 ```javascript
$ cd task1
``` 
Commands to cipher:

```javascript
$ node index.js -a encode -s 3  -o "./output.txt"
```
```javascript
$ node index.js -a decode -s 6 -i "./input.txt"  -o "./output.txt"
```