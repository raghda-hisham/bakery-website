$(window).scroll(function(){
    if($(window).scrollTop()>200){
    $('.navbar').css({"background-color":"white"});
    $(".navbar-content li a").css({'color':'black'});
    $(".logo img").attr({"src":"http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-color.png"});
    $(".navbar-content li a").css({'color':'rgba(0,0,0,0.5)'});
    $(".home").css({'color':'rgba(0,0,0,1)'})
    }
    else{

     $('.navbar').css({"background-color":"rgba(0,0,0,0)"});
     $(".logo img").attr({"src":"http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png"});
     $(".navbar-content li a").css({'color':'rgba(255,255,255,1)'});
     $(".home").css({'color':'rgba(255,255,255,0.7)'})
    }
})


$("#top").click(function(){
    $('html,body').animate({
        scrollTop: $('html').offset().top
       },1500);
})

$(window).scroll(function(){
  if($(window).scrollTop()>500){
        $("#top").show();
        $('#top').css({'opacity':'1'})
    }
    else{
        $("#top").hide();
        
    }

})
  

function show(){
    $('.alert1').css({'visibility':'visible'});
}
function show2(){
    $('.alert2').css({'visibility':'visible'});
}
function hide(){
    $('.alert1').css({'visibility':'hidden'});
}
function hide2(){
    $('.alert2').css({'visibility':'hidden'});
}



function sideshow(){
   var style=getComputedStyle(document.querySelector('.side'));
   if(style.right=='-300px'){
       $('.side').css({'right':'0','transtion':'all 1s'})
      $(".cogs").html("<i class='far fa-window-close fa-lg'></i>");
      $('.fa-cogs').remove();
      $('.alert1').css({'visibility':'hidden'});
      $('.alert1').textContent ="cancel";

   }
   else{
    $('.side').css({'right':'-300px','transtion':'all 1s'}) 
    $('.fa-window-close').remove();
    $(".cogs").html("<i class='fa fa-cogs fa-lg'></i>");
    $('.alert1').css({'visibility':'hidden'});

    



   }
}



$('.color').click(function(){ 
    var color = $(this).css( "background-color" );  
    $( ":root" ).css( {"--mincolor": color} );
 })
