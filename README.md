# 🚀 B. Padma Hrushikesh - Premium AI Portfolio Website

A modern, responsive, and recruiter-friendly portfolio website designed and built using **pure HTML, CSS, and Vanilla JavaScript** with **AOS (Animate on Scroll)** and **GSAP** micro-animations.

---

## 📁 Project Structure

```text
Portfolio/
│── index.html              # Main HTML structure for all sections
│── style.css               # Complete styling, variables, glassmorphism & responsive layout
│── script.js               # Theme toggle, loader, scroll progress bar, and typing effect
│── README.md               # User guide & documentation
└── assets/                 # Folder for profile picture, resume PDF & project thumbnails
    ├── profile.jpg
    └── resume.pdf
```

---

## 📖 How to Maintain & Update Your Portfolio

### 1️⃣ How to Add New Skills
Open `index.html` and scroll to `<!-- SKILLS SECTION -->`.  
Inside `<div class="skills__box">`, copy and paste a `<div class="skills__data">` block:

```html
<div class="skills__data">
  <div class="skills__name-group">
    <span class="skills__name">React / Tailwind</span>
    <span class="skills__percent">75%</span>
  </div>
  <div class="skills__bar">
    <span class="skills__percentage" style="width: 75%"></span>
  </div>
</div>
```
* **Skill Name**: Change `React / Tailwind` to your new skill.
* **Percentage**: Change both the `75%` text and the `style="width: 75%"` value to match your proficiency level.

---

### 2️⃣ How to Add Education Details
Open `index.html` and scroll to `<!-- EDUCATION TIMELINE -->`.  
Inside `<div class="timeline">`, add a new `<div class="timeline__item">`:

```html
<div class="timeline__item" data-aos="fade-up" data-aos-delay="200">
  <div class="timeline__dot"></div>
  <div class="timeline__content">
    <h3 class="timeline__title">Bachelor of Technology in CSE</h3>
    <span class="timeline__subtitle">University Name / College Name</span>
    <span class="timeline__date"><i class="ri-calendar-line"></i> 2027 - 2030 | Score: 9.0 CGPA</span>
  </div>
</div>
```

---

### 3️⃣ How to Add New Projects & Project Thumbnail Photos

#### Step 3.1: Add the Thumbnail Photo
1. Save your project screenshot or image in the `assets/` folder (e.g., `assets/project4.png`).

#### Step 3.2: Add the Project Card in `index.html`
Scroll to `<!-- PROJECTS SECTION -->`. Inside `<div class="projects__container">`, add a new `<article class="projects__card">`:

```html
<article class="projects__card" data-aos="fade-up" data-aos-delay="300">
  <div class="projects__image">
    <!-- Replace with your image file path in assets/ -->
    <img src="assets/project4.png" alt="Project Title" class="projects__img">
  </div>
  <div class="projects__content">
    <h3 class="projects__title">New App Title</h3>
    <p class="projects__description">
      A short 2-3 sentence description of what the application does and key features.
    </p>
    <!-- Technology Tags -->
    <ul class="projects__tech">
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
    <!-- Live Demo or Code Links -->
    <a href="https://your-live-demo-url.com" target="_blank" class="button button--ghost button--small">
      View Live <i class="ri-arrow-right-line"></i>
    </a>
    <a href="https://github.com/yourusername/project-repo" target="_blank" class="button button--ghost button--small">
      View Code <i class="ri-github-line"></i>
    </a>
  </div>
</article>
```

---

### 4️⃣ How to Add Achievements
Scroll to `<!-- ACHIEVEMENTS SECTION -->`. Inside `<div class="achievements__container">`, copy and paste a new card:

```html
<div class="achievements__card" data-aos="zoom-in" data-aos-delay="400">
  <i class="ri-trophy-line achievements__icon"></i>
  <h3 class="achievements__title">Hackathon Winner</h3>
  <p>Secured 1st place in State-Level Web Development Hackathon 2026.</p>
</div>
```
* **Icons**: You can change the icon class (e.g., `ri-trophy-line`, `ri-medal-line`, `ri-award-line`, `ri-star-line`) using any icon from [RemixIcon](https://remixicon.com/).

---

### 5️⃣ How to Update Contact Me Details

Scroll to `<!-- CONTACT SECTION -->` in `index.html`.

* **To update Email**: Change `bheemanapallih@gmail.com` and update the `href="mailto:bheemanapallih@gmail.com"`.
* **To update Phone / WhatsApp**: Change `+91 9441572613` and update the link `href="https://wa.me/919441572613?text=Hi%20Hrushikesh..."`.
* **To update Location**: Change `Rayadurg, Andhra Pradesh`.
* **To update Social Links (LinkedIn / GitHub)**:
  - Search for `https://linkedin.com` or `https://github.com` in `index.html` and replace them with your exact profile URLs.

---

### 6️⃣ How to Update Profile Photo & Resume PDF

* **Profile Photo**: Save your new picture inside `assets/` as `profile.jpg` (replaces the existing image automatically).
* **Resume PDF**: Save your updated resume inside `assets/` as `resume.pdf` (replaces the existing PDF automatically).

---

## 🌐 Running Your Portfolio

No build tools, node servers, or command line required!  
Simply double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari) to run your site.
