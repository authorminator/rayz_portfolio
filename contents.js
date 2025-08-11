// Portfolio Content Configuration
// Edit this file to update your portfolio information

const portfolioContent = {
    // Personal Information
    personal: {
        name: "John Doe",
        title: "Professional Web Developer",
        description: "Crafting exceptional digital experiences with precision, creativity, and attention to detail.",
        profileIcon: "👤" // You can change this to any emoji or remove for an image
    },

    // Navigation Menu
    navigation: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Portfolio", href: "#portfolio" },
        { text: "Contact", href: "#contact" }
    ],

    // Hero Section Buttons
    heroButtons: [
        { text: "View My Work", href: "#portfolio", type: "primary" },
        { text: "Get In Touch", href: "#contact", type: "secondary" }
    ],

    // About Section
    about: {
        title: "About Me",
        intro: "With over 5 years of experience in web development, I specialize in creating sophisticated, user-centered digital solutions that drive business success.",
        description: "My expertise spans across modern web technologies, with a particular focus on responsive design, performance optimization, and accessibility. I believe in the power of clean code, thoughtful design, and collaborative problem-solving.",
        
        // Skills organized by category
        skills: [
            {
                category: "Frontend Development",
                technologies: "HTML5, CSS3, JavaScript, React, Vue.js"
            },
            {
                category: "Backend Development", 
                technologies: "Node.js, Python, PHP, Database Design"
            },
            {
                category: "Design & UX",
                technologies: "UI/UX Design, Responsive Design, Prototyping"
            },
            {
                category: "Tools & Workflow",
                technologies: "Git, Docker, CI/CD, Agile Methodology"
            }
        ]
    },

    // Portfolio Section
    portfolio: {
        title: "Portfolio",
        description: "A selection of my recent work showcasing various skills and technologies.",
        
        // Projects array - add/remove/edit projects here
        projects: [
            {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with modern design and seamless user experience.",
                icon: "🌐",
                technologies: ["React", "Node.js", "MongoDB"],
                // Optional: add links when available
                // liveUrl: "https://example.com",
                // githubUrl: "https://github.com/username/project"
            },
            {
                title: "Mobile App Dashboard",
                description: "Responsive dashboard interface for mobile application management and analytics.",
                icon: "📱",
                technologies: ["Vue.js", "Chart.js", "REST API"]
            },
            {
                title: "Creative Agency Website",
                description: "Modern, visually striking website for a creative agency with custom animations.",
                icon: "🎨",
                technologies: ["HTML5", "CSS3", "JavaScript"]
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        description: "Ready to start your next project? Let's discuss how we can work together.",
        
        // Contact Information
        info: [
            {
                type: "Email",
                value: "john.doe@email.com",
                icon: "📧"
            },
            {
                type: "Phone", 
                value: "+1 (555) 123-4567",
                icon: "📱"
            },
            {
                type: "Location",
                value: "New York, NY",
                icon: "📍"
            }
        ],

        // Contact Form Configuration
        form: {
            fields: [
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "subject", label: "Subject", type: "text", required: true },
                { name: "message", label: "Message", type: "textarea", required: true, rows: 5 }
            ],
            submitText: "Send Message",
            successMessage: "Thank you for your message! I will get back to you soon."
        }
    },

    // Footer Section
    footer: {
        copyright: "© 2024 John Doe. All rights reserved.",
        socialLinks: [
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" },
            { name: "Twitter", url: "#" }
        ]
    }
};

// Make the content available globally
window.portfolioContent = portfolioContent;

