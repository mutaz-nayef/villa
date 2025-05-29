const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");

  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(navOpened);
});

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const features = document.querySelectorAll(".question");

features.forEach((question) => {
  const toggleBtn = question.querySelector(".title");
  const answer = question.querySelector(".answer");

  toggleBtn.addEventListener("click", () => {
    const isOpen = question.classList.contains("open");

    // Close all questions
    features.forEach((q) => {
      q.classList.remove("open");
      q.querySelector(".answer").style.maxHeight = null;
    });

    // Re-open the clicked one if it was not already open
    if (!isOpen) {
      question.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
