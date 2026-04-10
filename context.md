You are a senior frontend engineer and UI architect.

Your task is to generate a complete, production-ready frontend for a **personal blog website** that is designed to be scalable to a **multi-author plat form in the future**.

### Core Purpose of the Site

The blog will contain:

* Personal articles
* A curated library of my own AI prompts
* Explanations of new technologies
* Tech news and updates

### Design Philosophy

* use best practices for web design
* use latest design trends
* use best practices for SEO
* use best practices for accessibility
* use best practices for performance
* use best practices for frontend design
* Clean layout with lots of white space
* Simple and consistent color palette (2–3 colors max)
* Readability and accessibility are the top priorities

### Required Pages

Generate separate components/pages for:

1. Homepage
2. Blog Listing Page
3. Category Page
4. Single Article Page
5. Author Profile Page (future multi-author support)
6. About Page
7. Contact Page
8. Navigation Menubar
9. Footer

### Technical Requirements

* Use **semantic HTML5**
* Styling should be done using **Tailwind CSS via CDN**
* Prefer **Vue.js (via CDN)** for interactivity and component structure
* If Vue is not necessary for some sections, keep them static for performance
* All JavaScript must be clean, modular, and commented
* Avoid heavy frameworks or build tools; this should run without a bundler

### Performance Constraints

* Optimize for fast loading and high Lighthouse score
* Avoid unnecessary JavaScript
* Use lazy loading for images
* Use system fonts or web-safe fonts when possible or google fonts
* I liked "Inter" fonts for typography

### Layout Requirements

Homepage should include:

* Top navigation bar
* Hero section with blog intro
* Latest articles section
* Featured prompts section
* Category preview section
* Footer with social links

Single Article Page must include:

* Title, author, date, reading time
* Table of contents generated from headings
* Clean typography for long-form reading
* Code block styling for prompts and technical content

Author Page must include:

* Author bio
* Author’s articles list
* Social links

### Animation Guidelines

* Only subtle animations
* Use JavaScript or CSS transitions for:

  * hover effects
  * mobile menu
  * smooth scroll
* Avoid large animation libraries

### Folder Structure (even though CDN is used)

Organize the output as if it were a scalable project:

```
/index.html
/pages/
    about.html
    contact.html
    article.html
/components/
    navbar.js
    footer.js
/styles/
    custom.css
```

### Code Quality

* Use reusable components where possible
* Write clean and readable code
* Add comments explaining important sections
* Ensure responsive design for mobile, tablet, and desktop

### Output Format

Provide:

1. Full HTML files
2. Vue component scripts
3. Tailwind configuration (if needed)
4. Explanation of how the structure supports future multi-author scaling
