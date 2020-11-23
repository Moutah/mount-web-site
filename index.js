import "normalize.css";
import "./css/about.css";
import "./css/animations.css";
import "./css/logo.css";
import "./css/style.css";
import "./css/swiss-flag.css";

(() => {
  function substituteEmail() {
    const placeholder = document.getElementById("mail-placeholder");
    const mailIcon = placeholder.querySelector(".bi-envelope");
    placeholder.innerHTML = `<a href="mailto:hello@mountweb.ch">${mailIcon.outerHTML} hello@mountweb.ch</a>`;
  }

  function printConsoleWelcome() {
    const padding = 40;
    const width = 128;
    const height = width * (283.717 / 420);
    const svg = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 302 204"  xml:space="preserve">
      <g id="filled">
          <polyline id="back" points="135,87.6 185,1 301,201.912 201,201.912" fill="#103980"></polyline>
          <polyline id="front" points="1,201.912 101,28.712 201,201.912" fill="#5B82C4"></polyline>
      </g>
    </svg>
    `;
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

    console.log(
      "%c %cMount Web",
      ` background-image: url(${svgDataUrl});
        line-height: ${height + padding}px;
        padding: ${0.5 * height}px ${0.5 * width}px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      `,
      ` margin-left: 2rem;
        line-height: ${height + padding}px;
        font-size: 52px;
        font-family: 'Merriweather Sans', sans-serif;
      `
    );
  }

  printConsoleWelcome();

  window.onload = substituteEmail;
})();
