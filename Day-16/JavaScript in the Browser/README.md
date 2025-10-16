1️⃣ DOM (Document Object Model)

Why: To dynamically access and manipulate HTML content and structure in a webpage.

What: The DOM is a tree-like representation of the HTML document where every element, attribute, and text node is an object.

How we use it: We select elements, read or change their content, modify attributes, styles, or even create/remove elements.

Setup & Run: Just open an HTML file in a browser; JavaScript automatically has access to the DOM. Developer tools (F12) can inspect the DOM.

Understanding: Think of the DOM as a bridge between HTML and JS. Without it, JavaScript cannot interact with your page dynamically. Every change to the DOM can update what the user sees.

2️⃣ Events

Why: To make web pages interactive and respond to user actions.

What: Events are actions or occurrences in the browser: clicks, key presses, mouse movement, form submissions, etc.

How we use it: Use event listeners to detect events and trigger functions in response. Can handle user input, navigation, and interaction dynamically.

Setup & Run: Events are available in the browser by default. You attach listeners to HTML elements via JavaScript. Open the page in a browser and interact with elements to trigger events.

Understanding: Events are how the browser notifies JavaScript that something happened. It allows your web app to react in real-time to user actions.

3️⃣ Rendering

Why: To display web content on the screen. Optimizing rendering improves performance and UX.

What: Rendering is the process where the browser converts HTML, CSS, and JS into pixels on the screen.

How we use it: JavaScript can affect rendering by modifying the DOM or styles. Optimizing DOM manipulation reduces reflows and repaints for smoother performance.

Setup & Run: Any HTML page in the browser automatically goes through rendering. Open DevTools → Performance tab to inspect rendering behavior.

Understanding: Rendering is the browser’s painting process. Every change to content, layout, or style can trigger the browser to recalculate and redraw the page.

4️⃣ Storage

Why: To save data in the browser for persistence or temporary session usage.

What: Browsers provide storage mechanisms:

LocalStorage (persistent)

SessionStorage (cleared on tab close)

IndexedDB (structured storage)

How we use it: Store key-value pairs or structured data. Useful for offline apps, saving preferences, or caching temporary data.

Setup & Run: All browsers have built-in storage APIs. Open DevTools → Application → Storage to view stored data.

Understanding: Storage is like a local database in the browser. It allows web applications to remember state or data between page reloads or sessions.

5️⃣ History API

Why: To manipulate browser URL and history without refreshing the page, essential for SPAs.

What: Provides methods to read and modify browser history programmatically (pushState, replaceState, popstate).

How we use it: Change URLs, update states, and respond to back/forward navigation without page reloads.

Setup & Run: JavaScript in the browser supports this API. Open DevTools → Console to inspect history or listen for navigation changes.

Understanding: History API allows modern web apps to behave like native apps, providing smooth navigation and URL management.

6️⃣ Media API

Why: To work with audio, video, and camera devices directly in the browser.

What: Includes HTMLMediaElement (play/pause audio & video) and MediaDevices API (access webcam/microphone).

How we use it: Play media, record video/audio, capture live camera feed, or process media streams.

Setup & Run: Works in modern browsers. Permissions may be required for camera/microphone. DevTools → Console can inspect media elements and streams.

Understanding: Media API enables interactive multimedia applications like video conferencing, media players, and live streaming directly in the browser.
