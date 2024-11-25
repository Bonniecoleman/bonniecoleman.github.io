


var img = document.getElementsByClassName("img-modal");                                          
var modal = document.getElementsByClassName("modal");
var buttonC = document.getElementsByClassName("buttonC");
// var funcs = [];
// When the user clicks on the button, open the modal 

// for(var i=0; i<2; i++){
//     var img = document.getElementsByClassName("img-modal")[i];                                          
//     var modal = document.getElementsByClassName("modal")[i];

//     img.onclick = function() {    
//     modal.style.display = "block";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// }


for ( var i = 0; i < img.length; i++ ) (function(i){ 
    img[i].onclick = function() {
      modal[i].style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }

    buttonC[i].onclick = function() {
            modal[i].style.display = "none";
    }
  }
})(i);



// var i=1;
// img[i].onclick = function() {    
//     modal[i].style.display = "block";
// }
// img[1].onclick = function() {    
//     modal[1].style.display = "block";
// } 
// When the user clicks anywhere outside of the modal, close it

