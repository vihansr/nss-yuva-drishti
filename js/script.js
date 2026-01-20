document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector("ion-icon");
      if (navLinks.classList.contains("active")) {
        icon.setAttribute("name", "close-outline");
      } else {
        icon.setAttribute("name", "menu-outline");
      }
    });
  }

  // 2. Stats Counter Animation
  const statsSection = document.getElementById("stats");
  const counters = document.querySelectorAll(".counter");
  let started = false; // Function started ?

  function startCount(el) {
    const target = +el.getAttribute("data-target");
    const count = +el.innerText;
    const speed = 200; // lower is slower
    const inc = target / speed;

    if (count < target) {
      el.innerText = Math.ceil(count + inc);
      setTimeout(() => startCount(el), 20);
    } else {
      el.innerText = target;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      counters.forEach((counter) => startCount(counter));
      started = true;
    }
  });

  if (statsSection) {
    observer.observe(statsSection);
  }

  // 3. Testimonials Carousel
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    });

    // Auto slide
    setInterval(() => {
      currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    }, 5000);
  }

  // 4. Evidence Gallery Populator
  const galleryGrid = document.getElementById("gallery-grid");
  const imageFiles = [
    "1111.jpeg",
    "WhatsApp Image 2026-01-20 at 12.44.51.jpeg",
    "WhatsApp Image 2026-01-20 at 12.44.511.jpeg",
    "WhatsApp Image 2026-01-20 at 12.44.52.jpeg",
    "WhatsApp Image 2026-01-20 at 12.55.00 (1).jpeg",
    "WhatsApp Image 2026-01-20 at 12.55.00 (2).jpeg",
    "WhatsApp Image 2026-01-20 at 12.55.00.jpeg",
    "WhatsApp Image 2026-01-20 at 12.55.01.jpeg",
  ];

  if (galleryGrid) {
    imageFiles.forEach((file) => {
      const item = document.createElement("div");
      item.className = "masonry-item";

      const img = document.createElement("img");
      img.src = `assets/gallery/${file}`;
      img.alt = "Survey Evidence";
      img.loading = "lazy"; // Performance optimization

      item.appendChild(img);
      galleryGrid.appendChild(item);

      // Lightbox Trigger
      item.addEventListener("click", () => {
        openLightbox(`assets/gallery/${file}`);
      });
    });
  }

  // 5. Lightbox Logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");

  function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
    document.body.style.overflow = "hidden"; // Disable scroll
  }

  if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // Close on clicking outside
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});
