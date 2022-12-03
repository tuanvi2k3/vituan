//  cach 1
function err() {
  const array = [fullname, passw, username];
  const success = document.querySelector(".success");
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === "") {
      const formkey = array[i].parentElement;

      const err = formkey.querySelector(".error");

      err.innerText = `${array[i].title} không được để trống`;
      success.innerText = "";
    } else {
      const formkey = array[i].parentElement;
      const err = formkey.querySelector(".error");
      err.innerText = "";
      success.innerText = "";
    }
  }
}

function Dky() {
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const passw = document.getElementById("passw").value;
  let data = localStorage.getItem("Acc")
    ? JSON.parse(localStorage.getItem("Acc"))
    : [];
  const user = {
    Fullname: fullname,
    Username: username,
    Pass: passw
  };
  if (fullname == "" || username == "" || passw == "") {
    err();
  } else if (user == null) {
    data.push(user);
    localStorage.setItem("Acc", JSON.stringify(data));
    document.querySelector(".success").innerText = "Register  success Account";

    //  check  trùng tồn tại
  } else {
    const datauser = JSON.parse(localStorage.getItem("Acc")) || [];
    let isAcc = false;
    for (let i = 0; i < datauser.length; i++) {
      if (datauser[i].Username === username) {
        isAcc = true;
        break;
      }
    }
    //  xu ly
    if (isAcc) {
      alert("Tài khoản đã tồn tại");
      return;
    } else {
      const usernew = {
        Fullname: fullname,
        Username: username,
        Pass: passw
      };
      data.push(usernew);
      localStorage.setItem("Acc", JSON.stringify(data));
      alert("Đăng ký thành công");
      setTimeout(() => {
        window.location = "./login.html";
      }, 2000);
      return;
    }
  }
}

// Text DMK

// function eDitPass() {
//   let data = localStorage.getItem("Acc")
//   ? JSON.parse(localStorage.getItem("Acc"))
//   : [];
//   document.getElementById("passw").value = data[x].Pass;
// }

// function loadedit() {
//   let data = localStorage.getItem("Acc")
//     ? JSON.parse(localStorage.getItem("Acc"))
//     : [];
//   document.getElementById("passw").value = data[x].Pass;
//   let Username = document.getElementById("username").value;
//   data[Username] = {
//     Pass: document.getElementById("passw").value,
//   };
//   localStorage.setItem("Acc", JSON.stringify(data));
//   render();
//   clear();
//   document.getElementById("update").style.display = "none";
// }
