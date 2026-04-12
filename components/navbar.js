/**
 * navbar.js — Reusable Vue 3 Navbar Component
 * Registers globally as <nav-bar> via CDN Vue.
 * Features: sticky, scrolled shadow, mobile hamburger, active link.
 */

const NavBar = {
  name: 'NavBar',

  props: {
    /** Current page path — used to mark active links */
    currentPage: {
      type: String,
      default: '/'
    }
  },

  data() {
    return {
      menuOpen: false,
      scrolled: false,
      isDark: false,

      /** Navigation links — add/remove entries here to scale */
      links: [
        { label: 'Main',       href: '/index.html',          path: '/' },
        { label: 'Articles',   href: '/pages/blog.html',     path: 'blog' },
        { label: 'About',      href: '/pages/about.html',    path: 'about' },
        { label: 'Contact',    href: '/pages/contact.html',  path: 'contact' },
      ]
    };
  },

  computed: {
    /** Derive active path from window location */
    activePath() {
      if (typeof window !== 'undefined') {
        const p = window.location.pathname;
        if (p === '/' || p.includes('index')) return '/';
        const match = p.match(/\/([^/]+)\.html/);
        return match ? match[1] : '/';
      }
      return '/';
    },
    basePath() {
      if (typeof window !== 'undefined') {
        return window.location.pathname.includes('/pages/') ? '../' : './';
      }
      return './';
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    document.addEventListener('keydown', this.handleEscape);
    
    // Check initial theme state
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleEscape);
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
    handleEscape(e) {
      if (e.key === 'Escape') this.menuOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    isActive(link) {
      const p = typeof window !== 'undefined' ? window.location.pathname : '';
      if (link.path === '/') return p === '/' || p.endsWith('index.html') || p === '';
      return p.includes(link.path);
    },
    getLink(href) {
      if (href.startsWith('/')) {
        return this.basePath + href.substring(1);
      }
      return href;
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  },

  template: `
    <header :class="['navbar', scrolled ? 'scrolled' : '']" role="banner">
      <div class="max-w-6xl mx-auto px-5">
        <nav class="flex items-center justify-between h-16" aria-label="Main navigation">

          <!-- Brand -->
          <a :href="getLink('/index.html')" class="flex items-center gap-2 group" aria-label="Home">
            <span class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow group-hover:scale-105 transition-transform">M</span>
            <span class="font-bold text-white text-lg tracking-tight">Mohammad Azad</span>
          </a>

          <!-- Desktop links -->
          <ul class="hidden md:flex items-center gap-7 list-none" role="list">
            <li v-for="link in links" :key="link.path">
              <a :href="getLink(link.href)"
                 :class="['nav-link', isActive(link) ? 'active' : '']"
                 :aria-current="isActive(link) ? 'page' : undefined">
                {{ link.label }}
              </a>
            </li>
          </ul>

          <!-- CTA + theme + hamburger -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button @click="toggleTheme" 
                    title="Toggle Theme"
                    class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-300">
              <svg v-if="!isDark" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              <svg v-else width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <a :href="getLink('/pages/blog.html')" class="hidden md:inline-flex btn-primary text-sm py-2 px-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Start Reading
            </a>
            <!-- Hamburger -->
            <button
              @click="toggleMenu"
              class="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
              :aria-expanded="menuOpen.toString()"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu">
              <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']"></span>
              <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? 'opacity-0' : '']"></span>
              <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
            </button>
          </div>
        </nav>

        <!-- Mobile menu -->
        <div id="mobile-menu" :class="['mobile-menu', menuOpen ? 'open' : '']" role="navigation" aria-label="Mobile navigation">
          <ul class="py-4 flex flex-col gap-1 list-none" role="list">
            <li v-for="link in links" :key="link.path">
              <a :href="getLink(link.href)"
                 :class="['flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors', isActive(link) ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white']"
                 :aria-current="isActive(link) ? 'page' : undefined"
                 @click="menuOpen = false">
                {{ link.label }}
              </a>
            </li>
            <li class="mt-2 pt-3 border-t border-slate-800">
              <a :href="getLink('/pages/blog.html')" class="btn-primary w-full justify-center">Start Reading</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `
};

// Make available globally for CDN usage
if (typeof window !== 'undefined') {
  window.NavBar = NavBar;
}
