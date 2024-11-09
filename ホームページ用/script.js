document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".photo-item img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".close").addEventListener("click", () => {
        modal.remove();
      });
    });
  });
});
