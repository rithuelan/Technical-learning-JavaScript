function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("Data fetched!"), 1000));
}

async function getData() {
  const data = await fetchData(); // wait for the promise to resolve
  console.log(data);
}

getData();
