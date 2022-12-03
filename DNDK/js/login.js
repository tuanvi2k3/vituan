function DNhap() {
  Dky();
  const username = document.getElementById("username").value;
  const passw = document.getElementById("passw").value;
  let data = localStorage.getItem("Acc")
    ? JSON.parse(localStorage.getItem("Acc"))
    : [];
  for (let i = 0; i < data.length; i++) {
    if (username == "ADMIN" && passw == "admin") {
      window.location = "../../role.html ";
    } else if (data[i].Username == username && data[i].Pass == passw) {
      window.location = "../../User.html ";
      return;
    }
  }
}

function err() {
  const array = [passw, username];

  for (let i = 0; i < array.length; i++) {
    if (array[i].value === "") {
      const formkey = array[i].parentElement;

      const err = formkey.querySelector(".error");

      err.innerText = `Vui lòng nhập ${array[i].title}`;
    } else {
      const formkey = array[i].parentElement;
      const err = formkey.querySelector(".error");
      err.innerText = "";
    }
  }
}

//  xu ly dang nhap
function Dky() {
  err();
  const username = document.getElementById("username").value;
  const passw = document.getElementById("passw").value;
  let data = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : [];
  const user = {
    Username: username,
    Pass: passw
  };
  if (username != "" && passw != "") {
    data.push(user);
    localStorage.setItem("login", JSON.stringify(data));
  }
}
