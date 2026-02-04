function checkPassword(password) {

    let reasons = [];
    let length = password.length;

    let hasUppercase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");

    for (let i = 0; i < length; i++) {
        let character = password[i];
        // console.log(character);
        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        }
    }
    // console.log(password, length, hasUppercase, hasNumber);

    if (!hasNumber) {
        reasons.push("Misssing Number");
    }
    if (!hasUppercase) {
        reasons.push("Misssing UpperCase");
    }

    if (hasSpace == true) {
        reasons.push("Spaces Found")
    }

    // console.log(reasons);

    // Option 1
    // let isVaild =reasons.length ==0;
    let isVaild;
    if(reasons.length  === 0){
        isVaild=true;
    }
    else {
        isVaild =false;
    }



    // console.log(isVaild);

    return {
        valid: isVaild,
        reasons,
    };

}

let output = checkPassword("hello123World")
console.log(output);
// let output2 = checkPassword("Hello123")