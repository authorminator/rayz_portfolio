// Portfolio Content Configuration
// Edit this file to update your portfolio information

const portfolioContent = {
  // Personal Information
  personal: {
    name: "Rayz Arain",
    title: "Professional Web Developer",
    description:
      "Crafting exceptional digital experiences with precision, creativity, and attention to detail.",
    profileIcon: "👤", // You can change this to any emoji or remove for an image
  },

  // Navigation Menu
  navigation: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" },
  ],

  // Hero Section Buttons
  heroButtons: [
    { text: "View My Work", href: "#portfolio", type: "primary" },
    { text: "Get In Touch", href: "#contact", type: "secondary" },
  ],

  // About Section
  about: {
    title: "About Me",
    intro:
      "With over a year of experience in web development, I provide services in creating sophisticated, user-centered digital solutions that drive business success.",
    description:
      "My expertise spans across modern web technologies, with a particular focus on responsive design, performance optimization, and accessibility. I believe in the power of clean code, thoughtful design, and collaborative problem-solving.",

    // Skills organized by category
    skills: [
      {
        category: "Web Development",
        technologies:
          "Ruby on Rails, React, Vue.js, Node.js, Express.js, Git, PostgreSQL",
      },
      {
        category: "Programming Languages",
        technologies: "Ruby, Python, HTML5, CSS3, JavaScript, TypeScript",
      },
      {
        category: "Competencies",
        technologies:
          "Responsive Design, Prototyping, Web Application Development, Teaching, Team Collaboration",
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Portfolio",
    description:
      "A selection of my recent work showcasing various skills and technologies.",

    // Projects array - add/remove/edit projects here
    projects: [
      {
        title: "StudyHive",
        description:
          "Make learning easier by doing it with other people rather than alone.",
        icon: "💻",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://www.studyhive.org/",
      },
      {
        title: "Super Hero Academy",
        description:
          "A fictional marketplace app about people trying to learn Super Powers.",
        icon: "🦸‍♂️",
        technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus js", "Heroku"],
        link: "https://super-hero-academy-1c8a93bbc04f.herokuapp.com/",
      },
      {
        title: "Eigo-Park",
        description: "An app of educational games for elementary school kids.",
        icon: "📔",
        technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
        link: "https://eigo-park.netlify.app/",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description:
      "Ready to start your next project? Let's discuss how we can work together.",

    // Contact Information
    info: [
      {
        type: "Email",
        value: "araingulraiz@gmail.com",
        icon: "📧",
      },
      {
        type: "Phone",
        value: "+81 (90) 5426-8297",
        icon: "📱",
      },
      {
        type: "Location",
        value: "Tokyo, Japan",
        icon: "📍",
      },
    ],

    // Contact Form Configuration
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "subject", label: "Subject", type: "text", required: true },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          rows: 5,
        },
      ],
      submitText: "Send Message",
      successMessage:
        "Thank you for your message! I will get back to you soon.",
    },
  },

  // Footer Section
  footer: {
    copyright: "© 2025 Rayz Arain. All rights reserved.",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/rayz-arain/" },
      { name: "GitHub", url: "https://github.com/authorminator" },
    ],
  },
};

// Make the content available globally
window.portfolioContent = portfolioContent;
