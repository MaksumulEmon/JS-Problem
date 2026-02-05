// function searchByPrefix(phonebook, prefix) {
//     let result = [];

//     for (let name in phonebook) {
//         if (name.startsWith(prefix)) {
//             result.push(name);
//         }
//     }

//     return result;
// }

// let phonebook1 = { maksumul: "0181", masum: "0172", rafi: "0193" };
// console.log(searchByPrefix(phonebook1, "mak"));




function searchByPrefix(phonebook, prefix) {

    //    console.log(phonebook)

    let result = [];

    for (let name in phonebook) {
        // console.log(name); 
        if(name.startsWith(prefix)) {
            result.push(name);
        }                                  //, "->",phonebook[name]) Key Value 
    }
    return result;
 
}

let phonebook = { mina: "013", mim: "014", rina: "015" };
console.log(searchByPrefix(phonebook, "mi"));
