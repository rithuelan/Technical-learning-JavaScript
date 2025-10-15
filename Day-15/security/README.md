1️⃣ XSS — Cross-Site Scripting
What it is

XSS is a vulnerability in web applications where an attacker injects malicious scripts (usually JavaScript) into a web page viewed by other users.

Goal: steal sensitive data (cookies, session tokens), deface web pages, or perform actions on behalf of the user.

Types of XSS

Stored XSS

Malicious code is saved on the server (e.g., in a database).

Example: attacker submits a comment like <script>alert('Hacked!')</script>; every visitor sees the popup.

Reflected XSS

Malicious code is included in the URL or request and reflected immediately in the response.

Example: https://example.com/search?q=<script>alert('XSS')</script>

DOM-based XSS

Occurs when JavaScript on the page directly processes untrusted data from the URL or page DOM.

Prevention

Escape user input before rendering (HTML entities)

const safeText = validator.escape(userInput);


Content Security Policy (CSP) (we’ll discuss below)

Use frameworks that automatically escape output (React, Angular)

2️⃣ CSRF — Cross-Site Request Forgery
What it is

CSRF tricks a logged-in user into performing actions they didn’t intend on a web application.

Goal: Make users unknowingly send requests to your server (like changing password, transferring money).

Example

Alice is logged into her bank account.

She visits a malicious website.

That site triggers a hidden request:

<img src="https://bank.com/transfer?amount=1000&to=attacker" />


If the bank server doesn’t verify, the money is sent from Alice to the attacker.

Prevention

CSRF Tokens: unique secret per user session, must be included in forms.

<input type="hidden" name="csrf_token" value="randomToken123">


SameSite cookies: prevent cookies from being sent with cross-site requests.

Check Referer/Origin headers for requests.

3️⃣ Input Sanitization
What it is

Input sanitization is the process of cleaning and validating user input before using it in your app or database.

Goal: prevent XSS, SQL injection, and other attacks.

Examples

Escape HTML tags in user input

const validator = require('validator');
const safeInput = validator.escape(userInput);


Validate data type

if (!validator.isEmail(userEmail)) {
  throw new Error('Invalid email');
}


Remove unwanted characters from strings, numbers, URLs, etc.

Best Practices

Always validate on server-side (client-side validation is optional).

Use libraries like validator.js, DOMPurify (for browser-safe HTML sanitization).

4️⃣ CSP — Content Security Policy
What it is

CSP is a security header that restricts what content a browser can load and execute on a website.

Goal: mitigate XSS and code injection attacks.

Example
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.example.com


Meaning:

Only scripts from your domain and apis.example.com can run.

Other scripts (like injected XSS) will be blocked.

Other CSP directives

style-src → allowed CSS sources

img-src → allowed image sources

connect-src → allowed AJAX endpoints

frame-ancestors → allowed embedding pages

Benefits

Reduces risk of XSS attacks drastically.

Helps enforce safe resource loading.

Can be combined with input sanitization for maximum security.

✅ Summary Table
Concept	Threat	How to Prevent
XSS	Injecting malicious scripts	Escape output, CSP, sanitize input, use frameworks
CSRF	Trick user into unwanted actions	CSRF tokens, SameSite cookies, verify Origin/Referer
Input Sanitization	Unsafe or malicious input	Validate data types, escape HTML, remove dangerous characters
CSP	Script injection / resource loading	Set strict CSP headers to limit sources
