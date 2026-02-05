function removeDuplicates(arr) {
    let unique =[];
    for(let num of arr){
        if(unique.includes(num) ===false){
            unique.push(num);
        }

    }
    return unique;
}


let output = removeDuplicates( [5, 3, 5, 2, 3, 9, 2, 7] );
console.log(output);