document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
  
    button.addEventListener("click", function() {
      button.classList.add("onclic");
      setTimeout(validate, 250);
    });
  
    function validate() {
      setTimeout(function() {
        button.classList.remove("onclic");
        button.classList.add("validate");
        setTimeout(callback, 450);
      }, 2250);
    }
  
    function callback() {
      setTimeout(function() {
        button.classList.remove("validate");
      }, 1250);
    }
  });
  