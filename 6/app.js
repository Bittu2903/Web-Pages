// Comments here
alert("hello from programming learners");
var pics = [
    "Images/5.jpg",
    "Images/2.jpg", 
    "Images/3.jpg", 
    "Images/4.jpg", 
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click",function () {
    if(counter === 4){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
    
});

