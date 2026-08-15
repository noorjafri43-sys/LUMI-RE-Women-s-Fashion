/* ==========================================
   LUMIÈRE — Fashion E-Commerce JS
   ========================================== */

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ==========================================
// HAMBURGER MENU
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ==========================================
// SMOOTH SCROLLING WITH OFFSET
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ==========================================
// HERO SLIDER
// ==========================================
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.slide-dots .dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
  heroSlides[currentSlide].classList.remove('active');
  heroDots[currentSlide].classList.remove('active');
  currentSlide = (n + heroSlides.length) % heroSlides.length;
  heroSlides[currentSlide].classList.add('active');
  heroDots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

document.getElementById('nextSlide').addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  startSlideShow();
});

document.getElementById('prevSlide').addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  startSlideShow();
});

heroDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(i);
    startSlideShow();
  });
});

startSlideShow();

// ==========================================
// SCROLL REVEAL (IntersectionObserver)
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling reveals
      const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
      let delay = 0;
      siblings.forEach(el => {
        if (el === entry.target || entry.target.parentElement.contains(el)) {
          setTimeout(() => el.classList.add('visible'), delay);
          delay += 80;
        }
      });
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ==========================================
// PRODUCT FILTER
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    productCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-cat') === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        requestAnimationFrame(() => {
          card.style.animation = 'fadeUp 0.5s ease both';
        });
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ==========================================
// ADD TO CART (Toast notification)
// ==========================================
const cartToast = document.getElementById('cartToast');
let toastTimeout;

function showToast() {
  clearTimeout(toastTimeout);
  cartToast.classList.add('show');
  toastTimeout = setTimeout(() => cartToast.classList.remove('show'), 3000);
}

document.querySelectorAll('.add-cart-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const originalText = this.textContent;
    this.textContent = '✓ Added!';
    this.style.background = 'var(--accent)';
    this.style.color = 'var(--white)';
    this.style.borderColor = 'var(--accent)';
    showToast();
    setTimeout(() => {
      this.textContent = originalText;
      this.style.background = '';
      this.style.color = '';
      this.style.borderColor = '';
    }, 2000);
  });
});

document.querySelectorAll('.product-actions button[title="Add to Cart"]').forEach(btn => {
  btn.addEventListener('click', showToast);
});

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function getDeadline() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 3);
  deadline.setHours(23, 59, 59, 0);
  return deadline;
}

const deadline = getDeadline();

function updateCountdown() {
  const now = new Date();
  const diff = deadline - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent = '00';
    document.getElementById('secs').textContent = '00';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent  = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('secs').textContent  = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// TESTIMONIAL SLIDER
// ==========================================
const testimonials = document.querySelectorAll('.testimonial-item');
const tDots = document.querySelectorAll('.t-dots .dot');
let currentT = 0;
let tInterval;

function goToT(n) {
  testimonials[currentT].classList.remove('active');
  tDots[currentT].classList.remove('active');
  currentT = (n + testimonials.length) % testimonials.length;
  testimonials[currentT].classList.add('active');
  tDots[currentT].classList.add('active');
}

document.getElementById('tNext').addEventListener('click', () => {
  clearInterval(tInterval);
  goToT(currentT + 1);
  tInterval = setInterval(() => goToT(currentT + 1), 5000);
});

document.getElementById('tPrev').addEventListener('click', () => {
  clearInterval(tInterval);
  goToT(currentT - 1);
  tInterval = setInterval(() => goToT(currentT + 1), 5000);
});

tDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(tInterval);
    goToT(i);
    tInterval = setInterval(() => goToT(currentT + 1), 5000);
  });
});

testimonials[0].classList.add('active');
tInterval = setInterval(() => goToT(currentT + 1), 5000);

// ==========================================
// CONTACT FORM
// ==========================================
document.getElementById('sendBtn').addEventListener('click', () => {
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value.trim();
  const msg     = document.getElementById('cMsg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  const btn = document.getElementById('sendBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '✓ Sent! <i class="fas fa-check"></i>';
    btn.style.background = '#2e7d32';
    document.getElementById('formSuccess').classList.add('show');

    // Reset form
    document.getElementById('cName').value = '';
    document.getElementById('cEmail').value = '';
    document.getElementById('cSubject').value = '';
    document.getElementById('cMsg').value = '';

    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.style.background = '';
      btn.disabled = false;
      document.getElementById('formSuccess').classList.remove('show');
    }, 4000);
  }, 1400);
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--accent)';
    }
  });
}, { passive: true });

// ==========================================
// WISHLIST TOGGLE
// ==========================================
document.querySelectorAll('.product-actions button[title="Wishlist"]').forEach(btn => {
  btn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    this.style.background = icon.classList.contains('fas') ? 'var(--rose)' : '';
    this.style.color      = icon.classList.contains('fas') ? 'var(--white)' : '';
  });
});
