document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".navbar-nav .nav-item");

  const removeActiveClasses = () => {
    navItems.forEach((item) => {
      item.querySelector(".nav-link").classList.remove("active");
      item.querySelector(".underline").classList.remove("active-underline");
    });
  };

  const setActiveLink = (id) => {
    removeActiveClasses();
    const activeItem = document
      .querySelector(`.navbar-nav .nav-link[href="#${id}"]`)
      ?.closest(".nav-item");

    if (activeItem) {
      activeItem.querySelector(".nav-link").classList.add("active");
      activeItem.querySelector(".underline").classList.add("active-underline");
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);
  sections.forEach((section) => observer.observe(section));
});
