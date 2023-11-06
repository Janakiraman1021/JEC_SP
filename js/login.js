
function verify(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  if (email=="janakiramankeerthivelan1021@gmail.com"){
    if (pass == 110822205025){
      window.alert("Hello Login Successfull");
    }
  }
  else{
    window.alert("Login Failured !")
    window.alert(email);
    window.alert(pass);
  }
}