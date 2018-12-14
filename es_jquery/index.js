$(document).ready(function(){
    console.log('ciao')
})
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

    $(function(){
        for(let i = 0; i<myArray.length; i++){
           /* document.write(myArray[i].id,' ', myArray[i].name, ' ')*/

            $("#content").append("<span>"+ myArray[i].id + "</span>")
            $("#content").append("<p>" + myArray[i].name + "</p>")
        }
    })
