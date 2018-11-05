$(document).ready(function(){
  $("button").click(function(){
    $("h3").fadeIn();
    $("#1").fadeIn("slow");
    $("#2").fadeIn(2000);
    $("#3").fadeIn(4000);
    $("#4").fadeIn(6000);
    $("br.myclass").hide();
    $("button.say").hide();
    setTimeout(function(){$(".note").hide()}, 10000);
    setTimeout(function(){$("dl").fadeIn()}, 10000);
  });
  
  $("a#a1").click(function(){
   	$("p").remove(".note");
  });
});

 $('body').oneTime('10s',function(){
    $("p").remove("#1");
  });