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
        //reset();
      }
    });
  }
  validate();
  
  function sendmail(name, email, msg) {
    emailjs.send("service_v9izq8p", "template_v7y2e3l", {
      to_name: "Brian",
      from_name: email,
      message: msg,
    });
  }
  
  function emptyerror() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })    
    Toast.fire({
        icon: 'error',
        text: "Fields cannot be empty!",
        color: '#fff',
        background: '#191C1F',
    }).then(()=>{
        Toast.close({
        })
        console.log("Alert closed")
        
    })
    
    
  }
  
  function error() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })    
    Toast.fire({
        icon: 'error',
        text: "Something went wrong!",
        color: '#fff',
        background: '#191C1F',
    })
  }
  
  function success() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })    
    Toast.fire({
        icon: 'success',
        text: 'Successfully sent message',
        color: '#fff',
        background: '#191C1F',
    })
  }

  function reset(){
   // todo: reset form after submit
  }