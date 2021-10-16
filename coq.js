$(document).ready(function(){
    $('pre').html(function(index, html){
        return html.replaceAll('Definition','<b>Definition</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('Fixpoint','<b>Fixpoint</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('match','<b>match</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('with','<b>with</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('end','<b>end</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('fix','<b>fix</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('fun','<b>fun</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('forall','<b>forall</b>');
    });
});