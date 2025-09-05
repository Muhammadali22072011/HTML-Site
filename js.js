// Плавная навигация и основные функции
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
    setupIntersectionObserver();
    addModalStyles();
});

// Инициализация навигации
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Плавный скролл к секции
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // учитываем высоту фиксированной навигации
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Мобильное меню
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Закрываем мобильное меню при клике на ссылку
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Анимации при скролле
function initScrollAnimations() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Эффект для навбара
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// Intersection Observer для анимации появления элементов
function setupIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    // Добавляем класс fade-in к элементам, которые должны анимироваться
    const elementsToAnimate = document.querySelectorAll('.lesson-card, .lessons-block, .section-header');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Модальные окна для уроков
async function openLessonModal(lessonNumber) {
    const modal = document.getElementById('lessonModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;

    // Show loading state
    modalBody.innerHTML = `<div class="lesson-detail"><p>Загрузка урока ${lessonNumber}…</p></div>`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Try load external lesson file
    await loadExternalLesson(lessonNumber);
    const ns = (window.LESSONS && window.LESSONS[lessonNumber]) || window[`lesson${lessonNumber}`];
    if (ns && typeof ns === 'object') {
        const domInfo = (function(){
            try {
                const cards = Array.from(document.querySelectorAll('.lesson-card'));
                const card = cards.find(c => (c.querySelector('.lesson-number')||{}).textContent?.trim() === String(lessonNumber).padStart(2,'0'));
                return card ? (card.querySelector('h4')||{}).textContent?.trim() : undefined;
            } catch(_) { return undefined; }
        })();
        const html = renderStructuredLesson(ns, domInfo || `Урок ${lessonNumber}`);
        if (html) {
            modalBody.innerHTML = html;
            return;
        }
    }

    // Fallback to generator
    modalBody.innerHTML = getLessonContent(lessonNumber);
}

// Функция для динамической загрузки уроков
function loadLesson(lessonNumber, modalBody) {
    const script = document.createElement('script');
    script.src = `lessons/lesson${lessonNumber}.js`;
    
    script.onload = function() {
        // После загрузки скрипта получаем контент урока
        const lessonContent = window[`lesson${lessonNumber}Content`];
        if (lessonContent) {
            modalBody.innerHTML = lessonContent.content;
        } else {
            modalBody.innerHTML = getDefaultLessonContent(lessonNumber);
        }
    };
    
    script.onerror = function() {
        // Если файл урока не найден, показываем базовый контент
        modalBody.innerHTML = getDefaultLessonContent(lessonNumber);
    };
    
    document.head.appendChild(script);
}

// Базовый контент для уроков, которые ещё не созданы
function getDefaultLessonContent(lessonNumber) {
    return `
        <div class="lesson-detail">
            <h2>Урок ${lessonNumber}</h2>
            <div class="lesson-meta">
                <span class="duration"><i class="fas fa-clock"></i> 60 минут</span>
                <span class="difficulty"><i class="fas fa-star"></i> Начальный</span>
                <span class="age"><i class="fas fa-child"></i> 2-4 класс</span>
            </div>
            
            <div class="media-section">
                <h3><i class="fas fa-video"></i> Обучающее видео</h3>
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Видео для урока ${lessonNumber} (5-7 минут)</p>
                        <small>Интерактивное обучающее видео с примерами</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-10 мин</span>
                        <span class="activity">Введение и теория</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">10-35 мин</span>
                        <span class="activity">Практические упражнения</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Интерактивные игры</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Проверка знаний и домашнее задание</span>
                    </div>
                </div>
            </div>
            
            <div class="coming-soon">
                <i class="fas fa-tools"></i>
                <h3>Урок в разработке</h3>
                <p>Подробное содержание этого урока скоро будет добавлено!</p>
                <p>Урок будет включать:</p>
                <ul>
                    <li>📹 Обучающие видео</li>
                    <li>🎮 Интерактивные игры</li>
                    <li>📝 Практические задания</li>
                    <li>🏠 Домашние задания</li>
                    <li>✅ Проверочные тесты</li>
                </ul>
            </div>
        </div>
    `;
}

function closeLessonModal() {
    const modal = document.getElementById('lessonModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстанавливаем скролл
    }
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    const modal = document.getElementById('lessonModal');
    if (event.target === modal) {
        closeLessonModal();
    }
});

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLessonModal();
    }
});

// Добавляем стили для модального окна
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .loading {
            text-align: center;
            padding: 3rem;
            color: var(--text-light);
        }
        
        .loading i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--primary-blue);
        }
    `;
    document.head.appendChild(style);
}

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.documentElement.classList.toggle('nav-open');
    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
      nav.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'right-4', 'bg-white', 'border', 'border-neutral-200', 'rounded-lg', 'shadow-lg', 'p-4', 'gap-3');
    } else {
      nav.classList.add('hidden');
      nav.classList.remove('flex');
    }
  });
}

// Reveal on scroll animations
const animated = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-6');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animated.forEach((el) => observer.observe(el));

// Smooth scrolling for internal links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ===== Enhanced lesson content generator (override) =====
(function() {
  function pad(num) { return String(num).padStart(2, '0'); }

  function getLessonInfoFromDOM(lessonNumber) {
    try {
      const cards = Array.from(document.querySelectorAll('.lesson-card'));
      const card = cards.find(c => (c.querySelector('.lesson-number')||{}).textContent?.trim() === pad(lessonNumber));
      if (!card) return null;
      const title = (card.querySelector('h4')||{}).textContent?.trim() || `Урок ${lessonNumber}`;
      const desc = (card.querySelector('p')||{}).textContent?.trim() || '';
      const tagEls = card.querySelectorAll('.lesson-tags .tag');
      const tags = Array.from(tagEls).map(t => t.textContent.trim());
      return { title, desc, tags };
    } catch(_) { return null; }
  }

  function buildUnsplashImages(title, count = 4) {
    const q = encodeURIComponent((title || 'computer kids').toLowerCase());
    const topics = [q, 'computer', 'keyboard', 'internet'];
    return Array.from({ length: count }).map((_, i) => ({
      url: `https://source.unsplash.com/600x400/?${topics[i % topics.length]}`,
      caption: `Иллюстрация по теме`
    }));
  }

  // Expose globally and provide a safe wrapper
  try { window.buildUnsplashImages = buildUnsplashImages; } catch(_) {}
  function getUnsplashImages(title, count) {
    try {
      if (typeof buildUnsplashImages === 'function') return buildUnsplashImages(title, count);
    } catch(_) {}
    // Fallback simple generator
    const q = encodeURIComponent((title || 'computer kids').toLowerCase());
    return Array.from({ length: count || 4 }).map((_, i) => ({
      url: `https://source.unsplash.com/600x400/?${q}`,
      caption: 'Иллюстрация по теме'
    }));
  }

  try { window.getUnsplashImages = getUnsplashImages; } catch(_) {}

  // Always-available renderer for an image gallery
  function imageGalleryFromList(images) {
    return `
      <div class="image-gallery mt-4">
        <h4 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-images text-primary-600"></i> Картинки по теме</h4>
        <div class="gallery-grid grid gap-3 sm:grid-cols-2">
          ${images.map(img => `
            <figure class="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              <img src="${img.url}" alt="${img.caption || 'Иллюстрация'}" loading="lazy" class="w-full h-48 object-cover">
              <figcaption class="p-2 text-sm text-neutral-600">${img.caption || 'Иллюстрация'}</figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Safe wrapper that never fails even if imageGalleryFromList is unavailable in some scope
  function getGalleryHTML(images) {
    try {
      if (typeof imageGalleryFromList === 'function') {
        return imageGalleryFromList(images);
      }
    } catch(_) {}
    // Fallback inline
    return `
      <div class="image-gallery mt-4">
        <h4 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-images text-primary-600"></i> Картинки по теме</h4>
        <div class="gallery-grid grid gap-3 sm:grid-cols-2">
          ${images.map(img => `
            <figure class="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              <img src="${img.url}" alt="${img.caption || 'Иллюстрация'}" loading="lazy" class="w-full h-48 object-cover">
              <figcaption class="p-2 text-sm text-neutral-600">${img.caption || 'Иллюстрация'}</figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Expose globally to avoid scope issues
  try { window.imageGalleryFromList = imageGalleryFromList; window.getGalleryHTML = getGalleryHTML; } catch(_) {}

  function videoPlaceholder(title, url) {
    if (url) {
      // Basic YouTube/Vimeo/embed support
      return `
        <div class="media-section mb-6">
          <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-3"><i class="fas fa-video text-primary-600"></i> Вводное видео</h3>
          <div class="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
            <iframe class="w-full h-full" src="${url}" title="${title}" loading="lazy" allowfullscreen referrerpolicy="no-referrer"></iframe>
          </div>
        </div>
      `;
    }
    return `
      <div class="media-section mb-6">
        <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-3"><i class="fas fa-video text-primary-600"></i> Вводное видео</h3>
        <div class="video-container bg-neutral-900 text-white rounded-xl p-6 flex items-center justify-center border border-neutral-800">
          <div class="text-center max-w-md">
            <i class="fas fa-play-circle text-5xl text-primary-300"></i>
            <p class="mt-3 font-semibold">Видео: "${title}" (5 минут)</p>
            <small class="opacity-80">Краткое объяснение темы и что будем делать</small>
          </div>
        </div>
      </div>
    `;
  }

  function imageGalleryPlaceholders(title) {
    const imgs = buildUnsplashImages(title);
    return imageGalleryFromList(imgs);
  }

  function buildTimeline(minutes = 60) {
    const blocks = [
      { t: '0–5 мин', a: 'Вводное видео и цель урока' },
      { t: '5–15 мин', a: 'Объяснение темы на примерах' },
      { t: '15–30 мин', a: 'Практика шаг-за-шагом' },
      { t: '30–45 мин', a: 'Задание/мини‑проект' },
      { t: '45–55 мин', a: 'Проверка и обсуждение' },
      { t: '55–60 мин', a: 'Итоги и домашнее задание' }
    ];
    return blocks.map(b => `
      <div class="timeline-item flex items-center gap-3 py-3">
        <span class="time inline-flex items-center justify-center text-xs font-semibold text-neutral-800 bg-primary-50 border border-primary-200 text-primary-700 rounded-full px-3 py-1 w-24">${b.t}</span>
        <span class="activity text-neutral-700">${b.a}</span>
      </div>
    `).join('');
  }

  function buildDefaultLesson(lessonNumber) {
    const info = getLessonInfoFromDOM(lessonNumber) || { title: `Урок ${lessonNumber}`, desc: '', tags: [] };
    const duration = info.tags?.find(t => /мин/.test(t)) || '60 минут';
    const difficulty = 'Начальный';
    const age = '3–4 класс';

    return `
      
    `;
  }

  // Preserve any existing explicit lesson content, then fallback to default
  const explicitLessons = (function(){
    // Reuse earlier defined lessons if present in scope
    try {
      // Attempt to read previously defined variable 'lessons' if exists
      return typeof lessons === 'object' && lessons ? lessons : {};
    } catch(_) { return {}; }
  })();

  const originalGetLessonContent = typeof getLessonContent === 'function' ? getLessonContent : null;

  window.getLessonContent = function(lessonNumber) {
    // Prefer explicitly defined lessons from earlier code
    if (explicitLessons && explicitLessons[lessonNumber] && explicitLessons[lessonNumber].content) {
      return explicitLessons[lessonNumber].content;
    }
    // If an earlier function exists and returns rich content for this lesson, use it
    if (originalGetLessonContent) {
      const html = originalGetLessonContent(lessonNumber);
      if (html && !/скоро будет добавлено/i.test(html)) return html;
    }
    // Fallback: generated detailed lesson
    return buildDefaultLesson(lessonNumber);
  };
})();

// ===== End of generator override =====

// Async loader for external lesson files in /lessons
const DEFAULT_AVAILABLE_LESSONS = [1,2,3,4,5,6,7,8];
function isLessonFileAvailable(n) {
  try {
    const list = (window && Array.isArray(window.AVAILABLE_LESSONS)) ? window.AVAILABLE_LESSONS : DEFAULT_AVAILABLE_LESSONS;
    return list.includes(Number(n));
  } catch(_) { return DEFAULT_AVAILABLE_LESSONS.includes(Number(n)); }
}

async function loadExternalLesson(lessonNumber) {
  if (!isLessonFileAvailable(lessonNumber)) return false;
  const path = `lessons/lesson${lessonNumber}.js`;
  // Prevent double-injecting the same script
  if (document.querySelector(`script[data-lesson="${lessonNumber}"]`)) return true;
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = path;
    s.async = true;
    s.defer = true;
    s.dataset.lesson = String(lessonNumber);
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

function renderStructuredLesson(data, fallbackTitle) {
  if (!data || typeof data !== 'object') return null;
  const title = data.title || fallbackTitle || 'Урок';
  const duration = data.duration || '60 минут';
  const difficulty = data.difficulty || 'Начальный';
  const age = data.age || '3–4 класс';
  const videoTitle = (data.video && data.video.title) || title;
  const videoUrl = (data.video && data.video.url) || '';
  const objectives = Array.isArray(data.objectives) && data.objectives.length ? data.objectives : [
    'Понять тему простыми словами',
    'Повторить ключевые понятия на картинках',
    'Выполнить практику шаг‑за‑шагом',
    'Сделать мини‑результат (файл/слайд/рисунок)'
  ];
  const defaultTimeline = [
    { t: '0–5 мин', a: 'Вводное видео и цель урока' },
    { t: '5–15 мин', a: 'Объяснение темы на примерах' },
    { t: '15–30 мин', a: 'Практика шаг-за-шагом' },
    { t: '30–45 мин', a: 'Задание/мини‑проект' },
    { t: '45–55 мин', a: 'Проверка и обсуждение' },
    { t: '55–60 мин', a: 'Итоги и домашнее задание' }
  ];
  const timeline = Array.isArray(data.timeline) && data.timeline.length ? data.timeline : defaultTimeline;
  const timelineHtml = timeline.map(b => `
    <div class="timeline-item flex items-center gap-3 py-3">
      <span class="time inline-flex items-center justify-center text-xs font-semibold text-neutral-800 bg-primary-50 border border-primary-200 text-primary-700 rounded-full px-3 py-1 w-24">${b.t || b.time || ''}</span>
      <span class="activity text-neutral-700">${b.a || b.activity || ''}</span>
    </div>
  `).join('');

  const images = Array.isArray(data.images) && data.images.length ? data.images : buildUnsplashImages(title);
  const steps = Array.isArray(data.steps) && data.steps.length ? data.steps : [
    'Посмотри вводное видео и внимательно слушай объяснение.',
    'Следуй инструкции учителя, повторяя действия на компьютере.',
    'Выполни практику: сделай небольшое задание по теме.',
    'Проверь результат вместе с одноклассником.'
  ];

  const practice = Array.isArray(data.practice) && data.practice.length ? data.practice : [
    'Мини‑упражнение на освоение нового навыка',
    'Усложнение — применяем в задаче',
    'Мини‑проект/файл с сохранением результата'
  ];

  return `
    <div class="lesson-detail">
      <h2 class="text-lg font-semibold text-neutral-800 flex items-center gap-2 mb-2"><i class="fas fa-book-open text-primary-600"></i> ${title}</h2>
      <div class="lesson-meta flex flex-wrap gap-3 text-neutral-600 mb-4">
        <span class="duration inline-flex items-center gap-1"><i class="fas fa-clock text-primary-600"></i> ${duration}</span>
        <span class="difficulty inline-flex items-center gap-1"><i class="fas fa-star text-primary-600"></i> ${difficulty}</span>
        <span class="age inline-flex items-center gap-1"><i class="fas fa-child text-primary-600"></i> ${age}</span>
      </div>
      ${videoPlaceholder(videoTitle, videoUrl)}
      <div class="lesson-objectives mb-6">
        <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-target text-primary-600"></i> Цели урока</h3>
        <ul class="list-disc pl-6 text-neutral-700 space-y-1">${objectives.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>
      <div class="lesson-timeline mb-6">
        <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-clock text-primary-600"></i> План на 60 минут</h3>
        <div class="timeline border border-neutral-200 rounded-xl bg-white">${timelineHtml}</div>
      </div>
      <div class="lesson-content-section mb-6">
        <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-lightbulb text-primary-600"></i> Пошаговые инструкции</h3>
        <ol class="list-decimal pl-6 text-neutral-700 space-y-1">${steps.map(s => `<li>${s}</li>`).join('')}</ol>
        ${getGalleryHTML(images)}
      </div>
      <div class="activities mb-2">
        <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-gamepad text-primary-600"></i> Практика</h3>
        <ul class="list-disc pl-6 text-neutral-700 space-y-1">${practice.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

// Override openLessonModal to use external lessons if available
async function openLessonModal(lessonNumber) {
  const modal = document.getElementById('lessonModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  // Show loading state
  modalBody.innerHTML = `<div class="lesson-detail"><p>Загрузка урока ${lessonNumber}…</p></div>`;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Try load external lesson file
  await loadExternalLesson(lessonNumber);
  const ns = (window.LESSONS && window.LESSONS[lessonNumber]) || window[`lesson${lessonNumber}`];
  if (ns && typeof ns === 'object') {
    const domInfo = (function(){
      try {
        const cards = Array.from(document.querySelectorAll('.lesson-card'));
        const card = cards.find(c => (c.querySelector('.lesson-number')||{}).textContent?.trim() === String(lessonNumber).padStart(2,'0'));
        return card ? (card.querySelector('h4')||{}).textContent?.trim() : undefined;
      } catch(_) { return undefined; }
    })();
    const html = renderStructuredLesson(ns, domInfo || `Урок ${lessonNumber}`);
    if (html) {
      modalBody.innerHTML = html;
      return;
    }
  }

  // Fallback to generator
  modalBody.innerHTML = getLessonContent(lessonNumber);
}

// Keep close function as-is
function closeLessonModal() {
  const modal = document.getElementById('lessonModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ===== OpenRouter AI integration =====
function getConfig(key, fallback = '') {
  try {
    if (typeof window !== 'undefined' && window[key]) return window[key];
    const v = localStorage.getItem(key);
    return v || fallback;
  } catch(_) { return fallback; }
}

function setConfig(key, value) {
  try { localStorage.setItem(key, value); } catch(_) {}
}

// Default fallback key (user-provided). WARNING: embedding keys in client is insecure.
// Provided by user request to enable one-click generation.
const DEFAULT_OPENROUTER_API_KEY = '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';

function getOpenRouterKey() {
  if (typeof window !== 'undefined' && window.OPENROUTER_API_KEY) return window.OPENROUTER_API_KEY;
  try {
    const k = localStorage.getItem('OPENROUTER_API_KEY');
    return k || DEFAULT_OPENROUTER_API_KEY || '';
  } catch(_) { return DEFAULT_OPENROUTER_API_KEY || ''; }
}

function isAutoAIEnabled() {
  return getConfig('OPENROUTER_AUTO', 'false') === 'true';
}

function getLessonTitleByNumber(lessonNumber) {
  try {
    const card = Array.from(document.querySelectorAll('.lesson-card')).find(c => (c.querySelector('.lesson-number')||{}).textContent?.trim() === String(lessonNumber).padStart(2,'0'));
    return card?.querySelector('h4')?.textContent?.trim() || `Урок ${lessonNumber}`;
  } catch(_) { return `Урок ${lessonNumber}`; }
}

function getModel() {
  return getConfig('OPENROUTER_MODEL', 'deepseek/deepseek-chat-v3.1:free');
}

function getSystemPrompt() {
  const custom = getConfig('OPENROUTER_SYSTEM_PROMPT', '');
  if (custom) return custom;
  // Default robust system prompt for 60-min primary school lessons
  return [
    'Ты — методист цифровой педагогики и учитель информатики для 3–4 классов.',
    'Задача: по заданной теме сгенерировать ПОЛНЫЙ 60‑минутный урок, понятный детям.',
    'Требования к структуре (используй эти заголовки):',
    '1) Ввод и цели урока (простым языком).',
    '2) Оборудование и подготовка (ПК/интернет/ПО/материалы).',
    '3) Объяснение темы (очень просто, с аналогиями).',
    '4) Пошаговая практика (4–6 шагов с подсказками).',
    '5) Мини‑проект (результат, критерии успеха).',
    '6) Использование ChatGPT на уроке (безопасные подсказки).',
    '7) План на 60 минут (0–5, 5–15, 15–30, 30–45, 45–55, 55–60).',
    '8) Формирующее оценивание (чек‑лист на «да/нет»).',
    '9) Расширение: быстрое задание и задание для сильных.',
    '10) Домашнее задание (короткое, с участием семьи).',
    'Контент: объём не менее 1200–1600 слов; добавляй примеры, микродиалоги, подсказки учителю, типичные ошибки и как их исправлять.',
    'Изображения: включай 6–8 изображений по теме в формате Markdown ![alt](https://...), каждое с разными сюжетами (дети, компьютеры, клавиатура, интернет‑безопасность и т. п.).',
    'Правила: короткие фразы, доброжелательный тон, списки и подзаголовки, без сложных терминов, безопасность в сети. Пиши на русском.'
  ].join('\n');
}

function buildLessonPrompt(lessonNumber) {
  const info = (function(){
    try {
      const card = Array.from(document.querySelectorAll('.lesson-card')).find(c => (c.querySelector('.lesson-number')||{}).textContent?.trim() === String(lessonNumber).padStart(2,'0'));
      const title = card?.querySelector('h4')?.textContent?.trim();
      const desc = card?.querySelector('p')?.textContent?.trim();
      return { title, desc };
    } catch(_) { return {}; }
  })();

  const system = getSystemPrompt();
  const user = [
    `Тема: ${info.title || ('Урок ' + lessonNumber)}.`,
    info.desc ? `Краткое описание: ${info.desc}.` : '',
    'Сгенерируй полностью готовый урок на 60 минут по структуре из системного промпта.',
    'Обязательно добавь 6–8 изображений в Markdown (разные сцены) и сделай развёрнутые разделы.'
  ].filter(Boolean).join('\n');

  return [
    { role: 'system', content: system },
    { role: 'user', content: user }
  ];
}

function isASCII(str) {
  try { return /^[\x00-\x7F]*$/.test(String(str || '')); } catch(_) { return false; }
}

async function fetchAIContent(lessonNumber) {
  const apiKey = getOpenRouterKey();
  if (!apiKey) return null;
  const siteUrl = location.origin;
  const siteName = document.title || 'Lesson AI';

  const body = {
    model: getModel(),
    messages: buildLessonPrompt(lessonNumber),
    temperature: 0.7,
    max_tokens: 4000
  };

  try {
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };
    // Optional headers only if ASCII-safe
    if (isASCII(siteUrl)) headers['HTTP-Referer'] = siteUrl;
    if (isASCII(siteName)) headers['X-Title'] = siteName;

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('AI request failed');
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content || '';
    return content;
  } catch (e) {
    console.warn('AI fetch error', e);
    return null;
  }
}

// ===== Lightweight Markdown renderer =====
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[m]));
}

function renderMarkdown(md) {
  if (!md) return '';
  let text = md.replace(/\r\n?/g, '\n');

  // Code blocks ```
  const codeBlocks = [];
  text = text.replace(/```([\s\S]*?)```/g, (m, p1) => {
    codeBlocks.push(p1);
    return `@@CODEBLOCK_${codeBlocks.length - 1}@@`;
  });

  // Inline code `code`
  text = text.replace(/`([^`]+)`/g, (m, p1) => `<code class="px-1 py-0.5 bg-neutral-100 border border-neutral-200 rounded">${escapeHtml(p1)}</code>`);

  // Images Markdown ![alt](url)
  text = text.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, (m, alt, url) => {
    const safeUrl = escapeHtml(url.trim());
    return `<figure class="my-3 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"><img src="${safeUrl}" alt="${escapeHtml(alt)}" loading="lazy" class="w-full h-auto"><figcaption class="p-2 text-sm text-neutral-600">${escapeHtml(alt)}</figcaption></figure>`;
  });

  // Links [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (m, label, url) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="text-primary-700 underline">${escapeHtml(label)}</a>`);

  // Headings ###### .. #
  for (let i = 6; i >= 1; i--) {
    const re = new RegExp(`^${'#'.repeat(i)}\\s+(.+)$`, 'gm');
    text = text.replace(re, (m, p1) => `<h${i} class="mt-4 mb-2 font-semibold">${escapeHtml(p1)}</h${i}>`);
  }

  // Horizontal rule ---
  text = text.replace(/^\s*-{3,}\s*$/gm, '<hr class="my-4 border-neutral-200" />');

  // Bold **text** and italic *text* or _text_
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/(^|\s)_(.+?)_(?=\s|$)/g, '$1<em>$2</em>');
  text = text.replace(/(^|\s)\*(.+?)\*(?=\s|$)/g, '$1<em>$2</em>');

  // Lists (unordered and ordered) and paragraphs
  const lines = text.split('\n');
  let out = '';
  let inUL = false, inOL = false;
  for (const line of lines) {
    if (/^\s*[-*]\s+/.test(line)) {
      if (!inUL) { out += '<ul class="list-disc pl-6 space-y-1">'; inUL = true; }
      out += `<li>${line.replace(/^\s*[-*]\s+/, '')}</li>`;
      continue;
    } else if (/^\s*\d+\.\s+/.test(line)) {
      if (!inOL) { out += '<ol class="list-decimal pl-6 space-y-1">'; inOL = true; }
      out += `<li>${line.replace(/^\s*\d+\.\s+/, '')}</li>`;
      continue;
    } else {
      if (inUL) { out += '</ul>'; inUL = false; }
      if (inOL) { out += '</ol>'; inOL = false; }
      if (line.trim()) out += `<p class="text-neutral-700">${line}</p>`; else out += '<br />';
    }
  }
  if (inUL) out += '</ul>';
  if (inOL) out += '</ol>';

  // Restore code blocks
  out = out.replace(/@@CODEBLOCK_(\d+)@@/g, (m, idx) => `<pre class="bg-neutral-900 text-neutral-100 rounded-lg p-3 overflow-auto"><code>${escapeHtml(codeBlocks[Number(idx)])}</code></pre>`);

  return out;
}

function extractMarkdownImages(md) {
  if (!md) return [];
  const urls = [];
  // Markdown images
  let re = /!\[[^\]]*\]\(([^\)]+)\)/g; let m;
  while ((m = re.exec(md))) {
    const url = m[1];
    if (url && /^https?:\/\//i.test(url)) urls.push({ url, caption: '' });
  }
  // HTML <img src="...">
  re = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  while ((m = re.exec(md))) {
    const url = m[1];
    if (url && /^https?:\/\//i.test(url)) urls.push({ url, caption: '' });
  }
  return urls;
}

// ===== Enhanced AI block rendering =====
function renderAIBlock(markdownText, lessonTitle) {
  if (!markdownText) return '';
  const providedImgs = extractMarkdownImages(markdownText);
  const gallery = providedImgs.length ? getGalleryHTML(providedImgs) : getGalleryHTML(getUnsplashImages(lessonTitle || 'computer kids', 12));
  const html = renderMarkdown(markdownText);
  return `
    <div class="mt-6 border-t border-neutral-200 pt-4">
      <h3 class="flex items-center gap-2 text-neutral-800 font-semibold mb-2"><i class="fas fa-robot text-primary-600"></i> Генерация помощника</h3>
      ${gallery}
      <div class="prose prose-neutral max-w-none mt-4">${html}</div>
    </div>
  `;
}

function injectAIGenerateButton(lessonNumber) {
  const modalBody = document.getElementById('modalBody');
  if (!modalBody) return;
  if (modalBody.querySelector('#ai-generate-btn')) return;
  const btnWrap = document.createElement('div');
  btnWrap.className = 'mt-4 pt-4 border-t border-neutral-200 flex items-center gap-3';
  btnWrap.innerHTML = `
    <button id=\"ai-generate-btn\" class=\"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700\">\n      <i class=\"fas fa-robot\"></i>\n      Сгенерировать с помощью ИИ\n    </button>\n    <span id=\"ai-status\" class=\"text-sm text-neutral-500\"></span>
  `;
  modalBody.appendChild(btnWrap);
  const btn = btnWrap.querySelector('#ai-generate-btn');
  const status = btnWrap.querySelector('#ai-status');
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.classList.add('opacity-70','cursor-not-allowed');
    status.textContent = 'Генерация…';
    const aiText = await fetchAIContent(lessonNumber);
    status.textContent = '';
    btn.disabled = false;
    btn.classList.remove('opacity-70','cursor-not-allowed');
    if (aiText) {
      const block = document.createElement('div');
      block.innerHTML = renderAIBlock(aiText, getLessonTitleByNumber(lessonNumber));
      modalBody.appendChild(block);
    } else {
      status.textContent = 'Не удалось сгенерировать. Проверьте ключ.';
    }
  });
}

// Hook into modal open
const originalOpenLessonModal = openLessonModal;
openLessonModal = async function(lessonNumber) {
  await originalOpenLessonModal(lessonNumber);
  injectAIGenerateButton(lessonNumber);
  if (isAutoAIEnabled()) {
    const btn = document.getElementById('ai-generate-btn');
    if (btn) btn.click();
  }
}

// ===== End OpenRouter integration =====


