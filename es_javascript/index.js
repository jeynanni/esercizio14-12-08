document.addEventListener("DOMContentLoaded", function (){
})   
    console.log('ok correct ===')

    let myArray = [
    {
        id : 1,
        name : 'brian'
    },
    {
        id : 2,
        name : 'kevin'
    },
    {
        id : 3,
        name : 'nick'
    }
]
console.log(myArray)

for(let i=0; i<myArray.length; i++){
    /*document.write(myArray[i].id,' ', myArray[i].name, ' ')*/

let myId = myArray[i].id.toString()
let span = document.createElement('span')
let textSpan = document.createTextNode(myId)
span.appendChild(textSpan)
document.getElementById('content').appendChild(span)

let myPar = document.createElement('p')
let myNewPar = document.createTextNode(myArray[i].name)
myPar.appendChild(myNewPar)
document.getElementById('content').appendChild(myPar)

}
