function greetUser(user) {
    console.log("Hello");
    return "hello " + user.name;
  }
  
var user={
    firstName : "100xDevs",
    age : "21"
}

console.log(greetUser(user));
