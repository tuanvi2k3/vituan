// back Top
$(document).ready(function () {
  $("#toggle").click(function () {
    $("nav").slideToggle();
    $(".btn").slideToggle();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtop").fadeIn();
    } else {
      $("#backtop").Out();
    }
  });
  $("#backtop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
});

// box modal
var list_item = document.getElementById("list-row");

list_item.addEventListener("click", function (e) {
  if (document.querySelector("#list-row li.active") !== null) {
    document.querySelector("#list-row li.active").classList.remove("active");
  }

  if (e.target.localName != "ul") {
    e.target.className = "active";
  }

  var color_name = e.target.getAttribute("colors");
  var card = document.querySelector(".card");
  card.style.background = color_name;
});

function render() {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];

  const view = data.map((value, id) => {
    return ` 
    <div class="card">
    <div class="wrapper">
      <div class="colorProd" style="background-color: #3f4a69"></div>
      <aside class="cursor" onClick="deTail(${id})" type="button">
        
      <div
        class="imgProd"
        style="
          background-image: url(../image/${value.Img}.png);
        "
      ></div>
      </aside>
      <div class="infoProd">
      <aside class="cursor" onClick="deTail(${id})" type="button">
        
      <p class="nombreProd">  
       ${value.Name}
      </p>
      </aside>
        <p class="extraInfo">${value.Description}</p>
        <div class="actions"> 
          <div class="preciosGrupo">
            <p class="precio precioOferta">${value.Price}</p>
            <p class="precio precioProd">${value.Sale}</p>
          </div>
          <div class="bakuretsu_icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"
              ></path>
            </svg>
          </div>
          <div class="bakuretsu_icono action alCarrito">
            <svg
              class="inCart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <title>Quitar del carrito</title>
              <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
              <circle cx="20" cy="54" r="4"></circle>
              <circle cx="46" cy="54" r="4"></circle>
              <circle cx="46" cy="22" r="16"></circle>
              <path d="M53 18l-8 9-5-5"></path>
            </svg>
            <svg
              class="outCart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              >
              <title>Agregar al carrito</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
            </svg>
          </div>
        </div>
       
      </div>
    </div>
  </div>
    `;
  });
  document.querySelector(".contenedorCards").innerHTML = view.join("");
}

function deTail(x) {
  let data = JSON.parse(localStorage.getItem("SP")) || [];
  console.log(data[x]);

  let viewDetail = ``;

  if (data[x]) {
    viewDetail += `
    <div class="container">
    <button onClick="deleteBox()">x</button>
    <div class="outer-card">
      <div class="first-row">
        <div class="card"></div>
        <img src="./image/${data[x].Img}.png" />
      </div>
      <div class="second-row">
        <h3>${data[x].Name}</h3>
        <div class="space"><span>MATERIAL</span> <span>Cotton</span></div>
        <div class="space">
          <span>llll</span>
          <span
            >29 <i class="fa fa-close"></i> 21
            <i class="fa fa-close"></i> 34 cm</span
          >
        </div>
        <div class="space">
          <span>FURNITURE FINISH</span> <span>Wax</span>
        </div>
        <div class="space">
          <span>ITEM WEIGHT</span> <span>6.4 Kilograms</span>
        </div>
      </div>
      <ul class="third-row" id="list-row">
        <li id="1" colors="red" class="active"></li>
        <li id="2" colors="green"></li>
        <li id="3" colors="black"></li>
        <li id="4" colors="blue"></li>
      </ul>
      <div class="fourth-row">
        <h4>$280</h4>
        <span class="minus">-</span>
        <p>2</p>
        <span class="plus">+</span>
      </div>
      <div class="button"><button>Add to cart</button></div>
    </div>
  </div>
         `;
  }

  document.querySelector(".vewsp").innerHTML = viewDetail;
}

function deleteBox() {
  location.reload();
}

// Search sp

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
      value.Sale.toUpperCase().includes(search.toUpperCase())
    );
  });
  console.log(spSearch);
  rendera(spSearch);
}

function rendera(arr) {
  let view = ``;
  arr.forEach((value , id) => {
    view += ` 
    <div class="card">
    <div class="wrapper">
      <div class="colorProd" style="background-color: #3f4a69"></div>
      <aside class="cursor" onClick="deTail(${id})" type="button">
        
      <div
        class="imgProd"
        style="
          background-image: url(../image/${value.Img}.png);
        "
      ></div>
      </aside>
      <div class="infoProd">
      <aside class="cursor" onClick="deTail(${id})" type="button">
        
      <p class="nombreProd">  
       ${value.Name}
      </p>
      </aside>
        <p class="extraInfo">${value.Description}</p>
        <div class="actions"> 
          <div class="preciosGrupo">
            <p class="precio precioOferta">${value.Price}</p>
            <p class="precio precioProd">${value.Sale}</p>
          </div>
          <div class="bakuretsu_icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"
              ></path>
            </svg>
          </div>
          <div class="bakuretsu_icono action alCarrito">
            <svg
              class="inCart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <title>Quitar del carrito</title>
              <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
              <circle cx="20" cy="54" r="4"></circle>
              <circle cx="46" cy="54" r="4"></circle>
              <circle cx="46" cy="22" r="16"></circle>
              <path d="M53 18l-8 9-5-5"></path>
            </svg>
            <svg
              class="outCart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              >
              <title>Agregar al carrito</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>`
  });
  document.querySelector(".contenedorCards").innerHTML = view;
}
