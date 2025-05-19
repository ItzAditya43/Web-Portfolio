function injectHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  injectHTML("header", "components/header.html");
  injectHTML("sidebar", "components/sidebar.html");
  injectHTML("footer", "components/footer.html");
});
