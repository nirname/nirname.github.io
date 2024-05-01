$(function () {
  $(".skill").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
    $(this).removeClass("animated");
  });
  
  $(".skill").hover(function(){
    $(this).addClass("animated");
  })
}());
