(() => {
  console.log("hello world");

  function substituteEmail() {
    const placeholder = document.getElementById("mail-placeholder");
    placeholder.innerHTML = `<a href="mailto:hello@mountweb.ch">hello@mountweb.ch</a>`;
  }

  window.onload = substituteEmail;
})();
