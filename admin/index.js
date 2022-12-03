// Bão lỗi
function err() {
  let input = document.querySelectorAll(".form-input");

  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      const control = input[i].parentElement;
      const dulieu = control.querySelector(".error");

      dulieu.innerText = `${input[i].id} không được để trống`;
    } else {
      const control = input[i].parentElement;
      const dulieu = control.querySelector(".error");
      dulieu.innerText = "";
    }
  }
}

// Thêm sản phẩm
function add() {
  err();
  let name = document.getElementById("name").value;
  // let id = document.getElementById("id").value = "0";
  let description = document.getElementById("description").value;

  let img = document.getElementById("img").value;
  let price = document.getElementById("price").value;
  let sale = document.getElementById("sale").value;
  let date = document.getElementById("date").value;
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  let Sp = {
    Name: name,
    Description: description,
    Img: img,
    Price: price,
    Sale: sale,
    Date: date
    // Id: id,
  };
  if (
    name != "" &&
    description != "" &&
    img != "" &&
    sale != "" &&
    price != "" &&
    date != ""
  ) {
    const tc = document.querySelector(".success");
    tc.innerText = "Thêm sản phẩm thành công";
    data.push(Sp);
    localStorage.setItem("SP", JSON.stringify(data));
    render();
    clear();
  }
}

//  In ra tất cả sản phẩm
function render() {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  let vew = `
    <button id="update" class="btn-sm btn btn-danger" onClick="removeAll()"" style="margin: 10px 0;">
    REMOVEALL
    </button>
  <tr>
  <th>ID</th>
  <th>Tên sản phẩm</th>
  <th>Mô tả</th>
    <th>IMG</th>
    <th>Giá gốc</th>
    <th>Giảm còn</th>
    <th>Ngày đăng</th>
    <th>EDIT</th>
    <th>REMOVE</th>
  </tr>`;
  data.map((value, index) => {
    vew += `
    <tbody>
    <tr>
        <td>${index + 1}</td>
        <td>${value.Name}</td>
        
        <td>${value.Description}</td>
        
        <td><a href="../image/${
          value.Img
        }"><img style="width: 180px; margin: 0 -100px 0 0px; background-size: cover;" src="../image/${
      value.Img
    }.png"alt="" /></a></td>
        <th>$${value.Price}</th>
        <th>$${value.Sale}</th>
        <td>${value.Date}</td>
        <th><button class="btn-sm btn btn-warning" onClick="edit(${index})">EDIT</button></th>
        <th><button class="btn-sm btn btn-danger" onClick="remove(${index})">REMOVE</button></th>
      </tr>
    </tbody>`;
  });
  document.getElementById("render").innerHTML = vew;
}

// Clear lại input khi thêm
function clear() {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";

  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("sale").value = "";
  document.getElementById("date").value = "";
}

// Sửa sản phẩm
function edit(x) {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  document.getElementById("name").value = data[x].Name;
  document.getElementById("description").value = data[x].Description;
  document.getElementById("img").value = data[x].Img;
  document.getElementById("price").value = data[x].Price;
  document.getElementById("sale").value = data[x].Sale;
  document.getElementById("date").value = data[x].Date;
  document.getElementById("id").value = x;
  document.getElementById("update").style.display = "";
  document.getElementById("save").style.display = "";
}

// Load sản phẩm khi thêm
function loadedit() {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  let id = document.getElementById("id").value;
  data[id] = {
    Name: document.getElementById("name").value,
    Description: document.getElementById("description").value,

    Img: document.getElementById("img").value,
    Price: document.getElementById("price").value,
    Sale: document.getElementById("sale").value,
    Date: document.getElementById("date").value
  };
  localStorage.setItem("SP", JSON.stringify(data));
  render();
  clear();
  document.getElementById("update").style.display = "none";
}

// Xóa sản phẩm
function remove(x) {
  // x = id
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  if (confirm("Bạn chắc chắn có muốn xóa nó hay không")) {
    data.splice(x, 1);
    // console.log(x);
    localStorage.setItem("SP", JSON.stringify(data));
  }
  render();
}

// Xóa tất cả
function removeAll(x) {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  if (confirm("Bạn chắc chắn có muốn xóa nó hay không")) {
    data.splice(0, data.length);
  }
  localStorage.setItem("SP", JSON.stringify(data));
  render();
}

// Search
function searchSp() {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  let search = document.querySelector(".search").value;
  let spSearch = data.filter((value) => {
    // Tìm theo tên
    return (
      value.Name.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo mô tả
      value.Description.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo giá
      value.Price.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo giá sale
      value.Sale.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo ngày đăng
      value.Sale.toUpperCase().includes(search.toUpperCase())
    );
  });
  renderseash(spSearch);
}
// view Search
function renderseash(arr) {
  console.log(arr);
  if (arr) {
    let vew = `
  <button id="update" class="btn-sm btn btn-danger" onClick="removeAll()"" style="margin: 10px 0;">
  REMOVEALL
  </button>
<tr>
<th>ID</th> 
<th>Tên sản phẩm</th>
<th>Mô tả</th>
  <th>IMG</th>
  <th>Giá gốc</th>
  <th>Giảm còn</th>
  <th>Ngày đăng</th>
  <th>EDIT</th>
  <th>REMOVE</th>
</tr>`;
    arr.forEach((value, index) => {
      vew += `
  <tbody>
  <tr>
      <td>${index + 1}</td>
      <td>${value.Name}</td>
      
      <td>${value.Description}</td>
     
      <td><a href="../image/${
        value.Img
      }"><img style="width: 180px; margin: 0 -100px 0 0px; background-size: cover;" src="../image/${
        value.Img
      }.png"alt="" /></a></td>
      <th>$${value.Price}</th>
      <th>$${value.Sale}</th>
      <th>$${value.Date}</th>
      <th><button class="btn-sm btn btn-warning" onClick="edit(${index})">EDIT</button></th>
      <th><button class="btn-sm btn btn-danger" onClick="remove(${index})">REMOVE</button></th>
    </tr>
    <div id="pagination"></div>
  </tbody>`;
    });
    document.getElementById("render").innerHTML = vew;
  }
}
