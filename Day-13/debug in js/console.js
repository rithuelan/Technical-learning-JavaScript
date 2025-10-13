// 1. Log messages
console.log("Hello, World!");

// 2. Warnings
console.warn("This is a warning!");

// 3. Errors
console.error("This is an error!");

// 4. Info messages
console.info("Information about app");

// 5. Display objects in table format
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.table(users);
// 6. Grouping messages
console.group("User Details");
console.log("Name: Alice, Age: 25");
console.log("Name: Bob, Age: 30");
console.groupEnd();
// 7. Timing code execution
console.time("Array Loop");
const arr = Array.from({ length: 1000 }, (_, i) => i);
arr.forEach(num => num * 2);
console.timeEnd("Array Loop");

// 8. Assertions
console.assert(1 === 2, "This will log because the assertion is false");
console.assert(1 === 1, "This will not log because the assertion is true");
// 9. Clear console
// console.clear(); // Uncomment to clear the console
// 10. Trace function calls
function a() {
    b();
}
function b() {
    c();
}
function c() {
    console.trace("Trace function calls");
}
a();
// 11. Counting occurrences
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");

// 12. Styled logging
console.log("%cStyled Text", "color: blue; font-size: 20px; background-color: yellow;");
console.log("%cAnother Styled Text", "color: white; font-size: 16px; background-color: black; padding: 5px;");
console.log("%cImportant!", "color: red; font-weight: bold; font-size: 18px;");
console.log("%cNote:", "color: green; font-style: italic; font-size: 14px;");
console.log("%cDebugging", "color: purple; text-decoration: underline; font-size: 22px;");
console.log("%cSuccess!", "color: white; background-color: green; font-size: 20px; padding: 5px;");
console.log("%cWarning!", "color: black; background-color: orange; font-size: 20px; padding: 5px;");
console.log("%cError!", "color: white; background-color: red; font-size: 20px; padding: 5px;");
console.log("%cInfo:", "color: blue; font-size: 16px; font-weight: bold;");
console.log("%cDebug Log", "color: gray; font-size: 14px; font-style: italic;");
console.log("%cCustom Message", "color: teal; font-size: 18px; background-color: lightgray; padding: 5px;");

// 13. Log with multiple styles
console.log("%cMulti-styled %ctext", "color: red; font-size: 20px;", "color: blue; font-size: 20px; font-weight: bold;");
console.log("%cFirst Part %cSecond Part %cThird Part", "color: green; font-size: 16px;", "color: orange; font-size: 16px; font-weight: bold;", "color: purple; font-size: 16px; text-decoration: underline;");

// 14. Log with background colors
console.log("%cBackground Yellow", "background-color: yellow; color: black; font-size: 18px; padding: 5px;");
console.log("%cBackground Blue", "background-color: blue; color: white; font-size: 18px; padding: 5px;");
