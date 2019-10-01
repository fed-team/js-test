#
1. Create a function that takes a string (without spaces), cleaves the string into words based on the declared array, and returns the correctly spaced version of the string (a sentence). If a section of the string is encountered that can't be found on the word array, return "Cleaving stalled: Word not found".

NOTES:
- Words in the words array can appear more than once in the string. The words array is a reference guide, kind of like a dictionary that lists which words are allowed.
#
2. Write a function that select all words that shares the same vowels (in any ordering) as the first word in the array.

NOTES:
- Words will contain only lowercase letters, and may contain whitespaces.
- Frequency does not matter (e.g. if "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).
#
3. A number may not be a palindrome, but it's descendant can be. A number's direct child is created by summing each pair of adjacent digits to create the digits of the next number.
For instance, `123312` is not a palindrome, but it's next child `363` is, where: `3 = 1 + 2; 6 = 3 + 3; 3 = 1 + 2`.
Create a function that returns true if the number itself is a palindrome or any of its descendants down to 2 digits (a 1-digit number is trivially a palindrome).

NOTES:
- Numbers will always have an even number of digits.
#
4. You're given a dartboard divided into sections, each section has a unique score. That means there won't be two sections with the same score.
Throwing a certain amount of valid darts, find how many solutions there are to reach the target score. Your function will be passed three parameters...
- Sections: An array of values for the sections (e.g. [3, 6, 8, 11, 15, 19, 22], the array is already sorted).
- Darts: The amount of darts to throw.
- Target: The target score.
Return an empty array if no solution is found, otherwise an array of non-duplicate strings for each solution (e.g. `["3-11-18", "7-7-18", "7-11-14"]`).

NOTES:
- Multiple darts can land in the same section.
- A dart must land in a valid section (it can't miss).
#
5. There is a table with alphabet

| |1|2|3|4|5|
|-|-|-|-|-|-|
|1|A|B|C|D|E|
|2|F|G|H|I/J|K|
|3|L|M|N|O|P|
|4|Q|R|S|T|U|
|5|V|W|X|Y|Z|

The Bifid cipher uses the Polybius square but adds a layer of complexity.
Start with a secret message. Remove spaces and punctuation.
`plaintext = "ikilledmufasa"`
Encipher the message using the basic Polybius cipher, but write the numbers in two rows under the message, like so:

|i|k|i|l|l|e|d|m|u|f|a|s|a|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|2|2|2|3|3|1|1|3|4|2|1|4|1|
|4|5|4|1|1|5|4|2|5|1|1|3|1|

Read off the numbers horizontally, in pairs:
`22 23 31 13 42 14 14 54 11 54 25 11 31`
Generate the ciphertext by converting these new pairs of numbers into new letters using the Polybius square.
`ciphertext = "ghlcrddyaykal"`
Create a function that takes a plaintext or ciphertext, and returns the corresponding ciphertext or plaintext.
#
6. Word-chain is an array of words, where the next word is formed by either:
- Changing exactly one letter from the previous word.
- Adding or subtracting one letter.
```javascript
isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
// add "c" to "row" to get "crow", "n" to get "crown", etc.

isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true

isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
// "meat" => "teal" changes 2 letters (can only change 1).

isWordChain(["run", "runny", "bunny"]) ➞ false
// "run" => "runny" adds 2 letters (can only add 1).
```

NOTES:
- You can only do one (not both) for each word change.
- All words will be in lower-case.
#
7. Kathleen owns a beautiful rug store. She likes to group the rugs into 4 mutually exclusive categories.
- imperfect
- horizontally symmetric
- vertically symmetric
- perfect
An imperfect rug is one that is neither horizontally nor vertically symmetric. Here is an example of an imperfect rug:
```
[
  ["a", "a", "a", "a"],
  ["a", "a", "a", "a"],
  ["a", "a", "b", "b"]
]
```
The following is an horizontally symmetric rug. You could "fold" the rug across a hypothetical x-axis, and both sides would be identical. A horizontally symmetric rug is not vertically symmetric (otherwise this rug would be classified as perfect ).
```
[
  ["c", "a", "a", "a"],
  ["b", "b", "b", "b"],
  ["c", "a", "a", "a"]
]
```
The following is a vertically symmetric rug. You could "fold" the rug across a hypothetical y-axis, and both sides would be identical. A vertically symmetric is not horizontally symmetric (otherwise this rug would be classified as perfect ).
```
[
  ["a", "b", "a"],
  ["b", "b", "b"],
  ["a", "b", "a"],
  ["a", "b", "a"]
]
```
Finally, a perfect rug is one that is both vertically and horizontally symmetric. That is, folded either length-wise or width-wise will yield two identical pieces.
```
[
  ["a", "b", "b", "a"],
  ["b", "b", "b", "b"],
  ["a", "b", "b", "a"]
]
```
Given a rug of m x n dimension, determine whether it is imperfect, horizontally symmetric, vertically symmetric or perfect. Rugs are represented using a two-dimensional array.
```javascript
classifyRug([
  ["a", "a"],
  ["a", "a"]
]) ➞ "perfect"

classifyRug([
  ["a", "a", "b"],
  ["a", "a", "a"],
  ["b", "a", "a"]
]) ➞ "imperfect"

classifyRug([
  ["b", "a"],
  ["b", "a"]
]) ➞ "horizontally symmetric"

classifyRug([
  ["a", "a"],
  ["b", "b"]
]) ➞ "vertically symmetric"
```

NOTES:
- You can consider a `1 x n` rug as being trivially horizontally symmetric, an `n x 1` rug as being trivially vertically symmetric, and a `1 x 1` rug as being trivially perfect.
#
8. An island is a region of contiguous ones. A contiguous one is a `1` that is touched by at least one other `1`, either horizontally, vertically or diagonally. Given a piece of the map, represented by a 2D array, create a function that returns the area of the largest island.

To illustrate, if we were given the following piece of the map, we should return `4`.
```
[
  [0, 0, 0],
  [0, 1, 1],
  [0, 1, 1]
]
```
Our function should yield `2` for the map below:
```
[
  [1, 0, 0],
  [0, 0, 1],
  [0, 0, 1]
]
```
Our function should yield `4` for the map below: :
```
[
  [1, 0, 0],
  [0, 1, 1],
  [0, 0, 1]
]
```

NOTES:
- Maps can be any `m x n` dimension.
- Maps will always have at least 1 element. `m >= 1` and `n >= 1`.
#
9. Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.
```javascript
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
//"psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
```

NOTES:
- More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
#
10. For this exercise, keep in mind the following definitions:

- A term is either an initials or word.
- initials = 1 character
- words = 2+ characters (no dots allowed)

A valid name is a name written in one of the following ways:

- H. Wells
- H. G. Wells
- Herbert G. Wells
- Herbert George Wells

The following names are invalid:

- Herbert or Wells (single names not allowed)
- H Wells or H. G Wells (initials must end with dot)
- h. Wells or H. wells or h. g. Wells (incorrect capitalization)
- H. George Wells (middle name expanded, while first still left as initial)
- H. G. W. (last name is not a word)
- Herb. G. Wells (dot only allowed after initial, not word)

Rules
- Both initials and words must be capitalized.
- Initials must end with a dot.
- A name must be either 2 or 3 terms long.
- If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
- The last name must be a word (not an initial).

Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

```javascript
validName("H. Wells") ➞ true

validName("H. G. Wells") ➞ true

validName("Herbert G. Wells") ➞ true

validName("Herbert") ➞ false
// Must be 2 or 3 words

validName("h. Wells") ➞ false
// Incorrect capitalization

validName("H Wells") ➞ false
// Missing dot after initial

validName("H. George Wells") ➞ false
// Cannot have: initial first name + word middle name

validName("H. George W.") ➞ false
// Last name cannot be initial

validName("Herb. George Wells") ➞ false
// Words cannot end with a dot (only initials can)
```

NOTES:
- A term is either an initial or word.
- Initials and words are disjoint sets.

#
11. A wristband can have 4 patterns:

- horizontal: each item in a row is identical.
- vertical: each item in a column is identical.
- diagonal left: each item is identical to the one on it's upper left or bottom right.
- diagonal right: each item is identical to the one on it's upper right or bottom left.

You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

```javascript
isWristband([
  ["A", "A"],
  ["B", "B"],
  ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
  ["A", "B"],
  ["A", "B"],
  ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
  ["A", "B", "C"],
  ["C", "A", "B"],
  ["B", "C", "A"],
  ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
  ["A", "B", "C"],
  ["B", "C", "A"],
  ["C", "A", "B"],
  ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
```


CDN