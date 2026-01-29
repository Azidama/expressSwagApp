# Security
## Common web attacks

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
