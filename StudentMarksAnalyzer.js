function analyzeMarks(marksObj) {
    // console.log(marksObj);


    let total = 0;
    let hightMark = -Infinity;
    let lowestMark = Infinity;

    let highSubject =null;
    let lowestSubject =null;


    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total = total + mark;

        if (mark > hightMark){
             hightMark = mark;
             highSubject= subject;

        }
        else if(mark < lowestMark){
            lowestMark =mark;
            lowestSubject= subject;
        }
           
    }

    console.log("heightMark ->", hightMark);
    console.log("LowestMark ->", lowestMark);
    console.log("hight Subject ->", highSubject);
    console.log("Lowest Subjecct -> ", lowestSubject);



    let average = total / Object.keys(marksObj).length;
    // console.log(" Total ->",total);
    // console.log(" Average ->", average);

    return {
        total,
        average,
        highSubject,
        lowestSubject
    };
}


let output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output);