# arunvithyasegar.github.io

This repository hosts the source code for [arunvithyasegar.com](https://arunvithyasegar.com/), a personal website showcasing my professional experience, skills, projects, and contact information.

## Website Overview

- **Homepage (`index.html`)**: Main landing page featuring an overview of my professional profile.
- **Resume (`resume.html`)**: Detailed information about my education, work experience, and skills.
- **Portfolio (`portfolio.json`)**: JSON file containing data about my projects, utilized by `generate_portfolio.py` to dynamically generate the portfolio section.

## Project Structure

- **`index.html`**: Main HTML file for the homepage.
- **`resume.html`**: HTML file detailing my resume.
- **`generate_portfolio.py`**: Python script that processes `portfolio.json` to generate the portfolio section on the website.
- **`portfolio.json`**: JSON file containing project data for the portfolio section.
- **`requirements.txt`**: Lists Python dependencies required to run `generate_portfolio.py`.
- **`favicon.ico`**: Website favicon.
- **`robots.txt`**: Instructions for web crawlers about indexing the site.
- **`.github/workflows/`**: Directory containing workflow configurations for continuous integration and deployment.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (for generating the portfolio section)
- **Hosting**: GitHub Pages

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arunvithyasegar/arunvithyasegar.github.io.git
   ```

1. **Navigate to the project directory**:

   ```bash
   cd arunvithyasegar.github.io
   ```

1. **Install Python dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

1. **Generate the portfolio section**:

   ```bash
   python generate_portfolio.py
   ```

   This command processes `portfolio.json` and updates `index.html` with the latest project information.

## License

This project is licensed under the [MIT License](LICENSE).
```
