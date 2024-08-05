function eligibleToVote(users){
    
    let user = [];
    
    for(let i=0;i<users.length;i++){
    
        if(users[i].age>=18){
        
            user.push(users[i]); 
        
        }
    
    }
    
    return user;
 
}

 let users = [
    
    {
        "name":"User1",
    
        "age":25
    
    },
     
    {
     
        "name":"User2",
        
        "age":16
    
    }
 
 ]
 
console.log(eligibleToVote(users))
