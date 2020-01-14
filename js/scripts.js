$(document).ready(function()  {
  $("#btn1").click(function(){
    $("#col-2").slideDown();
    $("#col-1").slideUp();
  })
  $("#btn2").click(function(){
    $("#col-3").slideDown();
    $("#col-2").slideUp();
  })
  $("#btn3").click(function(){
    $("#col-1").slideDown();
    $("#col-3").slideUp();
  })
})