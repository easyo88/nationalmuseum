// JavaScript Document

$(document).ready(function(){
    
 $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();  
     
 });   
});



function preventDefaultAnchor(){ 
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
}