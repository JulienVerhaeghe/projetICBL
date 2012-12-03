/**
 * @author psid
 */

jQuery(function($){
	/* Mode strict */
	"use strict";
	console.log('chargement de la page');
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
		console.log('leftArrow');
		
		
		var current = $('.actif');
		var previous = $('.actif').prev();
		current.animate({
			left: 850,
		},1000,function(){
			
			previous.animate({
			left: 0,
		},1000)
			previous.addClass('actif');
			current.removeClass('actif');
		}
		)
		
		
		
		
	});

	
	
	$('#rightArrow').click(function() {
		console.log('rightArrow');
		
		var current = $('.actif');
		var next = $('.actif').next();
		current.animate({
			left: -850,
		},1000,function(){
			
			next.animate({
			left: 0,
		},1000)
			next.addClass('actif');
			current.removeClass('actif');
		}
		)
		
		
		
		
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