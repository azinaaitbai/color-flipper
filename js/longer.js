function getLongestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  console.log(maxLength);
  console.log(longestWord);
}

getLongestWord(
  "This is a string, the longest word and its length will be printed on the console. Isn't it incredible ?"
);
