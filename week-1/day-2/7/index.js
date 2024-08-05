function eligibleToVote(users){
    
    let user = [];
    
    for(let i=0;i<users.length;i++){

        let gender = users[i].gender.toLowerCase();
    
        if(users[i].age>=18 && gender=="male"){
        
            user.push(users[i]); 
        
        }
    
    }
    
    return user;
 
}

 let users = [
    
    {
        "name":"User1",
    
        "age":25,

        "gender" : "Male"
    
    },
     
    {
     
        "name":"User2",
        
        "age":16,

        "gender":"Female"
    
    }
 
 ]
 
console.log(eligibleToVote(users))
