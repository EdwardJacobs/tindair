$(function(){
  var $activeSlide = $('#slides .slide:first-child')

  // show first slide
  // $activeSlide.addClass('showing');

  $(".match-tile").on("click", function() {
    var user_id = $(this).data("id");

    $.ajax({
      url: "/get/conversation/" + user_id,
      method: "post",
      dataType: "script"
    })
  });

  $(".profile-info").on("click", function() {
    var details = $(this).closest(".slide").find(".more-details");
    details.toggle();
    // toggle slide controls
    $("#slide-controls").toggleClass("open")
  })

  $(".open-conversation").on("click", function() {
    var user_id = $(this).data("id");

    $.ajax({
      url: "/get/conversation/" + user_id,
      method: "post",
      dataType: "script"
    })
  });

  $("#decline").on("click", function(){
    var user_id = $activeSlide.data("id");

    $.ajax({
      url: "/decline/" + user_id,
      method: "post",
      dataType: "ajax"
    })
    goToSlide('decline');
  })

  $("#approve").on("click", function(){
    var user_id = $activeSlide.data("id");

    $.ajax({
      url: "/approve/" + user_id,
      method: "post",
      dataType: "ajax"
    })

    goToSlide('approve');
  })


  function goToSlide(action) {
    $activeSlide.removeClass('showing');
    $activeSlide = $activeSlide.next(".slide");
    if (action == "approve") {
      console.log(action)
    } else {
      console.log(action)
    }

    $activeSlide.next(".slide").addClass("showing");

  }
});


