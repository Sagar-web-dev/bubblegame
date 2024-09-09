var timer = 60;
var score  = 0;
var hitrn = 0;
function forbubblemake(){
    var clutter ="";

for(var i= 1; i<169; i++){
   var rn = Math.floor(Math.random()*10) 
   clutter += ` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
 


// for timer
function fortimer(){
    setInterval(function(){
        if(timer>=1){

            timer--;
            document.querySelector("#timeinterval").textContent = timer;
        }else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000);
}


// for hit changer

function forhitchange(){
     hitrn = Math.floor(Math.random()*10)
    document.querySelector("#forhit").textContent = hitrn;
}





//for increase score

function increasescore(){
    score += 10;
    document.querySelector("#scoreincrease").textContent = score;
}




// concept of the eventbubbling
// jispe clicke karonge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundega,waa bhi naa milne par event parent ke parent ke parent par listener dhundega

document.querySelector("#pbtm").addEventListener("click",function(dets){
    // console.log(dets.target.textContent) // dets.target hum div tak phuche and textcontent se sidha element tak
    var clickedbuble = Number(dets.target.textContent); //here dets.target.textContent give the string to change it into the number we have to use the number
    if(clickedbuble === hitrn){
        increasescore();
        forbubblemake(); 
        forhitchange();
        // for making the new bubble we have to make the run the function forbubblemake
        //for changing the hit bubble run we have to run the forhitchange function we made it above

    }
});



fortimer();
forbubblemake();
forhitchange();
increasescore();