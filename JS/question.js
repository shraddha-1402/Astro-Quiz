const modalOpenBtn = document.querySelector("#open-modal");
const modalBox = document.querySelector("#modal-box");
const overlayDiv = document.querySelector("#disable-bg");

/**
 * Function to open modal
 * toggles the display of modal  
 */
  
const openmodal = () => {
  console.log(overlayDiv);
  modalBox.style.display = "flex";
  document.body.style.overflow = "hidden";
  overlayDiv.classList.add("overlay");
}
modalOpenBtn.addEventListener("click", openmodal);