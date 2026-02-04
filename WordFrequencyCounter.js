function wordFrequency(sentence) {
    let words = sentence.split(" ");
    // console.log(words);

    let wordCount ={};

    // console.log(wordCount.hasOwnProperty("name"));

    for (let word of words) {
        // console.log(word);
        let wordLowerCase= word.toLowerCase();
        if(wordCount.hasOwnProperty(wordLowerCase)){
            // wordCount[word] =wordCount+1;
            wordCount[wordLowerCase] ++;
        }else{
            wordCount[wordLowerCase] =1;
        }
    }
    return wordCount;

}


let output = wordFrequency("I love JS and I love coding and JS is fun Fun");
console.log(output);