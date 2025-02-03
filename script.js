let person = {
    firstname: "John", 
    lastname: "Johnsen",
    age: 54,
    pet: "Cape cobra"
    
}

// console.log(person.firstname)
// console.log(person.lastname);
// console.log(person["pet"]);
// console.log(person["age"]);

let person2 = {
    firstname: "John", 
    lastname: "Johnsen",
    age: 54,
    hobbier: ['Boksning', 'samlekort', 'film', 'skattejagt'],
    pet: {
        type: "Cape cobra",
        name: "Hr. Slange"

    },
}

for (let key in person2) {
    let value = person2[key];

    if (typeof value === "object" && !Array.isArray(value)) {
        console.log(key + ":");
        for (let subKey in value) {
            console.log("  " + subKey + ": " + value[subKey]);
        }
    } else if (Array.isArray(value)) {
        console.log(key + ": " + value.join(', '));
    } else {
        console.log(key + ": " + value);
    }
}
