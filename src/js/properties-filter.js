const cards = document.querySelectorAll(".properties .cards .card");

const filters = {
  all: document.querySelector("#all"),
  apartment: document.querySelector("#apartment"),
  villa: document.querySelector("#villa"),
  penthouse: document.querySelector("#penthouse"),
};

Object.entries(filters).forEach(([type, button]) => {
  button.addEventListener("click", () => updateFilter(type));
});

function updateFilter(filterType) {
  Object.entries(filters).forEach(([type, button]) => {
    if (type === filterType) {
      button.classList.add("active");
      button.setAttribute("data-status", "active");
    } else {
      button.classList.remove("active");
      button.removeAttribute("data-status");
    }
  });
  document.startViewTransition(() => {
    filterCards(filterType);
  });
}

function filterCards(filterType) {
  let hasVisible = false;

  cards.forEach((card) => {
    const isMatch =
      filterType === "all" || card.hasAttribute(`data-${filterType}`);

    card.style.opacity = isMatch ? "1" : "0";
    card.style.pointerEvents = isMatch ? "auto" : "none";
    card.style.transition = "opacity 1s";

    card.hidden = !isMatch;
    if (isMatch) hasVisible = true;
  });
}
