import { storyData } from '../content/story.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

function startApp() {
  initCountdown();
  initHeroSlideshow();
  renderTimeline();
  initLetterTabs();
  renderQuizCards();
  initQuizFilters();
  renderGallery();
  initLightbox();
  initCopyButtons();
  initMobileMenu();
  initAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

/**
 * 1. Live Countdown Timer to December 5, 2026
 */
function initCountdown() {
  const targetDate = new Date('2026-12-05T10:00:00+01:00').getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minsEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  update();
  setInterval(update, 1000);
}

/**
 * 1B. Animated 3-Photo Hero Slideshow
 */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const container = document.getElementById('hero-carousel');

  if (!slides.length || !dots.length) return;

  let currentIndex = 0;
  let timer = null;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
        slide.classList.add('opacity-100', 'z-10');
      } else {
        slide.classList.remove('opacity-100', 'z-10');
        slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.remove('bg-white/60');
        dot.classList.add('bg-coral', 'scale-125');
      } else {
        dot.classList.remove('bg-coral', 'scale-125');
        dot.classList.add('bg-white/60');
      }
    });
  }

  function next() {
    goToSlide(currentIndex + 1);
  }

  function prev() {
    goToSlide(currentIndex - 1);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(next, 4500);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prev();
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      next();
      startTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide-index'), 10);
      goToSlide(idx);
      startTimer();
    });
  });

  if (container) {
    container.addEventListener('mouseenter', stopTimer);
    container.addEventListener('mouseleave', startTimer);
    container.addEventListener('touchstart', stopTimer, { passive: true });
    container.addEventListener('touchend', startTimer, { passive: true });
  }

  startTimer();
}

/**
 * 2. Render Story Timeline with Full Original Fidelity
 */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = storyData.timeline.map((item, idx) => {
    // Format paragraph breaks
    const formattedParagraphs = item.content
      .split('\n\n')
      .map(p => `<p class="leading-relaxed text-plum/85 text-sm sm:text-base">${escapeHtml(p)}</p>`)
      .join('');

    return `
      <article class="timeline-item relative group" data-timeline-id="${item.id}">
        <!-- Node Dot (Mathematically centered on the vertical line) -->
        <div class="absolute -left-[25px] sm:-left-[41px] -translate-x-1/2 top-6 sm:top-[26px] w-5 h-5 rounded-full border-4 border-ivory bg-coral group-hover:scale-125 transition-transform shadow-sm pointer-events-none"></div>

        <div class="paper-card p-6 sm:p-8 rounded-2xl space-y-4 hover:border-coral/30 transition-all shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-plum/10 pb-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-md bg-plum/10 text-plum font-mono text-xs font-bold">${item.year}</span>
              <span class="text-xs uppercase tracking-wider text-plum/60 font-sans font-medium">• ${item.authorPerspective}</span>
            </div>
            <span class="text-xs text-coral font-medium tracking-wider">Chapter 0${idx + 1}</span>
          </div>

          <h3 class="font-headline text-xl sm:text-2xl text-plum font-semibold">${item.title}</h3>

          <div class="space-y-3 font-sans">
            ${formattedParagraphs}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 3. Two Hearts, Two Voices Tab Controls
 */
function initLetterTabs() {
  const btnBoth = document.getElementById('tab-both');
  const btnGroom = document.getElementById('tab-groom');
  const btnBride = document.getElementById('tab-bride');
  const groomCard = document.getElementById('letter-groom-card');
  const brideCard = document.getElementById('letter-bride-card');
  const container = document.getElementById('letters-container');

  if (!btnBoth || !btnGroom || !btnBride || !groomCard || !brideCard) return;

  const buttons = [btnBoth, btnGroom, btnBride];

  function setActive(btn) {
    buttons.forEach(b => {
      b.classList.remove('bg-plum', 'text-ivory');
      b.classList.add('bg-plum/5', 'text-plum');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('bg-plum', 'text-ivory');
    btn.classList.remove('bg-plum/5', 'text-plum');
    btn.setAttribute('aria-selected', 'true');
  }

  btnBoth.addEventListener('click', () => {
    setActive(btnBoth);
    container.classList.remove('grid-cols-1');
    container.classList.add('lg:grid-cols-2');
    groomCard.classList.remove('hidden');
    brideCard.classList.remove('hidden');
  });

  btnGroom.addEventListener('click', () => {
    setActive(btnGroom);
    container.classList.remove('lg:grid-cols-2');
    container.classList.add('grid-cols-1');
    groomCard.classList.remove('hidden');
    brideCard.classList.add('hidden');
  });

  btnBride.addEventListener('click', () => {
    setActive(btnBride);
    container.classList.remove('lg:grid-cols-2');
    container.classList.add('grid-cols-1');
    groomCard.classList.add('hidden');
    brideCard.classList.remove('hidden');
  });
}

/**
 * 4. Render Fun Things About Us (Couples Quiz)
 */
function renderQuizCards() {
  const grid = document.getElementById('quiz-grid');
  if (!grid) return;

  grid.innerHTML = storyData.funQuestions.map((item, index) => {
    let category = 'both';
    let badgeColor = 'bg-lilac/30 text-plum';

    if (item.answer.includes('Gideon')) {
      category = 'gideon';
      badgeColor = 'bg-marigold/20 text-marigold-dark';
    } else if (item.answer.includes('Grace-Mercy')) {
      category = 'gracemercy';
      badgeColor = 'bg-coral/15 text-coral';
    }

    return `
      <div 
        class="quiz-card paper-card p-5 rounded-2xl border border-plum/10 hover:border-coral/40 cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-sm"
        data-category="${category}"
        data-index="${index}"
        tabindex="0"
        role="button"
        aria-pressed="false"
        aria-label="Question: ${escapeHtml(item.question)}. Click to reveal answer."
      >
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-2xl" aria-hidden="true">${item.icon}</span>
            <span class="text-[10px] uppercase font-mono font-bold tracking-wider text-plum/50">Q${index + 1}</span>
          </div>
          <h3 class="font-headline text-base sm:text-lg text-plum group-hover:text-coral transition-colors font-semibold">
            ${escapeHtml(item.question)}
          </h3>
        </div>

        <div class="mt-4 pt-3 border-t border-plum/10 flex items-center justify-between">
          <span class="quiz-prompt text-xs font-sans text-plum/50 group-hover:text-plum/80 flex items-center gap-1">
            <span>Tap to reveal</span>
            <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </span>
          <span class="quiz-answer hidden px-3 py-1 rounded-full text-xs font-sans font-bold ${badgeColor} animate-fadeIn">
            ${escapeHtml(item.answer)}
          </span>
        </div>
      </div>
    `;
  }).join('');

  // Add click & keyboard handler for flip reveal
  document.querySelectorAll('.quiz-card').forEach(card => {
    const toggleReveal = () => {
      const prompt = card.querySelector('.quiz-prompt');
      const answer = card.querySelector('.quiz-answer');
      const isRevealed = !answer.classList.contains('hidden');

      if (isRevealed) {
        answer.classList.add('hidden');
        prompt.classList.remove('hidden');
        card.setAttribute('aria-pressed', 'false');
      } else {
        answer.classList.remove('hidden');
        prompt.classList.add('hidden');
        card.setAttribute('aria-pressed', 'true');
      }
    };

    card.addEventListener('click', toggleReveal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleReveal();
      }
    });
  });
}

/**
 * Filter Quiz Cards by Person
 */
function initQuizFilters() {
  const buttons = document.querySelectorAll('.quiz-filter-btn');
  const cards = document.querySelectorAll('.quiz-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-plum', 'text-ivory');
        b.classList.add('bg-plum/5', 'text-plum');
      });
      btn.classList.add('bg-plum', 'text-ivory');
      btn.classList.remove('bg-plum/5', 'text-plum');

      const id = btn.id;
      let filter = 'all';
      if (id === 'filter-gideon') filter = 'gideon';
      if (id === 'filter-gracemercy') filter = 'gracemercy';
      if (id === 'filter-both') filter = 'both';

      cards.forEach(c => {
        const cat = c.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * 5. Render Photographic Exhibition Gallery
 */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  // If already populated in HTML, do not wipe it out
  if (grid.children.length === 0) {
    grid.innerHTML = storyData.gallery.map((item, index) => {
      return `
        <div 
          class="gallery-item group paper-card rounded-2xl overflow-hidden cursor-pointer relative shadow-sm hover:shadow-elevated transition-all"
          data-index="${index}"
          tabindex="0"
          role="button"
          aria-label="View photo: ${escapeHtml(item.caption)}"
        >
          <div class="aspect-[4/3] overflow-hidden bg-plum/5 relative">
            <img 
              src="${item.src}" 
              alt="${escapeHtml(item.alt)}" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-plum-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-xs text-ivory font-sans flex items-center gap-1.5">
                <svg class="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                <span>Click to enlarge</span>
              </span>
            </div>
          </div>

          <div class="p-4 space-y-1">
            <div class="flex items-center justify-between text-[11px] text-plum/60 font-sans">
              <span class="font-medium text-coral">${item.category}</span>
              <span>Photo ${index + 1} of ${storyData.gallery.length}</span>
            </div>
            <p class="font-headline text-sm text-plum font-semibold line-clamp-2">${escapeHtml(item.caption)}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

/**
 * 6. Accessible Lightbox Modal
 */
let currentLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!modal || !img || !caption || !closeBtn || !prevBtn || !nextBtn) return;

  function showImage(index) {
    if (index < 0) index = storyData.gallery.length - 1;
    if (index >= storyData.gallery.length) index = 0;
    currentLightboxIndex = index;

    const item = storyData.gallery[index];
    img.src = item.src;
    img.alt = item.alt;
    caption.textContent = item.caption;
    counter.textContent = `${index + 1} of ${storyData.gallery.length}`;
  }

  function openLightbox(index) {
    showImage(index);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Gallery items click
  document.querySelectorAll('.gallery-item').forEach(item => {
    const handleOpen = () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      openLightbox(idx);
    };
    item.addEventListener('click', handleOpen);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showImage(currentLightboxIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentLightboxIndex + 1));

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentLightboxIndex + 1);
  });

  // Click backdrop to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
}

/**
 * 7. Copy to Clipboard with Accessible Live Toast Feedback
 */
function initCopyButtons() {
  const toastRegion = document.getElementById('toast-region');
  const buttons = document.querySelectorAll('.copy-btn');

  function showToast(message) {
    if (!toastRegion) return;

    const toast = document.createElement('div');
    toast.className = 'bg-plum text-ivory px-5 py-3 rounded-xl shadow-2xl border border-coral flex items-center gap-2 text-sm font-sans font-medium animate-fadeIn transition-opacity duration-300';
    toast.innerHTML = `
      <svg class="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      <span>${escapeHtml(message)}</span>
    `;

    toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-target');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback using textarea
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Visual button confirmation
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <span>Copied!</span>
        `;
        showToast(`Account number ${textToCopy} copied to clipboard!`);

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2500);
      } catch (err) {
        showToast(`Account number: ${textToCopy}`);
      }
    });
  });
}

/**
 * 8. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu || !hamburger || !closeIcon) return;

  function toggle() {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  btn.addEventListener('click', toggle);

  // Close when clicking a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) toggle();
    });
  });
}

/**
 * 9. GSAP & ScrollTrigger Animations with Reduced Motion Fallback
 */
function initAnimations() {
  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Gentle fade-in for section headlines
  gsap.utils.toArray('section h2').forEach(heading => {
    gsap.from(heading, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stagger reveal for timeline items
  gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
      opacity: 0,
      x: -25,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Refresh ScrollTrigger calculations after DOM initialization
  ScrollTrigger.refresh();
}

/**
 * Utility: HTML Escape
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
