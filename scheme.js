$(document).ready(function(){
    $('pre').html(function(index, html){
        return html.replaceAll('struct','<b>struct</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('define','<b>define</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('λ','<b>λ</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('eq?','<b>eq?</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('first','<b>first</b>');
    });
    $('pre').html(function(index, html){
        return html.replaceAll('second','<b>second</b>');
    });
});