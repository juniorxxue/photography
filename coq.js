$(document).ready(function(){
	$('pre').html(function(index, html){
		return html.replace('Definition','<b>Definition</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('Fixpoint','<b>Fixpoint</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('match','<b>match</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('with','<b>with</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('end','<b>end</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('fix','<b>fix</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('fun','<b>fun</b>');
	});
	$('pre').html(function(index, html){
		return html.replace('forall','<b>forall</b>');
	});
});
