// assets/js/common.js

document.addEventListener("DOMContentLoaded", function() {
    injectHeader();
    injectSidebar();
    injectFooter();
  });
  
  function injectHeader() {
    document.getElementById('header').innerHTML = `
      <header class="header">
        <h1>Aditya's Portfolio</h1>
        <button onclick="window.location.href='index.html'">Home</button>
        <button onclick="window.location.href='about.html'">About</button>
      </header>
    `;
  }
  
  function injectSidebar() {
    document.getElementById('sidebar').innerHTML = `
      <aside class="sidebar">
        <ul>
          <li onclick="window.location.href='index.html'">Home</li>
          <li onclick="window.location.href='about.html'">About Me</li>
          <li onclick="window.location.href='projects.html'">Projects</li>
          <li onclick="window.location.href='contact.html'">Contact</li>
        </ul>
      </aside>
    `;
  }
  
  function injectFooter() {
    document.getElementById('footer').innerHTML = `
      <footer class="footer">
        <p>© 2025 Aditya Pandey. All Rights Reserved.</p>
      </footer>
    `;
  }
  