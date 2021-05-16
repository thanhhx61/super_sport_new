//thanh menu
function myFunction(x) {
    x.classList.toggle("change");
}
let myIndex = 0;
carousel();

//hiệu ứng ảnh chạy tự động
function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000);    
}


