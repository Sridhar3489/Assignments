function userDetails(users){

    return "age :"+ users.age+", "+"gender :"+users.gender+", "+"street: "+users.address.street;

}

let users={

    name:"user1",

    age:15,

    gender:"male",

    address:{

        street:"street1",

        state:"state1",

        country:"India"

    }

}

console.log(userDetails(users));
