#!/usr/bin/env python3
"""
Portfolio Enhancement Auto-Installer
This script automatically adds enhancements to your portfolio website
"""

import re
from pathlib import Path

def backup_file(filepath):
    """Create a backup of the original file"""
    backup_path = filepath.with_suffix(filepath.suffix + '.backup')
    backup_path.write_text(filepath.read_text(encoding='utf-8'), encoding='utf-8')
    print(f"✓ Backup created: {backup_path}")
    return backup_path

def add_enhancements_css(html_content):
    """Add enhancements.css link to head"""
    css_link = '  <link rel="stylesheet" href="css/enhancements.css">\n'
    
    # Find the last stylesheet link
    pattern = r'(<link rel="stylesheet"[^>]*>)'
    matches = list(re.finditer(pattern, html_content))
    
    if matches:
        last_match = matches[-1]
        insert_pos = last_match.end()
        html_content = html_content[:insert_pos] + '\n' + css_link + html_content[insert_pos:]
        print("✓ Added enhancements.css link")
    
    return html_content

def add_structured_data(html_content):
    """Add JSON-LD structured data"""
    structured_data = '''
  <!-- Structured Data (JSON-LD) for SEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arun V",
    "url": "https://arunvithyasegar.com",
    "image": "https://arunvithyasegar.com/icon.png",
    "jobTitle": "Business & Data Analyst",
    "worksFor": {
      "@type": "Organization",
      "name": "Agathium"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vellore",
      "addressCountry": "India"
    },
    "email": "hi@arunvithyasegar.com",
    "sameAs": [
      "https://github.com/arunv8055",
      "https://linkedin.com/in/varun7582",
      "https://instagram.com/arunvithyasegar",
      "https://wellfound.com/u/arun-vithyasegar"
    ],
    "knowsAbout": ["SQL", "Python", "Power BI", "Data Analysis", "Business Intelligence", "Machine Learning"],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Tamil Nadu Agricultural University"
    }
  }
  </script>
'''
    
    # Add before </head>
    html_content = html_content.replace('</head>', structured_data + '\n</head>')
    print("✓ Added structured data (JSON-LD)")
    
    return html_content

def add_page_loader(html_content):
    """Add page loader HTML"""
    loader_html = '''
  <!-- Page Loader -->
  <div class="page-loader">
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <div class="loader-text">Loading...</div>
    </div>
  </div>

  <!-- Skip to Content (Accessibility) -->
  <a href="#main-content" class="skip-to-content">Skip to main content</a>

  <!-- Reading Progress Bar -->
  <div id="reading-progress" style="width: 0%"></div>

'''
    
    # Add after <body>
    html_content = html_content.replace('<body', loader_html + '<body', 1)
    print("✓ Added page loader and accessibility features")
    
    return html_content

def add_scroll_to_top(html_content):
    """Add scroll to top button"""
    button_html = '''
  <!-- Scroll to Top Button -->
  <button id="scroll-to-top" aria-label="Scroll to top">
    <i class="fas fa-arrow-up"></i>
  </button>

'''
    
    # Add before </body>
    html_content = html_content.replace('</body>', button_html + '</body>')
    print("✓ Added scroll-to-top button")
    
    return html_content

def add_enhancements_js(html_content):
    """Add enhancements.js script"""
    script_tag = '  <script src="js/enhancements.js"></script>\n'
    
    # Add before </body>
    html_content = html_content.replace('</body>', script_tag + '</body>')
    print("✓ Added enhancements.js script")
    
    return html_content

def add_aria_labels(html_content):
    """Add ARIA labels to sections"""
    replacements = [
        (r'<section id="home-page"([^>]*)>', r'<section id="home-page"\1 role="main" aria-label="Home page">'),
        (r'<aside([^>]*)class="fixed left-0', r'<aside\1role="complementary" aria-label="Sidebar navigation" class="fixed left-0'),
        (r'<nav class="mb-8">', r'<nav class="mb-8" aria-label="Main navigation">'),
        (r'<main class="ml-64', r'<main id="main-content" class="ml-64'),
    ]
    
    for pattern, replacement in replacements:
        html_content = re.sub(pattern, replacement, html_content)
    
    print("✓ Added ARIA labels for accessibility")
    
    return html_content

def main():
    """Main function to run all enhancements"""
    print("\n" + "="*50)
    print("Portfolio Enhancement Auto-Installer")
    print("="*50 + "\n")
    
    # Get the index.html file
    index_file = Path('index.html')
    
    if not index_file.exists():
        print("❌ Error: index.html not found in current directory")
        print("   Please run this script from your portfolio root directory")
        return
    
    # Create backup
    print("\n📦 Creating backup...")
    backup_file(index_file)
    
    # Read the file
    print("\n📖 Reading index.html...")
    html_content = index_file.read_text(encoding='utf-8')
    
    # Apply enhancements
    print("\n🚀 Applying enhancements...\n")
    
    html_content = add_enhancements_css(html_content)
    html_content = add_structured_data(html_content)
    html_content = add_page_loader(html_content)
    html_content = add_scroll_to_top(html_content)
    html_content = add_enhancements_js(html_content)
    html_content = add_aria_labels(html_content)
    
    # Write the updated file
    print("\n💾 Writing updated index.html...")
    index_file.write_text(html_content, encoding='utf-8')
    
    print("\n" + "="*50)
    print("✨ Enhancements successfully applied!")
    print("="*50)
    print("\nNext steps:")
    print("1. Review the changes in index.html")
    print("2. Test the website locally")
    print("3. Check browser console for any errors")
    print("4. Run Lighthouse audit for performance")
    print("5. Test accessibility features")
    print("\nIf anything goes wrong, restore from: index.html.backup")
    print("\n")

if __name__ == '__main__':
    main()
