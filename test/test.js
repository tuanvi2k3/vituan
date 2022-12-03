const fileUpload = document.querySelector("#file-upload");
fileUpload.addEventListener("change", (e) => {
  const files = e.target.files;

  for (const file of files) {
    const { name, type, size, lastModified } = file;
    // Làm gì đó với các thông tin trên
    console.log(file.name);
  }
});

const pg = document.getElementById("pagination");

const valuePage = {
  truncate: true, // Rút gọn liên kết trang hoặc không (true <=> rút gọn)
  curPage: 1, // Khởi tạo page hiện tại là 1
  numLinksTwoSide: 1, // Số lượng liên kết muốn hiển thị ở hai bên trang hiện tại.
  totalPages: 10 // Tổng số trang
};

function pagination() {
  const { totalPages, curPage, truncate, numLinksTwoSide: delta } = valuePage;
  const range = delta + 4;
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = "";
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos == curPage ? "active" : "";
    if (totalPages >= 2 * range - 1 && truncate) {
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }
  let renderTwoSide = "";
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos == curPage ? "active" : "";

    // truncate
    if (totalPages >= 2 * range - 1 && truncate) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }
}
