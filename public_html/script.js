/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    $('.yeah').css('background-color', 'yellow');
  
    //$('div:last p:nth-child(3)').css('background-color', 'pink');
    
    //$('p:last').css('color', 'red');
    
    //$('p:gt(1)').css('border-style', 'solid');
    
    //$('p:first').css({'background-color':'cyan', 'color':'white'});
    
    //$('.2').css({'visibility': 'hidden', 'position': 'absolute'});
    
    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    //$('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
});

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe(){
    $("h1").html("Hi");
}

function mouseOutMe(){
    $('h1').html('Bye');
}

function mouseClick(){
    
    $('p').html('Hi and bye 101.');
}
