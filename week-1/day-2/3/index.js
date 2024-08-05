function greetUser(user) {
    var genderConverted=user.gender.toLowerCase();
    if(genderConverted=="male"){
       if(user.age>=18){
            return "Hello Mr."+user.firstName+", you are eligible to vote.";
        }
        else{
            return "Hello Mr."+user.firstName+", you are not eligible to vote.";
        }
    }
    else if(genderConverted=="female"){
        if(user.age>=18){
            return "Hello Mrs."+user.firstName+", you are eligible to vote.";
        }
        else{
            return "Hello Mrs."+user.firstName+", you are not eligible to vote.";
        }
    }
    else{
        if(user.age>=18){
            return "Hello "+user.firstName+", you are eligible to vote.";
        }
        else{
            return "Hello "+user.firstName+", you are not eligible to vote.";
        }
    }
  }
  
var user1={
    firstName : "100xDevs",
    age : "17",
    gender : "Male"
}

var user2={
    firstName : "100xDevsiii",
    age : "21",
    gender : "feMaLe"
}

console.log(greetUser(user1));
console.log(greetUser(user2));
