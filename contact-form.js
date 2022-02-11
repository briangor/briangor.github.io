(function () {
    emailjs.init("user_CVl3O73wb1mdSeWsMzW6R");
  })();
  
  function validate() {
    let name = document.querySelector(".username");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let btn = document.querySelector(".submit");
  
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
      }
    });
  }
  validate();
  
  function sendmail(name, email, msg) {
    emailjs.send("service_pbszqrs", "template_v7y2e3l", {
      to_name: "Brian",
      from_name: email,
      message: msg,
    });
  }
  
  function emptyerror() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }
  
  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
  
  function success() {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
  }