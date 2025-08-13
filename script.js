const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const Items = document.querySelectorAll(".accordion-content");
    Items.forEach((Item) => {
      if (Item.classList.contains("active")) {
        Item.classList.remove("active");
      }
    });
    content.classList.toggle("active");
  });
});
