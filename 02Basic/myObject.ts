
// // const User = {
// //     name: "Mayur",
// //     email: "myur@loc.dev",
// //     isActive: true
// // }

// // function createUser({name: string, isPaid: boolean}){}

// // createUser({name: "Mayur",isPaid:false});

// // function createCourse():{name: string, price: number}{
// //     return {name: "reactjs",price: 399}
// // }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser (user: User): User{

//     return {name: "",email:"",isActive: true}
// }
// createUser({name: "",email:"",isActive: true})


type User = {
    readonly _id: string
    name: string
    email:string
    isActive: boolean
    creditCardDetails?: number //? is given to mark the field as optional
}

let myUser: User = {
    _id: "1234",
    name: "Mayur",
    email: "mayu@loc.dev",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate &{
    cvv: number
}






export{}