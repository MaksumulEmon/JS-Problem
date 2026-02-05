// function textStats(text) {

//   let total = 0;

//   for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     total =total+char;
//   }



//   console.log(total);


//   return total;
// }

// textStats("JavaScript is fun to learn");



function textStats(text) {
  let total = 0;

  let vawels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


  let vowelCount = 0;
  let consonent = 0;

  let words = text.split(" ");

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      total = total + 1;
    }
    if (vawels.includes(text[i])) {
      vowelCount++;
    }

    if(vawels.includes(text[i]) == false && text[i]!==' '){
      consonent++;
    }
  }


  let wordCount = words.length;


  return {
    total,
    wordCount,
    vawel: vowelCount,
    consonent:consonent,
  }
}

let output = textStats(" I am OK ");
// console.log(output);



















function textStats(text) {

    let characters = 0;
    let vowels = 0;
    let consonants = 0;
    let vowelList = "aeiouAEIOU";

    // Character, vowel, consonant count
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        if (ch !== " ") {          // exclude spaces
            characters++;
        }

        if (vowelList.includes(ch)) {
            vowels++;
        }
        else if (ch.match(/[a-zA-Z]/)) {   // letter but not vowel = consonant
            consonants++;
        }
    }

    // Word count (remove extra spaces)
    let words = text.trim().split(/\s+/).length;

    return { characters, words, vowels, consonants };
}

console.log(textStats("JavaScript is fun to learn"));
