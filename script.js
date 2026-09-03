document.addEventListener("DOMContentLoaded",()=>{


// =================================
// VARIABLES
// =================================


const openingScreen =
document.getElementById("openingScreen");


const enterButton =
document.getElementById("enterButton");


const yesButton =
document.getElementById("yesButton");


const noButton =
document.getElementById("noButton");


const kitty =
document.querySelector(".kitty");



let noCount = 0;


window.savedDate = "";
window.savedTime = "";




// =================================
// OPENING SCREEN
// =================================


if(enterButton && openingScreen){


enterButton.addEventListener("click",()=>{


openingScreen.classList.add(
"opening-hidden"
);



setTimeout(()=>{

openingScreen.style.display="none";

},800);



});


}






// =================================
// YES BUTTON
// =================================


if(yesButton){


yesButton.addEventListener("click",()=>{



if(kitty){


kitty.classList.remove(
"kitty-sad"
);



kitty.classList.add(
"kitty-happy"
);



setTimeout(()=>{

kitty.classList.remove(
"kitty-happy"
);


},800);


}




createHearts();



showDateScreen();



});


}







// =================================
// NO BUTTON
// =================================


if(noButton){



noButton.addEventListener("click",()=>{


noCount++;




if(noCount===1){


noButton.innerHTML =
"Please babe 🥺";


}


else if(noCount===2){


noButton.innerHTML =
"Think again 😭";


}


else if(noCount===3){


noButton.innerHTML =
"Choose YES ❤️";


}


else{


noButton.innerHTML =
"Catch me 😂";


moveNoButton();


}







if(kitty){



kitty.classList.remove(
"kitty-sad"
);



void kitty.offsetWidth;



kitty.classList.add(
"kitty-sad"
);




setTimeout(()=>{


kitty.classList.remove(
"kitty-sad"
);


},600);



}



});


}








// =================================
// MOVE NO BUTTON
// =================================


function moveNoButton(){



if(!noButton)return;



const padding = 40;



let maxX =
window.innerWidth -
noButton.offsetWidth -
padding;



let maxY =
window.innerHeight -
noButton.offsetHeight -
padding;




let x =
Math.random()*maxX;



let y =
Math.random()*maxY;





x=Math.max(
padding,
Math.min(x,maxX)
);



y=Math.max(
padding,
Math.min(y,maxY)
);




noButton.style.position =
"fixed";



noButton.style.left =
x+"px";



noButton.style.top =
y+"px";



}








// =================================
// FLOATING HEARTS
// =================================


function createHearts(){



for(let i=0;i<20;i++){



let heart =
document.createElement("div");



heart.className =
"floating-heart";



heart.innerHTML =
"❤️";



heart.style.left =
Math.random()*100+"vw";



heart.style.top =
"90vh";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();



},6000);



}


}




// =================================
// DATE SCREEN
// =================================


function showDateScreen(){



const container =
document.querySelector(".container");



if(!container)return;




container.innerHTML = `



<div class="date-screen">



<div class="date-icon">

💕


</div>




<h1>

YAYYYYY! 😍❤️

</h1>



<h2>

Date officially accepted! 🥰

</h2>




<p class="date-intro">

Now let's choose our perfect moment ✨

</p>





<div class="date-box">



<h2>

📅 PICK OUR DATE

</h2>




<label>

Choose Date

</label>



<input 
type="date"
id="dateInput">





<label>

Choose Time

</label>



<input 
type="time"
id="timeInput">





<p id="dateCuteMessage"></p>





<div 
id="selectedDatePreview"
class="selected-date-preview">


</div>





<button 
id="confirmDate">


CONFIRM OUR DATE ❤️


</button>





</div>



</div>


`;




setMinimumDate();


setupDateScreen();



}








// =================================
// MINIMUM DATE
// =================================


function setMinimumDate(){



const dateInput =
document.getElementById(
"dateInput"
);



if(!dateInput)return;




let today =
new Date();



let date =
today.toISOString()
.split("T")[0];



dateInput.min =
date;



}








// =================================
// DATE EVENTS
// =================================


function setupDateScreen(){



const dateInput =
document.getElementById(
"dateInput"
);



const timeInput =
document.getElementById(
"timeInput"
);



const confirmDate =
document.getElementById(
"confirmDate"
);





if(
!dateInput ||
!timeInput ||
!confirmDate
)return;







dateInput.addEventListener(
"change",
()=>{



const msg =
document.getElementById(
"dateCuteMessage"
);



const preview =
document.getElementById(
"selectedDatePreview"
);





let date =
new Date(
dateInput.value
);





let formatted =
date.toLocaleDateString(
"en-US",
{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

}

);





msg.innerHTML =

"Finally... our special day is coming ❤️";





preview.innerHTML = `


<span>

💕 OUR DATE

</span>


<strong>

${formatted}

</strong>


`;



});









timeInput.addEventListener(
"change",
()=>{



const preview =
document.getElementById(
"selectedDatePreview"
);




preview.innerHTML += `



<div class="selected-time">


<span>

⏰ TIME

</span>



<strong>

${timeInput.value}

</strong>



</div>


`;



});








confirmDate.addEventListener(
"click",
()=>{



if(
!dateInput.value ||
!timeInput.value
){


alert(
"Please select date and time ❤️"
);


return;


}






window.savedDate =
dateInput.value;



window.savedTime =
timeInput.value;




showBookingAnimation();




});



}








// =================================
// BOOKING ANIMATION
// =================================


function showBookingAnimation(){



const overlay =
document.createElement(
"div"
);



overlay.className =
"booking-overlay";





overlay.innerHTML = `



<div class="booking-content">



<div class="booking-heart">

💗

</div>



<h1>

OUR DATE IS

<br>

OFFICIALLY BOOKED ❤️

</h1>



<p>

I can't wait to make this memory with you ✨

</p>



<div class="booking-hearts">

💕 💖 💗 💘 💕

</div>



</div>



`;





document.body.appendChild(
overlay
);





setTimeout(()=>{


overlay.classList.add(
"show-booking"
);



},50);








setTimeout(()=>{


overlay.classList.remove(
"show-booking"
);




setTimeout(()=>{


overlay.remove();



showFinalScreen(
window.savedDate,
window.savedTime
);



},500);




},2500);




}








// =================================
// FINAL DATE PASS
// =================================


function showFinalScreen(date,time){



const container =
document.querySelector(
".container"
);



if(!container)return;





let dateObj =
new Date(date);




let finalDate =
dateObj.toLocaleDateString(
"en-US",
{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

}

);





container.innerHTML = `



<div class="confirmed-date">



<div class="date-pass">



<div class="pass-top">

<span>

💕 OUR SPECIAL DATE

</span>


<span>

NO.001 ❤️

</span>

</div>





<div class="pass-heart">

💗

</div>




<h1>

IT'S A DATE! 🎉

</h1>





<p class="pass-subtitle">

Officially reserved for two special people 🥰

</p>





<div class="pass-line"></div>





<div class="pass-details">



<div class="pass-detail">

<span class="detail-icon">

📅

</span>



<div>

<small>

DATE

</small>


<strong>

${finalDate}

</strong>


</div>


</div>





<div class="pass-detail">


<span class="detail-icon">

⏰

</span>


<div>


<small>

TIME

</small>


<strong>

${time}

</strong>


</div>


</div>




<div class="pass-detail">


<span class="detail-icon">

📍

</span>


<div>


<small>

LOCATION

</small>


<strong>

SECRET 🤫

</strong>


</div>


</div>



</div>





<div class="pass-line"></div>




<p class="pass-message">

Dress cute. Bring your smile. I'll handle the rest ❤️

</p>




</div>



<button 
id="messageButton"
class="message-button">


💌 A MESSAGE FOR YOU


</button>



</div>


`;




startCountdown(
date,
time
);



setupMessageButton();



}
// =================================
// COUNTDOWN
// =================================


let countdownInterval;



function startCountdown(date,time){



if(countdownInterval){

clearInterval(
countdownInterval
);

}




let target =
new Date(
date+"T"+time
).getTime();





function update(){



let now =
new Date().getTime();



let diff =
target-now;




if(diff<=0){


setValues(
0,
0,
0,
0
);


return;


}





let days =
Math.floor(
diff/(1000*60*60*24)
);




let hours =
Math.floor(
(diff/(1000*60*60))%24
);




let minutes =
Math.floor(
(diff/(1000*60))%60
);




let seconds =
Math.floor(
(diff/1000)%60
);





setValues(
days,
hours,
minutes,
seconds
);



}





function setValues(d,h,m,s){



const days =
document.getElementById(
"days"
);



const hours =
document.getElementById(
"hours"
);



const minutes =
document.getElementById(
"minutes"
);



const seconds =
document.getElementById(
"seconds"
);




if(days)
days.innerHTML =
String(d).padStart(2,"0");



if(hours)
hours.innerHTML =
String(h).padStart(2,"0");



if(minutes)
minutes.innerHTML =
String(m).padStart(2,"0");



if(seconds)
seconds.innerHTML =
String(s).padStart(2,"0");



}





update();



countdownInterval =
setInterval(
update,
1000
);



}









// =================================
// MESSAGE BUTTON
// =================================


function setupMessageButton(){



const button =
document.getElementById(
"messageButton"
);



if(!button)return;




button.addEventListener(
"click",
()=>{


openMessagePage();


}

);



}









// =================================
// MESSAGE PAGE
// =================================


function openMessagePage(){



const container =
document.querySelector(
".container"
);



if(!container)return;





container.innerHTML = `



<div class="message-page">





<div class="message-page-hearts">

💕

</div>





<p class="message-small-title">

JUST FOR YOU ❤️

</p>





<h1 class="message-page-title">

I HAVE SOMETHING

<br>

TO TELL YOU...

</h1>







<div class="envelope-wrapper">



<div class="envelope">



<div class="envelope-back"></div>





<div class="letter-paper">



<div class="letter-content">



<div class="letter-heart">

💗

</div>





<h2>

My Little Message ❤️

</h2>





<p>

I don't need a perfect world.

</p>




<p>

I just need beautiful moments with you.

</p>




<p>

Let's create memories together ✨

</p>






<div class="letter-sign">

— Your Abhi ❤️

</div>




</div>



</div>






<div class="envelope-flap">

<span>

💌

</span>


</div>





</div>



</div>








<button

id="openMessageButton"

class="open-message-button">


OPEN MY MESSAGE ❤️


</button>







<button

id="backToTicketButton"

class="back-ticket-button">


🎟️ BACK TO OUR DATE


</button>






</div>


`;





setupOpenMessage();

setupBackToTicket();



}











// =================================
// OPEN ENVELOPE
// =================================


function setupOpenMessage(){



const button =
document.getElementById(
"openMessageButton"
);



const envelope =
document.querySelector(
".envelope"
);




if(!button || !envelope)
return;






button.addEventListener(
"click",
()=>{



envelope.classList.add(
"envelope-open"
);



button.innerHTML =
"💗 MY HEART IS OPEN";



button.disabled =
true;



}

);



}










// =================================
// BACK TO TICKET
// =================================


function setupBackToTicket(){



const button =
document.getElementById(
"backToTicketButton"
);



if(!button)return;






button.addEventListener(
"click",
()=>{



showFinalScreen(
window.savedDate,
window.savedTime
);



}

);



}









// =================================
// DARK MODE
// =================================


const darkModeButton =
document.getElementById(
"darkModeButton"
);



if(darkModeButton){



darkModeButton.addEventListener(
"click",
()=>{



document.body.classList.toggle(
"dark-romance"
);




if(
document.body.classList.contains(
"dark-romance"
)

){


darkModeButton.innerHTML =
"☀️";


}

else{


darkModeButton.innerHTML =
"🌙";


}



}

);



}









// =================================
// MUSIC BUTTON
// =================================


const musicButton =
document.getElementById(
"musicButton"
);



const backgroundMusic =
document.getElementById(
"backgroundMusic"
);





if(
musicButton &&
backgroundMusic
){



musicButton.addEventListener(
"click",
()=>{



if(
backgroundMusic.paused
){



backgroundMusic.play();



musicButton.innerHTML =
"🔊";



}

else{



backgroundMusic.pause();



musicButton.innerHTML =
"🎵";


}



}

);



}









// =================================
// RESET NO BUTTON ON RESIZE
// =================================


window.addEventListener(
"resize",
()=>{



if(noButton){


noButton.style.left="";

noButton.style.top="";


}



});



});