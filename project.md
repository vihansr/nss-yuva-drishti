# Project Specification: Team Vivekananda Website

**Project:** "Breaking the Barriers" Research Portfolio  
**Initiative:** Yuva Drishti (NSS IIPS DAVV)  
**Agent:** Antigravity

---

## 🤖 Agent Role & Objective

**Role:** Senior Full-Stack Web Developer & UI/UX Designer.  
**Objective:** Build a responsive, single-page research portfolio website that showcases the findings of Team Vivekananda's social research project. The site must serve as digital evidence of our fieldwork and analysis.

---

## 📂 Asset Directory Configuration

You have access to the following directories. You must map these strictly as defined below:

1.  **`nss img/`**: Contains the organization logos.
    - _Usage:_ Use the NSS/IIPS logo for the **Navigation Bar** and **Footer**.
2.  **`survey rep/`**: Contains raw photos of the survey and interview process.
    - _Usage:_ Use these for the **Evidence Gallery** and **Hero Section Background** (if suitable).

---

## 🎨 Design System

- **Theme:** Academic, Youth-Centric, Modern.
- **Color Palette:**
  - **Primary:** Navy Blue (`#001f3f`) - Represents Trust/Academic rigor.
  - **Secondary:** Clean White (`#ffffff`) - For clarity and reading.
  - **Accent:** Slate Grey (`#f2f2f2`) - For section backgrounds.
- **Typography:** Sans-serif (Roboto or Inter) for high readability.

---

## 🏗️ Website Architecture (Section by Section)

### 1. Navigation Bar

- **Logo:** Load from `nss img` folder.
- **Brand Name:** "Team Vivekananda"
- **Menu Links:** [Home] [The Problem] [Data Stats] [Voices] [Evidence] [Solution]

### 2. Hero Section

- **Headline:** "Breaking the Barriers"
- **Sub-Headline:** "Analyzing the Gap Between Awareness and Action in Youth Social Responsibility."
- **Context:** "A Yuva Drishti Research Initiative."
- **Visual:** Use a high-quality overlay image from `survey rep` or a clean abstract network background.
- **CTA Button:** "View Full Report" (Placeholder link).

### 3. About the Initiative

- **Content:**
  > [cite_start]"This research was conducted under 'Yuva Drishti', a social research initiative organized by NSS IIPS DAVV in collaboration with SETU[cite: 3, 4]. We investigated why youth feel responsible for social equality but often hesitate to act."

### 4. The Data Dashboard (Interactive Stats)

- **Instruction:** Create an animated counter row.
- **Data Points:**
  - [cite_start]**50** - Respondents Surveyed (In-Person)[cite: 12].
  - [cite_start]**10** - In-Depth Personal Interviews[cite: 110].
  - [cite_start]**95%** - Feel "Strong Responsibility"[cite: 138, 140].
  - [cite_start]**46%** - Stopped by "Fear of Judgment"[cite: 141].

### 5. Key Findings (Card Layout)

- **Card 1: High Intent, Low Action**
  - "While 95% of youth acknowledge their duty, less than 20% actively participate in social initiatives."
- **Card 2: The Fear Factor**
  - [cite_start]"Fear of social judgment and backlash is the #1 barrier, surpassing lack of time or money[cite: 141]."
- **Card 3: Invisible Discrimination**
  - [cite_start]"Youth identified 'Mental Health' and 'Economic Class' as the most ignored forms of inequality[cite: 144, 145]."

### 6. Voices from the Field (Testimonials)

- **Instruction:** Create a sliding carousel using the qualitative interview data.
- **Slide 1 (Service Professional):** "Inclusiveness is a professional requirement, not just a moral choice." — _Cabin Crew Trainee_
- **Slide 2 (Corporate Youth):** "Fear of job security stops many young professionals from raising their voices." — _Sales Executive_
- **Slide 3 (Activist):** "Youth bring energy to challenge traditional beliefs." — _Modern Saheli Member_

### 7. Evidence Gallery ("Ground Zero")

- **Instruction:** Create a Masonry Grid Layout.
- **Source:** Auto-load all images from the **`survey rep`** folder.
- **Features:**
  - Implement a 'Lightbox' effect (click to expand).
  - Add caption: "Team Vivekananda conducting in-person surveys and interviews."

### 8. Our Recommendation

- **Title:** "The Solution: Anonymous Equality Forums"
- **Text:** "To counter the fear of judgment, we propose creating safe, anonymous spaces in colleges where students can discuss social taboos without fear of backlash."

### 9. Footer

- [cite_start]**Credits:** "Submitted to NSS IIPS DAVV"[cite: 31].
- **Team:** List the 4 Team Member Names.
- **Copyright:** © 2026 Team Vivekananda.

---

## ⚙️ Technical Constraints

1.  **Responsiveness:** The site must be fully mobile-responsive (stack columns on mobile).
2.  **Performance:** Optimize images from `survey rep` for web viewing.
3.  **Code Structure:** Clean HTML5, semantic tags, and modular CSS.
