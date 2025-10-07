function fetchDataWithError() {
  return new Promise((resolve, reject) => setTimeout(() => reject("Fetch failed!"), 1000));
}

async function getDataSafe() {
  try {
    const data = await fetchDataWithError();
    console.log(data);
  } catch (error) {
    console.log("Caught Error:", error);
  } finally {
    console.log("Cleanup tasks always run!");
  }
}

getDataSafe();
