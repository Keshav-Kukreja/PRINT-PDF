var selectBtn = document.getElementById("select");
var inputFile = document.getElementById("file");
var fileName = document.querySelector("#select p");
var uploadBtn = document.querySelector("#submit");


selectBtn.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", () => {
  if (inputFile.value != "" && inputFile.value.includes(".pdf")) {
    fileName.innerText = inputFile.files[0].name;
    uploadBtn.disabled=false
  } else {
    alert("File selected is not a PDF");
    uploadBtn.disabled=true
  }
});
