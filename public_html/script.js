/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    $('.yeah').css('background-color', 'yellow');
  
    $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'cyan', 'color':'white'});
});
