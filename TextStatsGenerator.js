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

    if (vawels.includes(text[i]) == false && text[i] !== ' ') {
      consonent++;
    }
  }


  let wordCount = words.length;


  return {
    total,
    wordCount,
    vawel: vowelCount,
    consonent: consonent,
  }
}

let output = textStats(" I am OK ");
console.log(output);


