
// const User = {
//     name: "Mayur",
//     email: "myur@loc.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "Mayur",isPaid:false});

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs",price: 399}
// }

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser (user: User): User{

    return {name: "",email:"",isActive: true}
}
createUser({name: "",email:"",isActive: true})

export{}