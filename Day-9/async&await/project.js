// Simulate fetching a product
function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    const products = {1: "Laptop", 2: "Phone", 3: "Tablet"};
    setTimeout(() => {
      products[id] ? resolve(products[id]) : reject("Product not found");
    }, 1000);
  });
}

// Simulate fetching the price of a product
function fetchPrice(product) {
  return new Promise((resolve) => {
    const prices = {Laptop: 1000, Phone: 500, Tablet: 700};
    setTimeout(() => resolve(prices[product]), 500);
  });
}

// Async function with await, error handling, and concurrency
async function shopDemo() {
  try {
    // Single product fetch
    const product = await fetchProduct(1);
    const price = await fetchPrice(product);
    console.log(`Product: ${product}, Price: $${price}`);

    // Multiple products concurrently
    const products = await Promise.all([fetchProduct(1), fetchProduct(2), fetchProduct(3)]);
    const prices = await Promise.all(products.map(fetchPrice));
    console.log("All Products:", products);
    console.log("All Prices:", prices);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Shop Demo Finished!");
  }
}

// Run the project
shopDemo();
