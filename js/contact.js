try {
  // Contact Form
  function validateForm() {
    var name = document.forms["fromContact"]["name"].value;
    var email = document.forms["fromContact"]["email"].value;
    var subject = document.forms["fromContact"]["subject"].value;
    var comments = document.forms["fromContact"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
      fadeIn();
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
      fadeIn();
      return false;
    }
    if (comments == "" || comments == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Message*</div>";
      fadeIn();
      return false;
    }
    document.getElementById("simple-msg").innerHTML =
      "Sent successfully, thank you for contacting us.";
    document.forms["fromContact"]["name"].value = "";
    document.forms["fromContact"]["email"].value = "";
    document.forms["fromContact"]["subject"].value = "";
    document.forms["fromContact"]["comments"].value = "";
    return false;
  }

  function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.5;
        fade.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 200);
  }
} catch (error) {}
