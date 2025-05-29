const buttons = document.querySelectorAll(".best-deal-button");
const deals = document.querySelectorAll(".deal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetDeal = button.dataset.deal;

    deals.forEach((deal) => {
      if (deal.dataset.deal === targetDeal) {
        deal.classList.add("active");
      } else {
        deal.classList.remove("active");
      }
    });

    // Button active state
    buttons.forEach((btn) => btn.removeAttribute("data-status"));
    button.setAttribute("data-status", "active");
  });
});

// const cards = document.querySelectorAll(".best-deal .card");

// const apartment = document.querySelector("#apartment");
// const villaFilter = document.querySelector("#villa");
// const penthouseFilter = document.querySelector("#penthouse");

// const currentFilters = {
//   apartment: "all",
//   villa: "all",
//   penthouse: "all",
// };

// cards.forEach((card, index) => {
//   const mushroomId = `mushroom-${index + 1}`;
//   card.computedStyleMap.viewTransition = `card-${mushroomId}`;
// });

// apartment.addEventListener("click", updateFilter);
// villa.addEventListener("click", updateFilter);
// penthouse.addEventListener("click", updateFilter);

// function updateFilter(e) {
//   const filterType = e.target.name;
//   currentFilters[filterType] = e.target.value;

//   console.log(e);

//   if (!document.startViewTransition()) {
//     filterCards();
//     return;
//   }
//   document.startViewTransition(() => {
//     filterCards();
//   });
// }

// function filterCards() {
//   let hasVisibleCards = false;

//   cards.forEach((card) => {
//     const season = card.querySelector("[data-season]").dataset.season;
//     const edible = card.querySelector("[data-edible]").dataset.edible;

//     const matchesSeason = currentFilters.season === season;
//     const matchesEdible = currentFilters.edible === edible;

//     if (
//       (currentFilters.season === "all" || matchesSeason) &&
//       (currentFilters.edible === "all" || matchesEdible)
//     ) {
//       card.hidden = false;
//       hasVisibleCards = true;
//     } else {
//       card.hidden = true;
//     }
//     if (hasVisibleCards) {
//       noResultFilter.hidden = true;
//     } else {
//       noResultFilter.hidden = false;
//     }
//   });
// }

// function enableFiltering() {
//   seasonalFilter.hidden = false;
//   edibleFilter.hidden = false;
// }
// enableFiltering();
