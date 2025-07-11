Project Goal:

Build a cutting-edge, professional freelance portfolio website for Nathakrit Chuajeen. The website should combine the minimalist aesthetic and advanced interactivity of toukoum.fr with the clear, structured content presentation of allanim.com.

Core Requirements & Technology Stack:



Frontend Framework: React

Animation & Interactivity: Framer Motion (for page transitions and UI animations) and Three.js / React Three Fiber (for subtle background effects).

Hosting: Firebase Hosting

File Storage: Firebase Storage (for resume PDF and project images)

Styling: Styled Components or CSS Modules.

Responsiveness: Must be fully responsive and optimized for a seamless experience on desktop, tablet, and mobile.

Design & Aesthetics:



Overall Style: Highly modern, minimalist, clean, and interactive. Dark-themed.

Color Palette:

Primary Background: A very dark navy blue or near-black (e.g., #0A192F).

Primary Text: White (#FFFFFF).

Accent Color (for buttons, links, highlights): A bright, energetic cyan or teal (e.g., #64FFDA).

Typography:

Headings: A bold, clean, sans-serif font like 'Poppins' or 'Montserrat'.

Body Text: A highly readable sans-serif font like 'Inter' or 'Lato'.

Key Interactive Features (Inspired by toukoum.fr):



Pre-loader: The site should open with a full-screen loading animation that counts from 0% to 100% before revealing the main content.

Custom Mouse Cursor: Implement a custom dot or circle cursor that subtly reacts to hovering over links.

Magnetic Buttons: Links and buttons should have a "magnetic" effect, pulling the mouse cursor towards them slightly when hovering nearby.

Page Transitions: Use Framer Motion to create smooth, fast transitions between pages (e.g., a quick fade or a slide effect).

Website Pages & Structure (Inspired by allanim.com):

Please build the following pages as separate components:

1.  Global Components:

* Navbar: A minimal header with links: Services, Portfolio, About, Contact.

* Footer: Simple and clean. Include "Nathakrit Chuajeen © 2025" and links to LinkedIn/GitHub (use placeholders).

2.  Home Page (/)

* Layout: A full-screen "hero" section that takes up the entire viewport.

* Background: Use React Three Fiber to create a subtle, abstract, slowly animating background effect (like floating particles or soft geometric shapes).

* Content: Display my name, "Nathakrit Chuajeen," and my professional title, "Creative Developer & AI Specialist," in large, impactful typography.

3.  Services Page (/services)

* Layout: A clean, 3-column grid of "Service Cards" on a new page.

* Content: Each card should represent one of my core offerings with an icon and title:

* Card 1: AI & Machine Learning Solutions

* Card 2: Full-Stack Web Applications

* Card 3: Custom Desktop Applications

4.  Portfolio Page (/portfolio)

* Layout: A structured 2-column grid of projects.

* Hover Effect: When hovering over a project, the image should have a subtle distortion or zoom effect, and the project title should appear clearly.

* Content: Each grid item is a "Project Card" with a placeholder for an image and a title. Clicking it should navigate to a detailed case study page.

5.  Case Study Detail Page (Dynamic Route: /portfolio/:projectId)

* A template page to display project details with clear headings: "The Challenge," "The Solution," "The Result," and "Technologies Used." Use placeholder text.

6.  About Page (/about)

* A simple, clean layout with a paragraph of placeholder text for my professional biography.

7.  Contact Page (/contact)

* Heading: "Let's build something great together."

* Email: Prominently display my email: nathakrit.cha@gmail.com. Make it a clickable mailto: link.

* Call to Action: Include a message like "Feel free to reach out for project inquiries or collaborations."

Final Deliverable:

A complete React project with all components, pages, and animations configured. The project should be ready for me to add my final text/images and deploy. Include a README.md file with instructions on how to run the project and deploy it to Firebase.