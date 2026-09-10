# AGENTS.md

## Project Goal

Build a modern, professional personal portfolio website for Daniil Oliinyk, a Data Science and Artificial Intelligence student at TU Dublin. The main purpose of the website is to showcase my skills, projects, education, and certificates to potential employers and support my future internship applications.

The website should feel like a polished developer portfolio, not a generic template.

## Sources of Information

Use the following sources to gather accurate information about me and my work:

* LinkedIn: https://www.linkedin.com/in/daniil-oliinyk-362b0938a/
* GitHub profile: https://github.com/Danya128
* PaperForge: https://github.com/Danya128/PaperForge
* GazeFix: https://github.com/Danya128/GazeFix

Read my LinkedIn profile to gather information for the About, Education, Skills, Experience sections and etc. . Use the GitHub repositories and their READMEs to understand the projects, technologies, and features.

If LinkedIn cannot be accessed, do not invent personal information. Ask me to provide my profile text or a LinkedIn PDF export. Do not fabricate work experience, qualifications, dates, or project features.

## Design Requirements

* Create a clean, modern, and professional design with an IT/developer-inspired aesthetic.
* Use a dark theme with a carefully chosen accent colour.
* Make the website visually engaging without making it cluttered or overly flashy.
* Use modern typography, consistent spacing, and a clear visual hierarchy.
* Include subtle animations and interactive elements where they improve the user experience.
* The design should be suitable for recruiters and hiring managers reviewing internship candidates.

## Responsive Design

The website must work properly on mobile phones, tablets, laptops, and desktop monitors.

* Use responsive layouts that adapt to different screen sizes.
* Ensure navigation works well on mobile devices.
* Avoid horizontal overflow and overlapping elements.
* Make buttons, links, and interactive elements comfortable to use on touchscreens.
* Ensure text remains readable on smaller screens.
* Respect reduced-motion preferences where appropriate.

## Website Sections

### Home

Create an engaging hero section with my name, a short professional introduction, and clear links to my projects, GitHub, LinkedIn, and contact information.

### About Me

Use my LinkedIn information to write a concise, natural introduction about my education, interests, technical development, and career goals. Keep the tone professional but human.

### Projects

Feature my two main projects:

**PaperForge**
https://github.com/Danya128/PaperForge

**GazeFix**
https://github.com/Danya128/GazeFix

Read each repository's README to understand and accurately describe the project. Include the technologies used, a short description, key features, and a button linking to the GitHub repository.

### Skills

Display my technical skills based on my LinkedIn profile and GitHub projects. Group related skills logically and avoid adding technologies that I have not actually used or studied.

### Education

Include my education at TU Dublin using accurate information from my LinkedIn profile.

### Certificates

Display all relevant certificates from the `certs` folder. Create an attractive certificate gallery or card layout where visitors can view the certificates. Use the actual certificate titles and information where available.

### Contact

Include clear links to my LinkedIn and GitHub profiles, as well as any verified contact information I provide. Do not invent an email address or other personal details.

## Local Assets

The repository contains two important folders:

### `images/`

This folder contains logos for my two projects. Inspect the files and identify which logo belongs to PaperForge and which belongs to GazeFix.

Use the appropriate logo in each project card and connect the card or GitHub button to the correct repository URL. Do not use unrelated placeholder logos when the provided assets are available.

### `certs/`

This folder contains my certificates. Inspect the files and use them to build the Certificates section. Preserve the original files and use descriptive names, titles, and accessible alternative text where possible.

Do not assume filenames or file formats without checking the folder contents.

## Interactivity

Make the website interactive in a meaningful and professional way. Possible features include:

* Smooth section navigation.
* Responsive mobile navigation.
* Subtle hover and focus effects.
* Interactive project cards.
* A certificate gallery with the ability to view certificates in more detail.
* Tasteful scroll-based animations.
* Clear buttons for GitHub, LinkedIn, and project repositories.

Avoid unnecessary animations, excessive effects, or interactions that make the website harder to use.

## Technical and Coding Guidelines

* Inspect the existing repository before choosing or changing the technology stack.
* If the repository is empty or has no established framework, choose a suitable modern frontend stack, such as React with Vite.
* Use reusable components and keep the code modular.
* Separate content/data from presentation where practical.
* Keep styling consistent and maintainable.
* Add comments only where they are useful.
* Avoid unnecessary dependencies and overengineering.
* Use semantic HTML and accessible labels.
* Ensure keyboard navigation and visible focus states work correctly.
* Optimize images and avoid unnecessarily large assets.
* Do not expose secrets or API keys in frontend code.

## Working Process

1. Inspect the repository structure, existing files, images, and certificates.
2. Review the LinkedIn and GitHub sources for accurate content.
3. Propose a suitable website structure and visual direction.
4. Implement the website using reusable components.
5. Connect the correct project logos to their corresponding repositories.
6. Display the certificates using the provided files.
7. Test the website on mobile and desktop screen sizes.
8. Run the available build, lint, or other relevant checks and fix any errors.
9. Summarize what was implemented and explain how to run the website locally.

## Important

Prioritize accuracy, usability, and a polished final result. Do not invent information about my education, experience, certificates, or projects. If important information is missing, use clearly marked placeholders or ask me for the necessary details rather than making assumptions.
