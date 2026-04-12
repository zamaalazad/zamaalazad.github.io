/**
 * footer.js — Reusable Vue 3 Footer Component
 * Registers globally as <site-footer> via CDN Vue.
 * Features: social links, navigation columns, newsletter CTA, copyright.
 */

const SiteFooter = {
  name: 'SiteFooter',

  data() {
    return {
      currentYear: new Date().getFullYear(),
      email: '',
      subscribed: false,

      /** Social links — easily extensible */
      socials: [
        { label: 'Twitter / X', href: 'https://x.com/zamaalazad', target: '_blank', icon: 'twitter' },
        { label: 'GitHub',      href: 'https://github.com/zamaalazad', target: '_blank', icon: 'github' },
        { label: 'LinkedIn',    href: 'https://bh.linkedin.com/in/muhammad-shahjamal-azad-84877720', target: '_blank', icon: 'linkedin' },
        { label: 'RSS Feed',    href: 'https://zamaalazad.github.io/feed.xml', target: '_blank', icon: 'rss' },
      ],

      /** Footer nav columns */
      columns: [
        {
          heading: 'Explore',
          links: [
            { label: 'Home',        href: '/index.html' },
            { label: 'Blog',        href: '/pages/blog.html' },
            { label: 'Categories',  href: '/pages/category.html' },
            { label: 'AI Prompts',  href: '/pages/category.html?cat=prompts' },
          ]
        },
        {
          heading: 'Topics',
          links: [
            { label: 'Technology',    href: '/pages/category.html?cat=technology' },
            { label: 'AI & Machine Learning', href: '/pages/category.html?cat=ai' },
            { label: 'Web Dev',       href: '/pages/category.html?cat=webdev' },
            { label: 'Tech News',     href: '/pages/category.html?cat=news' },
          ]
        },
        {
          heading: 'More',
          links: [
            { label: 'About',       href: '/pages/about.html' },
            { label: 'Contact',     href: '/pages/contact.html' },
            { label: 'Privacy Policy', href: '#' },
          ]
        }
      ]
    };
  },

  computed: {
    basePath() {
      if (typeof window !== 'undefined') {
        return window.location.pathname.includes('/pages/') ? '../' : './';
      }
      return './';
    }
  },

  methods: {
    subscribe() {
      if (this.email && this.email.includes('@')) {
        this.subscribed = true;
        this.email = '';
      }
    },

    getLink(href) {
      if (href.startsWith('/')) {
        return this.basePath + href.substring(1);
      }
      return href;
    },

    /** SVG icons as inline strings */
    getIcon(name) {
      const icons = {
        twitter:  `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        github:   `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        rss:      `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>`
      };
      return icons[name] || '';
    }
  },

  template: `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8 mt-20">
      <div class="max-w-6xl mx-auto px-5">

        <!-- Top section -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          <!-- Brand + newsletter -->
          <div class="lg:col-span-2">
            <a :href="getLink('/index.html')" class="flex items-center gap-2 mb-4 group w-fit">
              <span class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow group-hover:scale-105 transition-transform">M</span>
              <span class="font-bold text-white text-xl">Mohammad Azad</span>
            </a>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Personal portfolio, resume, and insights from over a decade of experience in IT and Web UI/UX development.
            </p>

            <!-- Newsletter -->
            <p class="text-slate-200 font-semibold text-sm mb-3">Get new articles in your inbox</p>
            <form @submit.prevent="subscribe" class="flex gap-2" aria-label="Newsletter subscription">
              <input
                v-if="!subscribed"
                v-model="email"
                type="email"
                placeholder="your@email.com"
                aria-label="Your email address"
                class="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-slate-500 transition"
              />
              <button
                v-if="!subscribed"
                type="submit"
                class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors shrink-0">
                Subscribe
              </button>
              <p v-else class="text-indigo-400 text-sm font-medium py-2">🎉 You're subscribed!</p>
            </form>
          </div>

          <!-- Nav columns -->
          <div v-for="col in columns" :key="col.heading" class="lg:col-span-1">
            <h3 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{{ col.heading }}</h3>
            <ul class="space-y-2.5 list-none" role="list">
              <li v-for="link in col.links" :key="link.label">
                <a :href="getLink(link.href)"
                   class="text-slate-400 text-sm hover:text-indigo-400 transition-colors" >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-slate-500 text-sm">
            © {{ currentYear }} Mohammad Azad. Crafted with ♥
          </p>

          <!-- Social links -->
          <div class="flex items-center gap-3">
            <a v-for="s in socials" :key="s.label"
               :href="s.href"
               :target="s.target"
               :aria-label="s.label"
               class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-700 transition-all">
              <span v-html="getIcon(s.icon)"></span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  `
};

if (typeof window !== 'undefined') {
  window.SiteFooter = SiteFooter;
}
