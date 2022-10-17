"use strict";
//Theese are variables that are used in the functions and/or in the addEventListeners.
let form = document.getElementById("form");
let formQuestion = document.getElementById("questionForm");
let formSkills = document.getElementById("skillsForm");
let findUserForm = document.getElementById("findUserForm");
let firstNameForm = document.getElementById("firstnameForm");
let lastnameForm = document.getElementById("lastnameForm");
let personalityTypeForm = document.getElementById("personalityTypeForm");
let skillsForm = document.getElementById("skillsForm");
let result = document.getElementById("result");

//This function is to add a person to the rest API server.
//It saves the information in the form, JSON.stringify it and then sends it to the server.
function addAPerson(){
let newPerson = {
    firstname: firstNameForm.value,
    lastname: lastnameForm.value,
    personalityType: personalityTypeForm.value,
    skills: skillsForm.value}
const jsonString = JSON.stringify(newPerson);
console.log(jsonString);
fetch('http://localhost:3000/hanna', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: jsonString
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
}
//This function is to find the users from the rest API server.
// It fetches the users from the server with endpoint Api/users/,
// and then it loops through the object personalityType to match the keyword.
//If the keyword matches the personalityType, it will print out the firstname of the users in a list.

function fetchingPersonality(keyword){
    fetch('http://localhost:3000/api/users/')
    .then((response) => response = response.json())
    .then(users => {
        document.getElementById("resultsPersonality").innerHTML = "";
        for (let object in users) {
             if (users[object].personalityType.toLowerCase() === keyword.toLowerCase()){
                 var list = document.createElement("list");
                document.getElementById("resultsPersonality").appendChild(list);
                var unorderdlist = document.createElement("ul");
                unorderdlist.textContent= users[object].firstname;
                list.appendChild(unorderdlist);
            }
        }})
    .catch((error) => { console.log("Error: " + error) })
};

//This function is to find the personalityTypes from the rest API server with endpoint /hanna.
//It fetches the users, loops through the object personalityType to match the keyword.
//If the keyword matches the skills, it will print out the firstname of the users in a list.
//It will also change the background color of the box to the color of the personalityType that exists.
//If it doesnt exist, it will change back to its original colour darkcyan.
function fetchingOwnUserPersonalityType(keyword) {
    fetch('http://localhost:3000/hanna')
    .then (response => response = response.json())
    .then (users => {
        for (let object in users) {
        if (users[object].personalityType.toLowerCase() === keyword.toLowerCase()){
            var list = document.createElement("list");
            document.getElementById("resultsPersonality").appendChild(list);
            var unorderdlist = document.createElement("ul");
            unorderdlist.textContent= users[object].firstname;
            list.appendChild(unorderdlist);}
        }
        if (keyword.toLowerCase() === "grön")
        {document.getElementById("personalityTypeBox").style.backgroundColor = "#2E8B57";}
    else if (keyword.toLowerCase()=== "blå")
        {document.getElementById("personalityTypeBox").style.backgroundColor = "#191970";}
    else if (keyword.toLowerCase()=== "röd")
        {document.getElementById("personalityTypeBox").style.backgroundColor = "darkred";}
    else if (keyword.toLowerCase()=== "gul")
        {document.getElementById("personalityTypeBox").style.backgroundColor = "#DAA520";}
    else {document.getElementById("personalityTypeBox").style.backgroundColor = "darkcyan";}
    })
    .catch((error) => { console.log("Error: " + error) });
}

//This function is to find a users by name from the rest API server.
// It fetches the users from the server with endpoint Api/users/,
// and then it loops through the object firstname to match the keyword.
//If the keyword matches the firstname, it will create a box with all the information about the user.
//InnerHTML is chosen to style the box information in an easy way. 

function fetchingUsers(){
    fetch('http://localhost:3000/api/users/')
    .then((response) => response = response.json())
    .then(users => {
        let searchUsers = document.getElementById("searchUsers").value;
        result.innerHTML = "";
        for (let object in users) {
            if (users[object].firstname.toLowerCase() === searchUsers.toLowerCase()) {
            let resultbox = document.createElement("div");
                result.appendChild(resultbox);
                resultbox.style.flex = "1";
                resultbox.style.border = "2px dotted darkcyan";
                resultbox.style.padding = "10px";
                resultbox.innerHTML += `<h2>${users[object].firstname} ${users[object].lastname}</h2>`
                resultbox.innerHTML += `<h3>Github:</h3> <p>${users[object].github}</p> <h3>Discord:</h3> <p>${users[object].discord}</p>`
                resultbox.innerHTML += `<h3>Personlighetstyp:</h3> <p>${users[object].personalityType}</p>`;
                resultbox.innerHTML += `<h3>Förmåga och/eller hobby:</h3> <p>${users[object].skills}</p>`;
            }
        }
    })
    .catch((error) => { console.log("Error: " + error) });
}
//This function is to find a users by name from the rest API server.
// It fetches the users from the server with endpoint /hanna
// and then it loops through the object firstname to match the keyword.
//If the keyword matches the firstname, it will create a box with all the information about the user.
//InnerHTML is chosen to style the box information in an easy way. 

function fetchingOwnUser() {
    fetch('http://localhost:3000/hanna')
    .then (response => response = response.json())
    .then (users => {
        let searchUsers = document.getElementById("searchUsers").value;
        for (let object in users) {
            if (users[object].firstname.toLowerCase() === searchUsers.toLowerCase()) {
            let resultbox = document.createElement("div");
                result.appendChild(resultbox);
                resultbox.style.flex = "1";
                resultbox.style.border = "2px dotted darkcyan";
                resultbox.style.padding = "10px";
                resultbox.innerHTML += `<h2>${users[object].firstname} ${users[object].lastname}</h2>`
                resultbox.innerHTML += `<h3>Github:</h3> <p>${users[object].github}</p> <h3>Discord:</h3> <p>${users[object].discord}</p>`
                resultbox.innerHTML += `<h3>Personlighetstyp:</h3> <p>${users[object].personalityType}</p>`;
                resultbox.innerHTML += `<h3>Förmåga och/eller hobby:</h3> <p>${users[object].skills}</p>`;
            }
        }
        findUserForm.reset();
    })
    .catch((error) => { console.log("Error: " + error) });
}

//This function is to find a user with a specific skill/trait from the rest API server.
// It fetches the users from the server with endpoint Api/users/,
// and then it loops through the object skills to split the 3word sentences into an array with singular words.
//It then loops through the array to match the keyword.
//If the keyword matches one of the skills, it will join the words back together from the array.
//It will then loop through the users again to find the matching skills/traits to the users.
//First then it can print the users information in a box.
//InnerHTML is chosen to style the box information in an easy way.

    function findASkill(keyword) {
        fetch('http://localhost:3000/api/users')
        .then(response => response = response.json())
        .then(users => {
            let skillArray = [];
            for (let object in users) {
              skillArray.push(users[object].skills.toLowerCase().split(" "));
            }
            for (let skill in skillArray) {
                if (skillArray[skill].includes(keyword.toLowerCase())) {
               let searchSkill = skillArray[skill].join(" ");
            for (let object in users){
               if (users[object].skills.toLowerCase() === searchSkill) {
                let resultbox = document.createElement("div");
                resultbox.style.flex = "1";
                resultbox.style.border = "2px dotted darkcyan";
                resultbox.style.padding = "10px";
                result.appendChild(resultbox);
                resultbox.innerHTML += `<h2>${users[object].firstname} ${users[object].lastname}</h2>`
                resultbox.innerHTML += `<h3>Github:</h3> <p>${users[object].github}</p> <h3>Discord:</h3> <p>${users[object].discord}</p>`
                resultbox.innerHTML += `<h3>Personlighetstyp:</h3> <p>${users[object].personalityType}</p>`;
                resultbox.innerHTML += `<h3>Förmåga och/eller hobby:</h3> <p>${users[object].skills}</p>`;
            }
            }}}})
            
        .catch((error) => { console.log("Error: " + error) });
    }
//This function is to find a user with a specific skill/trait from the rest API server.
// It fetches the users from the server with endpoint /hanna,
// and then it loops through the object skills to split the 3word sentences into an array with singular words.
//It then loops through the array to match the keyword.
//If the keyword matches one of the skills, it will join the words back together from the array.
//It will then loop through the users again to find the matching skills/traits to the users.
//First then it can print the users information in a box.
//InnerHTML is chosen to style the box information in an easy way.

    function findOwnSkill(keyword) {
        fetch('http://localhost:3000/hanna')
        .then(response => response = response.json())
        .then(users => {
            let skillArray = [];
            for (let object in users) {
              skillArray.push(users[object].skills.toLowerCase().split(" "));
            }
            for (let skill in skillArray) {
                if (skillArray[skill].includes(keyword.toLowerCase())) {
               let searchSkill = skillArray[skill].join(" ");
            for (let object in users){
               if (users[object].skills.toLowerCase() === searchSkill) {
                let resultbox = document.createElement("div");
                resultbox.style.flex = "1";
                resultbox.style.border = "2px dotted darkcyan";
                resultbox.style.padding = "10px";
                result.appendChild(resultbox);
                resultbox.innerHTML += `<h2>${users[object].firstname} ${users[object].lastname}</h2>`
                resultbox.innerHTML += `<h3>Github:</h3> <p>${users[object].github}</p> <h3>Discord:</h3> <p>${users[object].discord}</p>`
                resultbox.innerHTML += `<h3>Personlighetstyp:</h3> <p>${users[object].personalityType}</p>`;
                resultbox.innerHTML += `<h3>Förmåga och/eller hobby:</h3> <p>${users[object].skills}</p>`;
            }}}}})
            
        .catch((error) => { console.log("Error: " + error) });
    }
//This is a function made to submit the form to find a user with a specific skill/trait.
//This is because the addEventListener is not working with the function findASkill(Which both Kevin and I have tried to fix).
//It will call the function findASkill with the keyword from the form.
function submitForm(e) {
    e.preventDefault();
    result.innerHTML = "";
        let skillSearch = document.getElementById("skillSearch").value;
        findASkill(skillSearch);
        findOwnSkill(skillSearch);
    }

//This will call the function to add a person when the form to add your own information is submitted.
 formQuestion.addEventListener("submit", (e) => {
     e.preventDefault();
     document.getElementById("submitBoxLine").textContent= `Välkommen ${firstNameForm.value}!`;
     addAPerson();
    formQuestion.reset();
});

//This till call the functions to search for which users have a certain personalitytrait from both endpoints in the api.
 form.addEventListener("submit", (e) => {
    document.getElementById("resultsPersonality").innerHTML = "";
    let search = document.getElementById("search").value;
    fetchingPersonality(search);
    fetchingOwnUserPersonalityType(search);

    e.preventDefault();
    form.reset(); 
});

 //This will call the function to search for a user with a specific firstname when submitting the form.
    findUserForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        fetchingUsers();
        fetchingOwnUser();
    });

