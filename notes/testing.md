# Testing
## Types Testing
There are two types of testing approaches that you should be aware of in software development. Those approaches are TDD (Test-Driven Development) and BDD (Behavior-Driven Development).

### Test-Driven Development (TDD)
Test-Driven Development is a methodology that emphasizes writing tests first before building out the features for an application.

### Behavior-Driven Development (BDD)
Behavior-Driven Development is the approach of aligning a series of tests with business goals. These tests should be written in a language that can be understood by both technical and non-technical individuals.

### Unit Testing
<p>Testing a single “unit” of code (usually a function, method, or small module) in isolation to verify it behaves as expected. This is why Single responsibility principle for code is said to be useful for testing.</p>

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