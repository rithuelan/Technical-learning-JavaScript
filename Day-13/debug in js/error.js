try {
  console.log(nonExistentVar); // will throw ReferenceError
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This runs always");
}
