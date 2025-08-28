let employeeList = [
    {
        name: "Arulmurugan M",
        age :25,
        email: "arul@gmail.com",    
    },
    {
        name: "Bharath an",
        age :23,
        email: "bharath@gmail.com",    
    },
    {
        name: "Alex",
        age :24,
        email: "alex@gmail.com",    
    },
    {
        name: "kumar",
        age :21,
        email: "kumar@gmail.com",    
    }
]

const search = (searchText)=>{
    return employeeList.filter((res)=>
          res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
}
searchText="AN";
console.log(search(searchText),"result");

// MODIFY DATA  - ADD COUNTRY
// employeeList.forEach((value)=>{
//     value.country = "India";
// })
// console.log(employeeList,"updataData")  

// Add the column as a senior citizen contion based



// object looping method
let object = {
        name: "Bharath an",
        age :23,
        email: "bharath@gmail.com",    
    }
    for(let key in object){
        console.log("key",object[key])
    }