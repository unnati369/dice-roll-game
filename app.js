var btn = document.querySelector("#btn")
var output = document.querySelector("#output") 
var statement = document.querySelector("#statement") 
var img1 = document.querySelector("#dice1") 
var img2 = document.querySelector("#dice2") 
btn.addEventListener("click",()=>{
    var array =[1,2,3,4,5,6]
    var randomno1 = Math.floor(Math.random()*6)
    var randomno2 = Math.floor(Math.random()*6)

    img1.src = "./images/"+ `${Number(randomno1)+1}.jpeg`
    img2.src = "./images/"+ `${Number(randomno2)+1}.jpeg`

    if(randomno1 > randomno2){
statement.innerHTML = "Player One wins🥇"

    }
   else if(randomno1 < randomno2){
        statement.innerHTML = "Player Two wins🥇"
        
            }
            else if(randomno1 === randomno2){
                statement.innerHTML = "tie😁"
                
                    }
    

})