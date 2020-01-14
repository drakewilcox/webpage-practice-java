$(document).ready(function()  {
  $("#btn1").click(function(){
    $("#col-2").slideDown();
    $("#col-1").slideUp();
  });
  $("#btn2").click(function(){
    $("#col-3").slideDown();
    $("#col-2").slideUp();
  });
  $("#btn3").click(function(){
    $("#col-1").slideDown();
    $("#col-3").slideUp();
  });

  $("#background").click(function(){
    $("body").addClass("dark");
    $("#normalize").show();
    $("#background").hide();
  });
  $("#normalize").click(function(){
    $("body").removeClass("dark");
    $("#normalize").hide();
    $("#background").show();
  });
  $("#test").click(function(){
    $("div.col-lg-4").addClass("styling");
  });
});