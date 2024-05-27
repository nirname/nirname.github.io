document.addEventListener("DOMContentLoaded", function() {
  var skills = document.querySelectorAll(".skill .animated");

  function animationEndHandler() {
    this.classList.remove("progress");
  }

  function hoverHandler() {
    this.classList.add("progress");
  }

  skills.forEach(function(skill) {
    skill.addEventListener("webkitAnimationEnd", animationEndHandler);
    skill.addEventListener("mozAnimationEnd", animationEndHandler);
    skill.addEventListener("animationend", animationEndHandler);
    // skill.addEventListener("webkitTransitionEnd", animationEndHandler);
    // skill.addEventListener("mozTransitionEnd", animationEndHandler);
    // skill.addEventListener("transitionend", animationEndHandler);
    skill.addEventListener("mouseenter", hoverHandler);
  });
});
