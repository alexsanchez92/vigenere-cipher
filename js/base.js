// jQuery SmoothScroll | Version 11-03-14
$(document).ready(function() {
   $('a[href*=#]').click(function() {
      // duration in ms
      var duration=700;

      // easing values: swing | linear
      var easing='swing';

      // get / set parameters
      var newHash=this.hash;
      var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;
      var oldLocation=window.location.href.replace(window.location.hash, '');
      var newLocation=this;

      // make sure it's the same location      
      if(oldLocation+newHash==newLocation)
      {
         // set selector
         if($.browser.safari) var animationSelector='body:not(:animated)';
         else var animationSelector='html:not(:animated)';

         // animate to target and set the hash to the window.location after the animation
         $(animationSelector).animate({ scrollTop: target }, duration, easing, function() {

            // add new hash to the browser location
            window.location.href=newLocation;
         });

         // cancel default click action
         return false;
      }
   });
 });
 
function tuitearcifrado(){
			var mencifrado  = document.getElementById("mensaje-cifrado").innerText;
			var twtUrl    = location.href;
			var maxLength = 140 - (twtUrl.length + 1);
			var twtLink = 'http://twitter.com/home?status='+encodeURIComponent("Acabo de cifrar un mensaje: "+mencifrado);
			window.open(twtLink, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=460, height=400");
}

function tuiteardescifrado(){
			var mendescifrado  = document.getElementById("mensaje-descifrado").innerText;
			var twtUrl    = location.href;
			var maxLength = 140 - (twtUrl.length + 1);
			var twtLink = 'http://twitter.com/home?status='+encodeURIComponent("Acabo de descifrar un mensaje: "+mendescifrado);
			window.open(twtLink, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=460, height=400");
}