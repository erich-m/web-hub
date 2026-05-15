# Portfolio CMS Documentation

This portfolio uses a JavaScript-based Content Management System (CMS) to make it easy to update skills and contact information without editing HTML.

## How to Modify Skills

The skills are stored in the `cms.js` file in the `cmsData.skills` array. Each skill category has:

- `id`: Unique identifier
- `title`: Display name
- `order`: Number for sorting categories
- `skills`: Array of individual skills with `name`, `level`, and `order`

### Expertise Levels
Skills are automatically grouped by expertise level in collapsible dropdowns:
- `expert`: Green indicator - Advanced proficiency
- `advanced`: Light green indicator - Solid working knowledge
- `intermediate`: Yellow indicator - Moderate experience
- `beginner`: Red indicator - Basic/familiarity level

### Current Categories
- **Programming Languages**: Core languages
- **Libraries & Frameworks**: Development tools and libraries
- **Tools & Platforms**: Combined tools, platforms, and areas of expertise

### Example: Adding a New Skill Category
```javascript
{
  id: "new-category",
  title: "New Category",
  order: 5,
  skills: [
    { name: "New Skill", level: "intermediate", order: 1 }
  ]
}
```

### Example: Adding a Skill to Existing Category
Find the category in `cmsData.skills` and add to its `skills` array:
```javascript
{ name: "New Skill", level: "beginner", order: 13 }
```

## How to Modify Contact Information

Contact items are stored in `cmsData.contact` array. Each contact has:

- `id`: Unique identifier
- `title`: Display name (e.g., "Email", "Phone")
- `value`: Display text
- `href`: Link URL
- `order`: Number for sorting

### Example: Adding New Contact Method
```javascript
{
  id: "twitter",
  title: "Twitter",
  value: "@yourhandle",
  href: "https://twitter.com/yourhandle",
  order: 6
}
```

## How to Update Content

1. Open `cms.js` in a text editor
2. Modify the `cmsData` object as needed
3. Save the file
4. Refresh your browser to see changes

## Advanced Usage

You can also modify content programmatically using the browser console:

```javascript
// Update skills
CMS.updateSkills(newSkillsArray);

// Update contact
CMS.updateContact(newContactArray);

// Access current data
console.log(CMS.data);
```

## Visual Features

- **Dropdown Organization**: Skills are grouped by expertise level in collapsible sections
- **Color Indicators**: Each expertise level has a distinct color dot
- **Responsive Design**: Layout adapts to mobile devices
- **Custom Fonts**: Uses your site's custom font families

## File Structure
- `index.html`: Main HTML structure
- `styles/stylesheet.css`: All styling
- `cms.js`: Content management system
- `assets/`: Images and fonts
  id: "twitter",
  title: "Twitter",
  value: "@yourhandle",
  href: "https://twitter.com/yourhandle",
  order: 6
}
```

## How to Update Content

1. Open `cms.js` in a text editor
2. Modify the `cmsData` object as needed
3. Save the file
4. Refresh your browser to see changes

## Advanced Usage

You can also modify content programmatically using the browser console:

```javascript
// Update skills
CMS.updateSkills(newSkillsArray);

// Update contact
CMS.updateContact(newContactArray);

// Access current data
console.log(CMS.data);
```

## File Structure
- `index.html`: Main HTML structure
- `styles/stylesheet.css`: All styling
- `cms.js`: Content management system
- `assets/`: Images and fonts