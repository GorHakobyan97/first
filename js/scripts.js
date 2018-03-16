$(document).ready(function(){
	window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
	var frTop = $('#first').offset().top;
	 var x=($(window).height());
		var frTop2 = $('#third').offset().top;
	var lastScrollTop = 0;
	var lastScrollTop2 = 0;

	$(window).on('scroll',function(){
		
		var top = $(window).scrollTop();
		var thtop = parseInt($('#third').css('top'));
		var right = parseInt($('#second').css('right'));
		var right2 = parseInt($('#four').css('right'));
		var difference = 50;
		console.log(top+'-----'+frTop)
		if(top > frTop ){
			$('#first').css({top:0,position:'fixed'});
			if (top > lastScrollTop){
				
					if(Math.abs(right) <= difference){
						difference = Math.abs(right);
					}
					$('#second').css('right', right + difference);
					
			} else
					if(top<frTop+x){
						$('#second').css('right', right - difference+-20);
							
					}
					if(right==0){
					
						    $('#third').css('top', 2.5*x);	  	
   				y=20;
   				if(top>=lastScrollTop2){
						 if(top>x*4){
						  if(Math.abs(right2) <= y){
								 y=Math.abs(right2);
					}				
						    	$('#four').css('right', right2 + y);
						    	}
						   else{
							  
						   	$('#four').css('right',"-100%");
						   }
						    	}
						else {
							
							
							
							$('#four').css('right', right2 - y+-20);
							
							
						}
						}
						    else{
						    	$('#third').css('top', '100%');
						    	   }
			lastScrollTop = top;
		lastScrollTop2 = top;
		}else{
			$('#first').css({position:'relative'});
			$('#second').css('right',"-150%");
		}

			if(top==0){
				$('#four').css('right', '100%')
			}

			if(right2==0){
				$('#third').css('top', '-100%');
			}
	});

});

