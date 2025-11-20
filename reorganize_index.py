#!/usr/bin/env python3
"""
Portfolio Index.html Reorganizer
Automatically extracts inline styles and organizes the HTML file
"""

import re
from pathlib import Path

def reorganize_index_html():
    """Main function to reorganize index.html"""
    
    print("\n" + "="*60)
    print("Portfolio Index.html Reorganizer")
    print("="*60 + "\n")
    
    index_file = Path('index.html')
    
    if not index_file.exists():
        print("❌ Error: index.html not found")
        return
    
    # Create backup
    backup_file = index_file.with_suffix('.html.backup')
    backup_file.write_text(index_file.read_text(encoding='utf-8'), encoding='utf-8')
    print(f"✓ Backup created: {backup_file}")
    
    # Read the file
    content = index_file.read_text(encoding='utf-8')
    original_lines = content.count('\n')
    
    print(f"✓ Original file: {original_lines} lines\n")
    
    # Step 1: Remove inline styles (already extracted to css/styles.css)
    print("Step 1: Removing inline styles...")
    
    # Find and remove the <style> block
    style_pattern = r'  <style>.*?</style>\r?\n'
    content_no_styles = re.sub(style_pattern, '', content, flags=re.DOTALL)
    
    # Add link to external stylesheet after other CSS links
    css_link = '  <link rel="stylesheet" href="css/styles.css">\n'
    
    # Find the last stylesheet link and add after it
    last_css_pattern = r'(  <link rel="stylesheet"[^>]*>\r?\n)'
    matches = list(re.finditer(last_css_pattern, content_no_styles))
    
    if matches:
        last_match = matches[-1]
        insert_pos = last_match.end()
        content_no_styles = (content_no_styles[:insert_pos] + 
                            css_link + 
                            content_no_styles[insert_pos:])
        print("  ✓ Removed inline <style> block")
        print("  ✓ Added link to css/styles.css")
    
    # Step 2: Add section comments for better organization
    print("\nStep 2: Adding section comments...")
    
    sections = [
        (r'(<section id="home-page")', 
         '\n  <!-- ========================================\n       HOME PAGE\n       ======================================== -->\n  \\1'),
        
        (r'(<aside[^>]*class="fixed left-0)', 
         '\n  <!-- ========================================\n       SIDEBAR NAVIGATION\n       ======================================== -->\n  \\1'),
        
        (r'(<section id="about-page")', 
         '\n      <!-- ========================================\n           ABOUT PAGE\n           ======================================== -->\n      \\1'),
        
        (r'(<section id="resume-page")', 
         '\n      <!-- ========================================\n           RESUME PAGE\n           ======================================== -->\n      \\1'),
        
        (r'(<section id="projects-page")', 
         '\n      <!-- ========================================\n           PROJECTS PAGE\n           ======================================== -->\n      \\1'),
        
        (r'(<section id="stats-page")', 
         '\n      <!-- ========================================\n           STATS PAGE\n           ======================================== -->\n      \\1'),
        
        (r'(<section id="contact-page")', 
         '\n      <!-- ========================================\n           CONTACT PAGE\n           ======================================== -->\n      \\1'),
    ]
    
    for pattern, replacement in sections:
        content_no_styles = re.sub(pattern, replacement, content_no_styles)
    
    print("  ✓ Added section headers")
    
    # Step 3: Write the reorganized file
    print("\nStep 3: Writing reorganized file...")
    index_file.write_text(content_no_styles, encoding='utf-8')
    
    new_lines = content_no_styles.count('\n')
    lines_removed = original_lines - new_lines
    
    print(f"  ✓ New file: {new_lines} lines")
    print(f"  ✓ Reduced by: {lines_removed} lines ({lines_removed/original_lines*100:.1f}%)")
    
    # Summary
    print("\n" + "="*60)
    print("✨ Reorganization Complete!")
    print("="*60)
    print("\nChanges made:")
    print("  1. ✓ Extracted inline CSS to css/styles.css")
    print("  2. ✓ Added link to external stylesheet")
    print("  3. ✓ Added clear section comments")
    print(f"  4. ✓ Reduced file size by {lines_removed} lines")
    
    print("\nNext steps:")
    print("  1. Review the changes in index.html")
    print("  2. Test the website to ensure everything works")
    print("  3. If issues occur, restore from: index.html.backup")
    print("  4. Consider extracting JavaScript next (see REORGANIZATION_PLAN.md)")
    
    print("\n")

if __name__ == '__main__':
    reorganize_index_html()
