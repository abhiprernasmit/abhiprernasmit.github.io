const buttons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    buttons.forEach(btn => btn.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Expand/collapse working-paper abstracts.
document.querySelectorAll(".abstract-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const abstract = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    abstract.hidden = isOpen;
    button.title = isOpen ? "Show abstract" : "Hide abstract";
  });
});
