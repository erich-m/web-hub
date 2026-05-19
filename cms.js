// CMS System for Skills, Contact, and Support Page Content
// This allows easy modification of content without editing HTML

const cmsData = {
  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      order: 1,
      skills: [
        { name: "Python", level: "expert", order: 1},
        { name: "Java", level: "expert", order: 2},
        { name: "Assembly Language", level: "expert", order: 3},
        { name: "VHDL", level: "expert", order: 4},
        { name: "C Programming", level: "advanced", order: 5},
        { name: "JavaScript", level: "advanced", order: 6},
        { name: "HTML/CSS", level: "advanced", order: 7},
        { name: "TypeScript", level: "advanced", order: 8},
        { name: "Linux/Unix Shell", level: "advanced", order: 9},
        { name: "Powershell", level: "advanced", order: 10},
        { name: "R", level: "intermediate", order: 11},
        { name: "SQL", level: "intermediate", order: 12},
        { name: "C++", level: "beginner", order: 13},
        { name: "C#", level: "beginner", order: 14},
        { name: "MATLAB", level: "beginner", order: 15},
        { name: "LabVIEW", level: "beginner", order: 16},
        { name: "Dart", level: "beginner", order: 17}
      ]
    },
    {
      id: "frameworks",
      title: "Libraries & Frameworks",
      order: 2,
      skills: [
        { name: "PyTorch", level: "expert", order: 1},
        { name: "Scikit", level: "expert", order: 2},
        { name: "NumPy", level: "expert", order: 3},
        { name: "Pandas", level: "expert", order: 4},
        { name: "Matplotlib", level: "expert", order: 5},
        { name: "Seaborn", level: "expert", order: 6},
        { name: "SciPy", level: "expert", order: 7},
        { name: "XGBoost", level: "expert", order: 8},
        { name: "YOLO", level: "expert", order: 9},
        { name: "TensorFlow", level: "advanced", order: 10},
        { name: "OpenCV", level: "advanced", order: 11},
        { name: "ONNX", level: "advanced", order: 12},
        { name: "Pillow", level: "advanced", order: 13},
        { name: "Node", level: "advanced", order: 14},
        { name: "Tauri", level: "advanced", order: 15},
        { name: "Apache", level: "intermediate", order: 16},
        { name: "FreeRTOS", level: "intermediate", order: 17},
        { name: "React", level: "intermediate", order: 18}
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      order: 3,
      skills: [
        { name: "Machine Learning", level: "expert", order: 1 },
        { name: "Real-Time Systems", level: "expert", order: 2 },
        { name: "Linux (general)", level: "expert", order: 3},
        { name: "Jira", level: "expert", order: 4},
        { name: "FPGA (Xilinx)", level: "expert", order: 5},
        { name: "SCANeR Studio", level: "expert", order: 6},
        { name: "VS Code", level: "expert", order: 7},
        { name: "Vim", level: "expert", order: 8},
        { name: "Nano", level: "expert", order: 9},
        { name: "Ubuntu", level: "advanced", order: 10},
        { name: "Fedora", level: "advanced", order: 11},
        { name: "WSL", level: "advanced", order: 12},
        { name: "RTOS", level: "advanced", order: 13},
        { name: "Embedded Hardware", level: "advanced", order: 14},
        { name: "Arduino", level: "advanced", order: 15},
        { name: "Tailscale", level: "advanced", order: 16},
        { name: "Wireguard", level: "advanced", order: 17},
        { name: "SSH Tunnelling", level: "advanced", order: 18},
        { name: "SolidWorks", level: "advanced", order: 19},
        { name: "Inventor", level: "advanced", order: 20},
        { name: "Azure Cognitive Services", level: "advanced", order: 21 },
        { name: "Azure Functions", level: "advanced", order: 22 },
        { name: "VirtualBox", level: "advanced", order: 23 },
        { name: "Oracle Cloud VM", level: "advanced", order: 24 },
        { name: "Data Pipelines", level: "advanced", order: 25 },
        { name: "Computer Vision", level: "advanced", order: 26 },
        { name: "Digital Logic", level: "advanced", order: 27 },
        { name: "Network Configuration", level: "advanced", order: 28 },
        { name: "Microsoft Azure", level: "advanced", order: 29},
        { name: "Github Actions", level: "advanced", order: 30},
        { name: "Git", level: "advanced", order: 31},
        { name: "Github", level: "advanced", order: 32},
        { name: "Confluence", level: "advanced", order: 33},
        { name: "ChatGPT", level: "advanced", order: 34},
        { name: "Claude", level: "advanced", order: 35},
        { name: "Gemini", level: "advanced", order: 36},
        { name: "Copilot", level: "advanced", order: 37},
        { name: "Apache Spark", level: "intermediate", order: 38 },
        { name: "Apache Hadoop", level: "intermediate", order: 39 },
        { name: "AWS", level: "intermediate", order: 40},
        { name: "Docker", level: "intermediate", order: 41},
        { name: "GitKraken", level: "intermediate", order: 42},
        { name: "ESP32", level: "intermediate", order: 43},
        { name: "PostgreSQL", level: "intermediate", order: 44},
        { name: "Supabase", level: "intermediate", order: 45},
        { name: "Cadence", level: "intermediate", order: 46},
        { name: "Android Studio", level: "intermediate", order: 47},
        { name: "FreeCAD", level: "intermediate", order: 48},
        { name: "AutoCAD", level: "intermediate", order: 49},
        { name: "STM32", level: "beginner", order: 50},
        { name: "ROS/ROS2", level: "beginner", order: 51},
        { name: "Simulink", level: "beginner", order: 52},
        { name: "Firebase", level: "beginner", order: 53}
      ]
    }
  ],

  contact: [
    {
      id: "email",
      title: "Email",
      value: "erich.m.maclean@gmail.com",
      href: "mailto:erich.m.maclean@gmail.com",
      order: 1
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/erich-maclean",
      href: "https://www.linkedin.com/in/erich-maclean-575549193",
      order: 2
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/erich-m",
      href: "https://github.com/erich-m",
      order: 3
    }
  ],

  supportPage: {
    hero: {
      title: "Local Tech Repair & On-Site Support",
      description: "Kitchener-Waterloo based computer support for homes and small offices. Reliable repair, software setup, hardware maintenance, and patient training to keep your devices running smoothly.",
      ctaPrimary: { text: "Book Support", href: "#contact" },
      ctaSecondary: { text: "View Services", href: "#services" }
    },
    about: [
      "Hi! I am Erich, a local Kitchener-Waterloo computer engineer offering practical on-site and in-home technology support. I keep service friendly and easy to follow so you understand what’s happening with your devices.",
      "I focus on customer satisfaction above all else, with a teaching-oriented approach that solves problems, protects your equipment, and helps you feel confident using your technology."
    ],
    services: [
      {
        id: "general-tech",
        title: "General Tech Support",
        description: "On-site troubleshooting, repair, and preventive maintenance for computers, laptops, and connected devices. I diagnose hardware and software issues, restore reliable performance, and keep the process straightforward."
      },
      {
        id: "software-install",
        title: "Software Installation & Virus Scanning",
        description: "Software setup, updates, security scanning, and performance tuning. I install the right tools, remove unwanted apps, and make sure your system stays clean and secure."
      },
      {
        id: "custom-solutions",
        title: "Custom Hardware & Software Solutions",
        description: "Custom support for tailored hardware and software needs — from device integration and upgrades to practical small-office technology setups."
      }
    ],
    pricing: {
      title: "Fair, flexible pricing for local support",
      description: "Local visits start at $35 per visit, with a focus on fair value, clear communication, and practical service that fits your needs.",
      options: [
        {
          title: "Standard Visit",
          detail: "Minimum $35 per visit for diagnostics, repairs, and software setup. Ideal for quick fixes, performance tuning, and straightforward follow-up."
        },
        {
          title: "Maintenance Check",
          detail: "Preventive service for cleaning, system checks, and stability updates to keep your devices running reliably."
        },
        {
          title: "Custom Support",
          detail: "Custom hardware and software work tailored to your needs, including upgrades, integration, and practical training."
        }
      ],
      note: "Minimum visit pricing applies locally. Quotes are tailored to the work scope — contact me for a clear estimate."
    },
    contact: [
      {
        id: "support-email",
        title: "Email",
        value: "erich.m.maclean@gmail.com",
        href: "mailto:erich.m.maclean@gmail.com",
        order: 1
      },
      {
        id: "support-phone",
        title: "Phone",
        value: "(519) 502-3623",
        href: "tel:+15195023623",
        order: 2
      },
      {
        id: "service-area",
        title: "Service Area",
        value: "Kitchener-Waterloo region: local on-site support for homes and small offices.",
        href: "",
        order: 3
      }
    ]
  }
};

// Function to render skills section
function renderSkills() {
  const skillsContainer = document.querySelector('.skills-content');
  if (!skillsContainer) return;

  const sortedCategories = [...cmsData.skills].sort((a, b) => a.order - b.order);

  skillsContainer.innerHTML = sortedCategories.map(category => {
    const sortedSkills = [...category.skills].sort((a, b) => a.order - b.order);

    const groupedSkills = sortedSkills.reduce((acc, skill) => {
      if (!acc[skill.level]) acc[skill.level] = [];
      acc[skill.level].push(skill);
      return acc;
    }, {});

    const dropdowns = Object.entries(groupedSkills).map(([level, skills]) => {
      const levelLabel = level.charAt(0).toUpperCase() + level.slice(1);
      const skillsList = skills.map(skill => `<span class="skill-item">${skill.name}</span>`).join(' ');

      return `
        <details class="skill-dropdown skill-${level}">
          <summary class="skill-summary" data-umami-event="Skills Navigation->${category.title};${level}">
            <span class="level-indicator"></span>
            <span class="level-text">${levelLabel}</span>
            <span class="skill-count">(${skills.length})</span>
          </summary>
          <div class="skill-details">
            ${skillsList}
          </div>
        </details>
      `;
    }).join('');

    return `
      <div class="skills-category">
        <h3>${category.title}</h3>
        <div class="skill-dropdowns">
          ${dropdowns}
        </div>
      </div>
    `;
  }).join('');
}

function getContactIcon(id) {
  switch (id) {
    case 'email':
      return '<i class="fa-solid fa-envelope"></i>';
    case 'linkedin':
      return '<i class="fa-brands fa-square-linkedin"></i>';
    case 'github':
      return '<i class="fa-brands fa-square-github"></i>';
    case 'support-phone':
      return '<i class="fa-solid fa-phone-volume"></i>';
    case 'service-area':
      return '<i class="fa-solid fa-map-location-dot"></i>';
    default:
      return '<i class="fa-solid fa-circle-info"></i>';
  }
}

// Function to render contact section
function renderContact() {
  const contactContainer = document.querySelector('.contact-content');
  if (!contactContainer) return;

  const sortedContacts = [...cmsData.contact].sort((a, b) => a.order - b.order);

  contactContainer.innerHTML = sortedContacts.map(contact => `
    <div class="contact-item contact-card-${contact.id}">
      <h3>${contact.title}</h3>
      <div class="contact-icon">${getContactIcon(contact.id)}</div>
      <p><a href="${contact.href}" ${contact.href.startsWith('http') ? 'target="_blank"' : ''} data-umami-event="Contact Navigation -> ${contact.title}">${contact.value}</a></p>
    </div>
  `).join('');
}

// Function to render support page hero content
function renderSupportHero() {
  const titleElement = document.querySelector('.support-hero-title');
  const copyElement = document.querySelector('.support-hero-copy');
  const actionsContainer = document.querySelector('.support-hero-actions');
  if (!titleElement || !copyElement || !actionsContainer) return;

  const hero = cmsData.supportPage.hero;

  titleElement.textContent = hero.title;
  copyElement.textContent = hero.description;

  actionsContainer.innerHTML = `
    <li><a href="${hero.ctaPrimary.href}" data-umami-event="Hero Navigation -> ${hero.ctaPrimary.text}">${hero.ctaPrimary.text}</a></li>
    <li><a href="${hero.ctaSecondary.href}" data-umami-event="Hero Navigation -> ${hero.ctaSecondary.text}">${hero.ctaSecondary.text}</a></li>
  `;
}

// Function to render support page about section
function renderSupportAbout() {
  const aboutContainer = document.querySelector('.support-about-content');
  if (!aboutContainer) return;

  aboutContainer.innerHTML = cmsData.supportPage.about.map(paragraph => `<p>${paragraph}</p>`).join('');
}

// Function to render support page services
function renderSupportServices() {
  const servicesContainer = document.querySelector('.support-services');
  if (!servicesContainer) return;

  servicesContainer.innerHTML = cmsData.supportPage.services.map(service => `
    <div class="service-card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

// Function to render support page pricing
function renderSupportPricing() {
  const pricingContainer = document.querySelector('.support-pricing');
  if (!pricingContainer) return;

  pricingContainer.innerHTML = `
    <div class="pricing-summary">
      <h3>${cmsData.supportPage.pricing.title}</h3>
      <p>${cmsData.supportPage.pricing.description}</p>
      <p class="pricing-note">${cmsData.supportPage.pricing.note}</p>
    </div>
    ${cmsData.supportPage.pricing.options.map(option => `
      <div class="price-card">
        <h3>${option.title}</h3>
        <p>${option.detail}</p>
      </div>
    `).join('')}
  `;
}

// Function to render support page contact section
function renderSupportContact() {
  const contactContainer = document.querySelector('.support-contact-grid');
  if (!contactContainer) return;

  const sortedContacts = [...cmsData.supportPage.contact].sort((a, b) => a.order - b.order);

  contactContainer.innerHTML = sortedContacts.map(contact => `
    <div class="support-contact-item contact-card-${contact.id}">
      <h3>${contact.title}</h3>
      <div class="contact-icon">${getContactIcon(contact.id)}</div>
      ${contact.href ? `
        <p><a class="contact-link" href="${contact.href}" ${contact.href.startsWith('http') ? 'target="_blank"' : ''} data-umami-event="Support Contact -> ${contact.title}">${contact.value}</a></p>
      ` : `
        <p class="contact-value">${contact.value}</p>
      `}
    </div>
  `).join('');
}

// Initialize CMS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  renderContact();
  renderSupportHero();
  renderSupportAbout();
  renderSupportServices();
  renderSupportPricing();
  renderSupportContact();
});

// Export functions for external modification
window.CMS = {
  data: cmsData,
  renderSkills: renderSkills,
  renderContact: renderContact,
  renderSupportHero: renderSupportHero,
  renderSupportAbout: renderSupportAbout,
  renderSupportServices: renderSupportServices,
  renderSupportPricing: renderSupportPricing,
  renderSupportContact: renderSupportContact,
  updateSkills: function(newSkills) {
    cmsData.skills = newSkills;
    renderSkills();
  },
  updateContact: function(newContact) {
    cmsData.contact = newContact;
    renderContact();
  },
  updateSupportPage: function(newSupportPage) {
    cmsData.supportPage = newSupportPage;
    renderSupportHero();
    renderSupportAbout();
    renderSupportServices();
    renderSupportPricing();
    renderSupportContact();
  }
};