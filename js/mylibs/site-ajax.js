/**
 * @author psid
 */

jQuery(function($){
	/* Mode strict */
	"use strict";
	console.log('chargement de la page');
	
	var vignette=1;
	// réagir au changement d'historique (bouton précédent)
	function ecoute(){
		$('a').click(function() {
		event.preventDefault();
		console.log('click')
		var $this = $(this);
		update($this.attr("href"));
		
	});
	$('.check').click(function() {
		console.log('check');
		showInfo();
	});
	$('.infoBull').click(function() {
		console.log('check');
		hideInfo();
	});
	$('#leftArrow').click(function() {
		if(vignette>1){
			console.log('leftArrow');
			$('#slider').animate({
				left: '+=853',
			},1000);
			
			$('#arrow').animate({
				opacity:0
			},500,function(){
				if(vignette ==1){
					$('#arrow').removeClass('lyon');
					$('#arrow').addClass('toulouse');
				}
				if(vignette ==2){
					$('#arrow').removeClass('toulouse');
					$('#arrow').addClass('lyon');
				}
				if(vignette ==3){
					$('#arrow').removeClass('lyon');
					$('#arrow').addClass('rennes');
				}
				$('#arrow').animate({opacity:1})
			});
			vignette--;
		}	
		
		
	});

	
	
	$('#rightArrow').click(function() {
		console.log('rightArrow');
		
		$('#slider').animate({
			left: '-=853',
		},1000);
		
		
		$('#arrow').animate({
				opacity:0
			},500,function(){
				if(vignette ==2){
					$('#arrow').removeClass('toulouse');
					$('#arrow').addClass('lyon');
				}
				if(vignette ==3){
					$('#arrow').removeClass('lyon');
					$('#arrow').addClass('rennes');
				}
				$('#arrow').animate({opacity:1})
			});
		vignette++;
		
		
		
	});}
	
	
	function update(url){

		$.when(
			$.ajax({url:url,datatype:'html'}),
			$('#main').fadeOut()
		).done(function(argsAJAX,elem){
			var data = argsAJAX[0];
			var contenu = $(data).find('#content');
			$('#main').html(contenu);
			$('#main').fadeIn();
			
			
			ecoute();		
		});
	
	};
	
	
	function showInfo(){
		$('.infoBull').fadeIn();
		console.log($('#infoBull'));
	};
	function hideInfo(){
		$('.infoBull').fadeOut();
		console.log($('#infoBull'));
	};
		
		

	
	ecoute();
	
});