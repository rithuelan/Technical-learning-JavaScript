# 🌐 Web APIs in JavaScript – Understanding Guide

Web APIs are **interfaces provided by browsers** that allow JavaScript to interact with browser features and the user’s device. They are **not part of core JavaScript**, but JS can access them to create dynamic and interactive applications.

---

## 1. What Are Web APIs?

- **Definition:** A Web API is a set of functions and objects provided by browsers to interact with the web environment.
- **Purpose:** To enable features like manipulating the DOM, drawing graphics, accessing location, storing data, and sending notifications.
- **Why use Web APIs?**  
  - Make web pages interactive.  
  - Access device/browser features.  
  - Enhance user experience dynamically.  

---

## 2. Core Web APIs

### a) DOM API (Document Object Model)

- **Purpose:** Access and manipulate HTML elements dynamically.
- **Example Uses:** Changing text, styles, attributes, creating/removing elements.
- **Sample Code:**
```javascript
**const heading = document.getElementById("title");
heading.textContent = "Hello, Web APIs!";
heading.style.color = "blue";
b) Canvas API
Purpose: Draw graphics, shapes, charts, or animations inside the browser.

Example Uses: Games, charts, drawing apps.

Sample Code:

javascript
Copy code
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "skyblue";
ctx.fillRect(20, 20, 150, 100); // Rectangle

ctx.beginPath();
ctx.arc(95, 60, 40, 0, 2 * Math.PI); // Circle
ctx.fillStyle = "orange";
ctx.fill();
c) Geolocation API
Purpose: Get the user’s geographic location.

Example Uses: Maps, location-based services, local weather apps.

Sample Code:

javascript
Copy code
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  (error) => console.error("Error:", error)
);
d) Web Storage API
Purpose: Store and retrieve data in the browser.

Types:

localStorage → Data persists across browser sessions.

sessionStorage → Data clears when the browser/tab closes.

Sample Code:

javascript
Copy code
// Store data
localStorage.setItem("username", "Rithiha");

// Retrieve data
let name = localStorage.getItem("username");
console.log("Stored Name:", name);

// Remove data
localStorage.removeItem("username");
e) Notifications API
Purpose: Send desktop notifications to users.

Example Uses: Alerts, reminders, messaging apps.

Sample Code:

javascript
Copy code
if (Notification.permission === "granted") {
  new Notification("Hello! This is a browser notification.");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Notifications enabled!");
    }
  });
}
3. Practical Project Idea
Project: "Interactive Dashboard App" using Web APIs

DOM API: Show dynamic greeting and date/time.

Canvas API: Draw a simple chart of user data.

Geolocation API: Display user’s current location on the dashboard.

Web Storage API: Save user preferences for theme or settings.

Notifications API: Send reminders or alerts.

This small project combines all Web APIs into a single interactive application.

4. Key Takeaways
Web APIs allow JavaScript to interact with the browser and device.

Each API has a specific use case:

DOM → Dynamic page content.

Canvas → Graphics & animations.

Geolocation → Location data.

Web Storage → Data storage.

Notifications → Alerts & messages.

Always check for browser support before using an API.

Combining multiple APIs creates rich interactive web applications.**

