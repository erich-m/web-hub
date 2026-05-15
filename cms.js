// CMS System for Skills and Contact Sections
// This allows easy modification of content without editing HTML

const cmsData = {
  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      order: 1,
      skills: [
        { name: "Python", level: 	"expert", order: 1},
        { name: "Java", level: 	"expert", order: 2},
        { name: "Assembly Language", level:  "expert", order: 3},	
        { name: "VHDL", level: 	"expert", order: 4},
        { name: "C Programming", level:  "advanced", order: 5},	
        { name: "JavaScript", level: 	"advanced", order: 6},
        { name: "HTML/CSS", level: 	"advanced", order: 7},
        { name: "TypeScript", level: 	"advanced", order: 8},
        { name: "Linux/Unix Shell", level: 	"advanced", order: 9},
        { name: "Powershell", level: 	"advanced", order: 10},
        { name: "R", level: 	"intermediate", order: 11},
        { name: "SQL", level: 	"intermediate", order: 1},
        { name: "C++", level: "beginner", order: 12},	
        { name: "C#", level: "beginner", order: 13},
        { name: "MATLAB", level: 	"beginner", order: 14},
        { name: "LabVIEW", level: 	"beginner", order: 15},
        { name: "Dart", level: 	"beginner", order: 16}
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
        { name: "React", level: "intermediate", order: 18},
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      order: 3,
      skills: [
        { name: "SCANeR Studio", level: "expert", order: 1 },
        { name: "Microsoft Azure", level: "expert", order: 2 },
        { name: "Azure Cognitive Services", level: "expert", order: 3 },
        { name: "Azure Functions", level: "expert", order: 4 },
        { name: "AWS", level: "advanced", order: 5 },
        { name: "Git", level: "expert", order: 6 },
        { name: "Jira", level: "advanced", order: 7 },
        { name: "Apache Spark", level: "intermediate", order: 8 },
        { name: "Apache Hadoop", level: "intermediate", order: 9 },
        { name: "ROS2", level: "advanced", order: 10 },
        { name: "VirtualBox", level: "intermediate", order: 11 },
        { name: "Oracle Cloud VM", level: "advanced", order: 12 },
        { name: "Machine Learning", level: "expert", order: 13 },
        { name: "Embedded Systems", level: "expert", order: 14 },
        { name: "Real-Time Systems", level: "expert", order: 15 },
        { name: "Data Pipelines", level: "expert", order: 16 },
        { name: "Computer Vision", level: "expert", order: 17 },
        { name: "Digital Logic", level: "advanced", order: 18 },
        { name: "FPGA Design", level: "advanced", order: 19 },
        { name: "Big Data", level: "intermediate", order: 20 },
        { name: "Linux Systems Administration", level: "expert", order: 21 },
        { name: "Network Configuration", level: "advanced", order: 22 }
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
      value: "linkedin.com/in/erich-maclean",
      href: "https://linkedin.com/in/erich-maclean",
      order: 2
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/erich-m",
      href: "https://github.com/erich-m",
      order: 3
    }
  ]
};

// Function to render skills section
function renderSkills() {
  const skillsContainer = document.querySelector('.skills-content');
  if (!skillsContainer) return;

  // Sort categories by order
  const sortedCategories = cmsData.skills.sort((a, b) => a.order - b.order);

  skillsContainer.innerHTML = sortedCategories.map(category => {
    // Sort skills within category by order
    const sortedSkills = category.skills.sort((a, b) => a.order - b.order);

    // Group skills by expertise level for better organization
    const groupedSkills = sortedSkills.reduce((acc, skill) => {
      if (!acc[skill.level]) acc[skill.level] = [];
      acc[skill.level].push(skill);
      return acc;
    }, {});

    // Create dropdown sections for each expertise level
    const dropdowns = Object.entries(groupedSkills).map(([level, skills]) => {
      const levelLabel = level.charAt(0).toUpperCase() + level.slice(1);
      const skillsList = skills.map(skill => `<span class="skill-item">${skill.name}</span>`).join(' ');

      return `
        <details class="skill-dropdown skill-${level}">
          <summary class="skill-summary">
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

// Function to render contact section
function renderContact() {
  const contactContainer = document.querySelector('.contact-content');
  if (!contactContainer) return;

  // Sort contact items by order
  const sortedContacts = cmsData.contact.sort((a, b) => a.order - b.order);

  contactContainer.innerHTML = sortedContacts.map(contact => `
    <div class="contact-item">
      <h3>${contact.title}</h3>
      <p><a href="${contact.href}" ${contact.href.startsWith('http') ? 'target="_blank"' : ''}>${contact.value}</a></p>
    </div>
  `).join('');
}

// Initialize CMS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  renderContact();
});

// Export functions for external modification
window.CMS = {
  data: cmsData,
  renderSkills: renderSkills,
  renderContact: renderContact,
  updateSkills: function(newSkills) {
    cmsData.skills = newSkills;
    renderSkills();
  },
  updateContact: function(newContact) {
    cmsData.contact = newContact;
    renderContact();
  }
};