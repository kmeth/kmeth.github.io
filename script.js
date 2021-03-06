$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
    /* Mobile nav*/
$('.menu').click(function(){
     $('.main-nav').toggleClass('active'); 
    $('nav').toggleClass('active-nav'); 
   });
    
    
    
    
/* COLLAPSIBLE*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-wf");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('bounceInLeft');
        $(this).css("visibility","visible");
      }
    });
  
  });

    /*  IMAGE INTERVAL */
    
    var images = ["images/avatars/av_1.jpg","images/avatars/av_2.jpg","images/avatars/av_3.jpg","images/avatars/av_4.jpg","images/avatars/av_5.jpg","images/avatars/av_6.jpg"]
    var curPic = -1;
    var img0 = new Array();
    for(i=0;i<images.length;i++){
        img0[i] = new Image();
        img0[i].src = images[i];
        
    }
    
    function swapImage(){
        curPic = (++curPic > images.length-1)? 0: curPic;
        imgCont.src = img0[curPic].src;
        setTimeout(swapImage,2000);
    }
    
    window.onload=function(){
        imgCont=document.getElementById('avatar-pic');
        swapImage();
    }
    
});
