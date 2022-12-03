const data = JSON.parse(localStorage.getItem("login"));
// console.log(data.length);
document.querySelector(".tt").innerHTML = `<a class="login-btn">${data[data.length - 1].Username}</a>`;
document.querySelector(".log").innerHTML = `<a class="register-btn" onClick="XoaAcc()">LogUot</a>`;
document.querySelector(".login-btn").style.display = "none";
document.querySelector(".register-btn").style.display = "none";

function XoaAcc(x) {
  let data = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : [];
  if (confirm("Bạn có chắc rằng muốn đăng xuất hay không")) {
    data.splice(0, data.length);
  }
  localStorage.setItem("login", JSON.stringify(data));
  document.querySelector(".login-btn").style.display = "inline-block";
  document.querySelector(".register-btn").style.display = "inline-block";
  document.querySelector(".tt").style.display = "none";
  document.querySelector(".log").style.display = "none";
}
