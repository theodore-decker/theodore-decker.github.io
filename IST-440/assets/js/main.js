// Search and Filter
function searchInput(){
  var input = document.getElementById("userInput").value;
  var jobNum = document.getElementsByClassName("single-job");
  for (i = 0; i < jobNum.length; i++){
    var job = document.getElementById(i);
    if (job.firstElementChild.innerText.toLowerCase().includes(input.toLowerCase())){
      job.style.display = "inline";
    }
    else{
      job.style.display = "none"
    }
  }
};

function filter(selection){
  var jobNum = document.getElementsByClassName("single-job");
  for (i = 0; i < jobNum.length; i++){
    var job = document.getElementById(i);
    if (job.firstElementChild.innerText.includes(selection || selection.toLowerCase())){
      job.style.display = "inline";
    }
    else{
      job.style.display = "none"
    }
  }
};

function resetFilter(){
  var jobNum = document.getElementsByClassName("single-job");
  for (i = 0; i < jobNum.length; i++){
    var job = document.getElementById(i);
      job.style.display = "inline";
    }
};

//Project Creation
function post(){

  //Store user inputs
  var title = document.getElementById("inputTitle").value;
  var loc = document.getElementById("inputLocation").value;
  var skill = document.getElementById("inputSkills").value;
  var des = document.getElementById("inputDescription").value;
  var dead = document.getElementById("inputDeadline").value;
  var add = document.getElementById("inputAddInfo").value;

  //Create title element
  var nodeTitle = document.createElement("h4");
  var textTitle = document.createTextNode(title);
  nodeTitle.appendChild(textTitle);
  document.getElementById("newPost").appendChild(nodeTitle);

  //Create new "ul"
  var ul = document.createElement("ul");
  ul.classList.add("mt-4");
  document.getElementById("newPost").appendChild(ul);

  //Create location element
  var nodeLoc = document.createElement("li");
  nodeLoc.classList.add("mb-3");
  var textLoc = document.createTextNode(loc);
  nodeLoc.appendChild(textLoc);
  document.getElementById("newPost").appendChild(nodeLoc)

  //Create skills element
  var nodeSkill = document.createElement("li");
  nodeSkill.classList.add("mb-3");
  var textSkill = document.createTextNode(skill);
  nodeSkill.appendChild(textSkill);
  document.getElementById("newPost").appendChild(nodeSkill)

  //Create deadline element
  var nodeDead = document.createElement("li");
  var textDead = document.createTextNode(dead);
  nodeDead.appendChild(textDead);
  document.getElementById("newPost").appendChild(nodeDead)
}

function bid(){
  
}




//Preloaded
(function($) {
    "use strict"
    jQuery(document).ready(function() {
        // // Navigation for Mobile Device
        $('.custom-navbar').on('click', function(){
            $('.main-menu ul').slideToggle(500);
        });
        $(window).on('resize', function(){
            if ( $(window).width() > 767 ) {
                $('.main-menu ul').removeAttr('style');
            }
        });

        // Nice Select
        $('select').niceSelect();

        // Range Slider
        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });

    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
		$('.preloader').fadeOut(500);
    });
})(jQuery);
