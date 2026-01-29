# Testing
## Types Testing
There are two types of testing approaches that you should be aware of in software development. Those approaches are TDD (Test-Driven Development) and BDD (Behavior-Driven Development).

### Test-Driven Development (TDD)
Test-Driven Development is a methodology that emphasizes writing tests first before building out the features for an application.

### Behavior-Driven Development (BDD)
Behavior-Driven Development is the approach of aligning a series of tests with business goals. These tests should be written in a language that can be understood by both technical and non-technical individuals.

### Unit Testing
<p>Testing a single “unit” of code (usually a function, method, or small module) in isolation to verify it behaves as expected. This is why Single responsibility principle for code is said to be useful for testing.</p>

An example of mocking a db + its function and stubbing a fake value that postService can use (both the mocked function and the stubbed value)

```javascript
import { postService } from "./postService";
import { db } from "./db";

jest.mock("./db", () => ({
  db: {
    fetchPosts: jest.fn(),
  },
}));

test("should return stubbed posts", async () => {
  const fakePosts = [
    { id: 1, title: "Stubbed Post", content: "This is a stubbed post." },
  ];

  db.fetchPosts.mockResolvedValue(fakePosts);

  const posts = await postService.getPosts();

  expect(posts).toEqual(fakePosts);
});
```

#### Mocking, Faking, and Stubbing
- Mock
    <p>
    A fake object/function that records how it was used (calls, args, times).
    Used to assert behavior.
    (Jest: jest.fn(), jest.mock())
    </p>

- Stub
    <p>
    A simplified replacement that returns fixed data, no behavior tracking.
    Used to control inputs.
    (In Jest, usually just a jest.fn(() => value) without assertions)
    </p>


- Fake
    <p>
    A working but simplified implementation (not production-grade).
    Used when logic matters but real dependency is heavy.
    (e.g. in-memory DB, fake timer)
    </p>

### Functional Testing vs Non-Functional Testing

#### Functional Testing
Functional testing checks if the features and functions of the application work as expected.

#### Non-Functional Testing
non-functional testing focuses on things like performance and reliability.

### Usability Testing
<p>Usability testing is when you have real users interacting with the application to discover if there are any design, user experience, or functionality issues in the app. This type of testing is important because this feedback will help ensure that the application meets the needs of the users.
</p>

<p>The four common types of usability testing are <b>explorative</b>, <b>comparative</b>, <b>assessment</b> and <b>validation</b> testing.</p>

### Usability Testing vs functional testing
It is important to note that functional testing is not the same as usability testing. Functional testing focuses on the functionality of the application while usability testing focuses on the intuitiveness of the application by users.

### Performance Testing
Different types of performance testing:
* **Load testing:** checks how the system performs under **normal and peak expected traffic**.
* **Stress testing:** pushes the system **beyond its limits** to find breaking points.
* **Soak (endurance) testing:** runs high load **for a long time** to catch memory leaks and slow degradation.
* **Spike testing:** suddenly **jumps load up and down** to see how the system reacts.
* **Breakpoint (capacity) testing:** gradually increases load until the system **starts to fail** to find max capacity.

### A/B Testing
**A/B testing** is:

> Comparing **two versions** of a webpage, app, or feature (A vs B) to see **which performs better** for a specific goal.

Key points:

* Users are randomly split between **version A** (control) and **version B** (variant)
* Metrics tracked: clicks, conversions, engagement, etc.
* Goal: **data-driven decisions** instead of guesses
* Often used in UI/UX, marketing, product optimization

**Short:**

> A/B testing = experiment with two versions to see which one works best.

Here’s a **detailed but still concise version** for notes:

---


### **Regression Testing**

* **Definition:** Systematically re-running tests on an application after changes (bug fixes, enhancements, configuration updates) to ensure that existing functionality still works as expected.
* **Purpose:** Catch unintended side effects before they reach users.

#### **Regression**

* Occurs when **new changes break existing functionality** in an application.

#### **Tools**

* Puppeteer, Playwright, Selenium, Cypress.

#### **Techniques**

1. **Unit regression testing** – test a **specific set of critical items** each time changes are made.
2. **Partial regression testing** – test **specific parts** of the app affected by recent changes.
3. **Complete regression testing** – test **all functionalities affected** by code changes; most thorough and time-consuming.

#### **Retesting vs Regression**

* **Retesting:** verify that **specific known issues** have been fixed.
* **Regression testing:** checks for **new, unexpected issues** introduced by recent changes.

