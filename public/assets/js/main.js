!function ($) {

  "use strict";

  var bEvent = function () {

    // A jQuery plugin for fluid width video embeds
    function responsiveVideo() {
      if ($.fn.fitVids) {
        $(".video").fitVids()
      }
    }
    // A jQuery plugin to create and manage Google Maps to jQuery
    // A custom select for Bootstrap using button dropdown
    function selectpicker() {
      if ($.fn.selectpicker) {
        $(".selectpicker").selectpicker()
      }
    }
    // A jQuery plugin for the navigation on one-page sites
    function navigation() {
      if ($.fn.onePageNav && $("#nav").length) {
        $('#nav').onePageNav({
          currentClass: 'active',
          scrollSpeed: 600,
          scrollOffset: 60,
          scrollThreshold: 0.2,
          easing: 'swing'
        })
      }
    }
    // Date countdown plugin for jQuery
    function countdown() {
      var count = $('#countdown');
      if ($.fn.countdown && count.length) {
        count.countdown(count.data("date"), function (event) {
          var $this = $(this);
          switch (event.type) {
          case "seconds":
          case "minutes":
          case "hours":
          case "days":
          case "weeks":
          case "daysLeft":
            $this.find('p#' + event.type).html(event.value);
            break;
          case "finished":
            $this.hide();
            break;
          }
        });
      }
    }
    // Preloader
    function preloader() {
      $(window).load(function () {
        $(".preloader").fadeOut()
        $("body").removeClass("remove-scroll")
      });
    }
    // A jQuery plugin that enables HTML5 placeholder behavior for browsers that aren’t trying hard enough yet
    function placeholderIE() {
      if ($.fn.placeholder) {
        $("input, textarea").placeholder()
      }
    }
    // validation and sending forms
    function validateAndSend() {
      $.validate({
        form: '#registrationForm',
        validateOnBlur: false,
        addSuggestions: false,
        onSuccess: function () {
          var name = $("#regName").val(),
            email = $("#regMail").val(),
            phone = $("#regPhone").val(),
            company = $('#company').val()
            
          $.ajax({
            type: "POST",
            url: "https://docs.google.com/forms/d/1CdoH3aS3hFoMsluxcspdbRjFk_LR1Ug4LVJJh_0deto/formResponse",
            data: {"entry.1679963830" : name, "entry.261194947" : email, "entry.323156001": phone, "entry.1328718019": company},
            dataType: 'xml',
            statusCode: {
                                0: function (){
                                  $(".register").addClass("success")
                                  $("#regName").val("")
                                  $("#regMail").val("")
                                  $("#regPhone").val("")
                                  $("#company").val("")
                                    //Success message
                                },
                                200: function (){
                                  $(".register").addClass("success")
                                  $("#regName").val("")
                                  $("#regMail").val("")
                                  $("#regPhone").val("")
                                  $("#company").val("")
                                    //Success Message
                                }
                            }
          });
          return false;
        }
      })

      var messageForError = $(".help-block");
      $.validate({
        form: "#subscribeForm",
        errorMessagePosition: messageForError,
        onSuccess: function () {
          var sEmail = $("#sEmail").val(),
            allData = 'sEmail=' + sEmail;
          $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            data: allData,
            success: function () {
              $(".subscribe .form-wrapper").addClass("success")
              $("#sEmail").val("")
            }
          });
          return false;
        }
      })
    }
    // Reveal Animations When You Scroll
    function wow() {
      $(window).load(function () {
         new WOW().init()
      });     
    }
    // Custom scripts
    function app() {
      $("#back").on("click", function () {
        $(".register").removeClass("success")
      })
    }
    // Return all functions
    return {
      init: function () {
        preloader()
        responsiveVideo()
        selectpicker()
        navigation()
        countdown()
        placeholderIE()
        validateAndSend()
        wow()
        app()       
      }
    }
  }();

  $(function () {
    // Launch functions
    bEvent.init()
  })
}(window.jQuery);