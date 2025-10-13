self.addEventListener("message", function(e) {
  const data = e.data;
  let result = 0;
  for (let i = 0; i < data; i++) {
    result += i;
  }
  postMessage(result);
});
