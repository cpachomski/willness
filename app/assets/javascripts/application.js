// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//


//= require bootstrap
//= require bootstrap-sprockets
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require_self


$( document ).ready(function(){



$('#sidebar-toggle').click(function(){
    console.log('cmon')
    $('.left-nav').toggleClass("open-sidebar");
    $('#slider').toggleClass("change-blue");
    $('.bar').toggleClass("change-white");
    $('.dashboard').toggleClass("open-sidebar");
  });


  //functions for the login/register box

  $('.register-box').css("display", "none");

 //sets transition for login/register box

  $(function() {

    $('#login-form-link').click(function(e) {
        $(".login-box").delay(100).fadeIn(100);
        $(".register-box").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $(".register-box").delay(100).fadeIn(100);
        $(".login-box").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

  });


});






