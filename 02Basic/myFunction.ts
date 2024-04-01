//Not a good way to do this
// function addTwo(num){
//     return num + 2
// }
// addTwo(5);

function addTwo(num: number){
    // return num + 2
    return "hello"
}
addTwo(5);
let loginUser = (name: string,email: string,isPaid: boolean = false) =>{

}
function signUpser(name: string,email: string,password: number){

}
loginUser('h','m@m.com')
signUpser("Mayur","mayur@12.com",3);

// function getValue(myVal: number): string{
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }


const getHello =(s: string):string =>{
    return ""
}
const heros = ['thor','spiderman','ironman'];
heros.map((hero): string=>{
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}


export{}