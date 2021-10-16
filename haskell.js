$(document).ready(function(){
    $('pre').html(function(index, html){
        return html.replaceAll('data','<b>data</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('where','<b>where</b>');
    });
});