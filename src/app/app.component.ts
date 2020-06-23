import { Component } from '@angular/core';

declare var $;
declare var jQuery : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="hemanth-resume" 
constructor(){
  $(document).ready(function(){
  
    startAnimation();
   function startAnimation(){
    jQuery('.skills').each(function(){

      jQuery(this).find('.skillbar').animate({
        width:jQuery(this).attr('data-percent')
      },3500); 
      
  });
   }                
});


// window.setInterval(function() { //setInterval (loop a function)
//   $(".cricket").toggleClass("flipped"); //toggle class "flipped"
// }, 2500);
// window.setInterval(function() { //setInterval (loop a function)
//   $(".bike").toggleClass("flipped"); //toggle class "flipped"
// }, 1500);
// window.setInterval(function() { //setInterval (loop a function)
//   $(".music").toggleClass("flipped"); //toggle class "flipped"
// }, 1000);
// window.setInterval(function() { //setInterval (loop a function)
//   $(".cinema").toggleClass("flipped"); //toggle class "flipped"
// }, 2000);
// window.setInterval(function() { //setInterval (loop a function)
//   $(".beer").toggleClass("flipped"); //toggle class "flipped"
// }, 2000);







// var lastScrollTop = 0;
// $(window).scroll(function(){
//   var st = $(this).scrollTop();
//   var banner = $('.navbar');
//   setTimeout(function(){
//     if (st > lastScrollTop){
//       banner.addClass('hide');
//     } else {
//       banner.removeClass('hide');
//     }
//     lastScrollTop = st;
//   }, 300);
// });

}
}