const searchInput = document.getElementById("search");

function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function search(query) {
  console.log("Searching for:", query);
}

searchInput.addEventListener("input", debounce((e) => {
  search(e.target.value);
}, 500));
