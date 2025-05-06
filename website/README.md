# Baishya Delicious Cake Point Website

This is the source code for the Baishya Delicious Cake Point website.

## GitHub Pages Hosting

This website is configured to be hosted on GitHub Pages.

### How to deploy

1. Create a new repository on GitHub (e.g., `baishya-delicious-cake-point`).
2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. Enable GitHub Pages in the repository settings:
   - Go to **Settings** > **Pages**.
   - Under **Source**, select the `main` branch and `/ (root)` folder.
   - Save the settings.
4. Your website will be published at `https://your-username.github.io/your-repo-name/`.

### Notes

- All internal links and asset references use relative paths, so the site should work correctly on GitHub Pages.
- A `.nojekyll` file is included to prevent GitHub Pages from ignoring files or folders starting with an underscore.

---

## Automatic Deployment

This project includes a GitHub Actions workflow that automatically deploys the site on every push to the `main` branch.

The workflow file is located at `.github/workflows/deploy.yml`.

---

## Contact

For any issues or questions, please contact the site administrator.
