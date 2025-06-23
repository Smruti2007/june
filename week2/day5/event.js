//Event hnadling

let btn=document.querySelector("button")
console.log(btn)

//btn.onclick=()=>{
//     alert("button clicked") 
//}

//btn.onkey=()=>{
//     alert("button clicked using key" )  
//}

let input=document.querySelector("input");
console.log(input)

input.onchange=(e)=>{
    console.log("input value is",e.target.value)
}









let butt=document.querySelector("from button")

//to store the data from the local storage
butt.addEventListener("click",()=>{
    let input=document.querySelector("from input")
    console.log(input.value)

    localStorage.setItem("name",input.value);
})


//to featch the data from the local storage 
document.querySelector("#fetchdata").addEventListener("click",()=>{
     let name=localStorage.getItem("name")
     console.log(name)
})




    




