function greetUser(user) {
    var genderConverted=toLower(user.gender);
    console.log(genderConverted);
    return "hello " + user.name;
  }
  
var user1={
    firstName : "100xDevs",
    age : "21",
    gender : "Male"
}

console.log(greetUser(user));
