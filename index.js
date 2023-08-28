let accordHeaders = Array.from(document.querySelectorAll(".accord-header"));

accordHeaders.map((header) =>
  header.addEventListener("click", () => {
    toggleAccord(header);
  })
);

function toggleAccord(currentTarget) {
  accordHeaders.map((header) => {
    const accordContent = header.nextElementSibling;
    const togglerBtn = header.firstElementChild;

    if (currentTarget !== header) {
      togglerBtn.classList.remove("active");
      accordContent.classList.remove("active-content");
    } else {
      togglerBtn.classList.toggle("active");
      accordContent.classList.toggle("active-content");
    }
  });
}
