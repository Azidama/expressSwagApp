# Security
## Common web attacks
### Types
#### Cross-site Scripting (XSS)
XSS attacks happen when an attacker injects malicious scripts into a web page that is viewed by other users. These scripts can then execute in the context of the victim's browser, potentially stealing cookies and session data or performing other malicious actions without the user's knowledge or consent.
#### SQL Injection
SQL injection allows malicious users to inject malicious code into a database.

#### Denial-of-Service (DoS) 
This is when malicious users flood a website with a high number of requests or traffic, causing the server to slow down and possibly crash, making the site unavailable to users.

## How to mitigate
### **XSS (Cross-Site Scripting)**

* Attacker runs **malicious JS on your site**.
* JS executes in **your origin**.
* Can read:

  * `localStorage`
  * non-HttpOnly cookies
  * DOM data
* **Main defense:** prevent JS injection (escaping, CSP, frameworks).
* **HttpOnly cookies** protect auth tokens from XSS.

---

### **CSRF (Cross-Site Request Forgery)**

* Attacker **cannot run JS on your site**.
* Attacker tricks **user’s browser** into sending a request.
* Browser **automatically attaches cookies**.
* Request comes from **user’s IP + session**.
* **Main defense:** prove request intent.

  * CSRF tokens
  * `SameSite` cookies
  * `Origin` / `Referer` checks

---
