function fetchNumber(num, delay) {
  return new Promise(resolve => setTimeout(() => resolve(num), delay));
}

async function fetchAllNumbers() {
  const results = await Promise.all([
    fetchNumber(1, 1000),
    fetchNumber(2, 2000),
    fetchNumber(3, 1500)
  ]);
  console.log("All numbers fetched:", results);
}

fetchAllNumbers();
// Concurrency with async/await --- IGNORE ---
// Demonstrates fetching multiple items concurrently using Promise.all with async/await
// Each fetchNumber simulates an asynchronous operation with a delay
// The fetchAllNumbers function waits for all promises to resolve before logging the results
// This approach improves efficiency by running fetches in parallel rather than sequentially
// Output after approximately 2 seconds: All numbers fetched: [1, 2, 3]
// Note: The delays are set to simulate different response times for each fetch