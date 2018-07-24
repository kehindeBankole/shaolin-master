// Slideshow
 var slideIndex = 1;
 showDivs(slideIndex);

 function plusDivs(n) {
   showDivs(slideIndex += n);
 }

 function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   x[slideIndex-1].style.display = "block";  
 }



 function w3_open() {
     document.getElementById("mySidebar").style.display = "block";
}
 function w3_close() {
     document.getElementById("mySidebar").style.display = "none";
 }
 var myIndex = 0;
 carousel();

function carousel() {
   var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}    
   x[myIndex-1].style.display = "block";  
   setTimeout(carousel, 5000); // Change image every 2 seconds
}



    // Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}




        






