$(document).ready(function(){
	$("a").on('click', function(event) {
    	if (this.hash !== "") {
      		event.preventDefault();
      		var target = this.hash;
      		$('html, body').animate({
        		scrollTop: $(target).offset().top
      		}, 800, function(){
        		window.location.hash = target;
      		});
    	}
  	})
});

$(window).scroll( function(){
  if(window.scrollY >= window.innerHeight-3){
    $('#nav').fadeIn(600);
  }else{
    $('#nav').fadeOut(600);
  }
});
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}