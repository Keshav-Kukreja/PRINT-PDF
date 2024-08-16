var printPage = document.getElementById("printFrom")
// printPage.addEventListener("click", (e) => {
//   e.target.value = "";
// });

function sendFileName(fileName) {
  let formData = new FormData();
  formData.append("file_name", fileName);
  formData.append("pages", printPage.value);
  url = "/print";
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      console.log(text)
    })
    .catch((error) => console.error(error));
  alert("file will print soon");
  window.location.href = "/";
}
