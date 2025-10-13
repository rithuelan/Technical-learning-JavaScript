function loadScript(url) {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

loadScript("https://example.com/library.js");







<script async src="https://example.com/library.js"></script>
