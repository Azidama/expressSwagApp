# Reading material 
## React
### React lazy load components
React's way of lazily loading components using lazy + Suspense:

```js
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))
<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```
### React debounce function example
```js
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
```
## SOLID Principles
<p>Short explaination of what SOLID means and does:</p>

* **S – Single Responsibility**
  <p>One class = one job.</p>

* **O – Open/Closed**
  <p>Add new stuff without changing old code.</p>

* **L – Liskov Substitution**
  <p>Child classes shouldn’t break parent behavior.</p>
      <p>or</p>
  <p>Subclasses must be replaceable for their base class.</p>
  <p>NOTE: A subclass can do more, but it must not do less or behave differently where the parent is expected.</p>

* **I – Interface Segregation**
  <p>Don’t force unused methods.</p>

* **D – Dependency Inversion**
  <p>Depend on interfaces, not implementations.</p>


## Dependency Injection
Dependency Injection is a runtime system that injects dependencies into classes based on a dependency graph, avoiding manual instantiation and enabling decoupling and testability.

or

A runtime mechanism that automatically provides a class with the instances of the other classes it depends on, resolving them through a dependency graph at application startup, so that classes do not instantiate their own dependencies and can remain decoupled, testable, and maintainable.

### Without Dependency Injection
```js
constructor() {
  const repo = new CourseRepository()
  this.courseService = new CourseService(repo)
}
```
Here:

<li> Resolver creates the repository

<li> Resolver creates the service

<li> Resolver now knows too much about implementation details

<li> This is manual wiring, not DI.


### With Dependency Injection
```js
@Injectable()
export class CourseRepository {}

@Injectable()
export class CourseService {
  constructor(private readonly repo: CourseRepository) {}
}

@Resolver()
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}
}
```
<li> CourseRepository is registered as a provider

<li> CourseService asks for CourseRepository in its constructor → Nest sees the token, gives the instance

<li> CourseResolver asks for CourseService → Nest sees the token, gives the instance

<li> Nest handles instantiation order automatically

## Testing

There are two types of testing approaches that you should be aware of in software development. Those approaches are TDD (Test-Driven Development) and BDD (Behavior-Driven Development).

### Test-Driven Development (TDD)
Test-Driven Development is a methodology that emphasizes writing tests first before building out the features for an application.

### Behavior-Driven Development (BDD)
Behavior-Driven Development is the approach of aligning a series of tests with business goals. These tests should be written in a language that can be understood by both technical and non-technical individuals.

## Web performance metrics measurements
### Web performance APIs

#### performance.now()
<p>A way to measure performance of your code in ms:</p>

```js
const start = performance.now();  
// Run some code here  
const end = performance.now();  

console.log(`Execution time: ${end - start}ms`);
```
<p>Note: performance.now() returns the time in ms since the page loaded.</p>

#### Performance Timing API

```js
let [navigationTiming] = performance.getEntriesByType("navigation");

if (navigationTiming instanceof PerformanceNavigationTiming) {
  // Calculate time from navigation start to DOM content loaded
  const pageLoadTime =
    navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;

  console.log("DOM Content Loaded Time:", pageLoadTime, "ms");
}
```

<p>Note: Key metrics you can track with this API are DNS lookup time - or in other words the connection speed, Time to First Byte (TTFB) - or server response speed, and DOMContentLoaded - or in other words, when the page is ready for interaction.</p>

#### PerformanceObserver
<p>This API listens for performance events such as layout shifts, long tasks, and user interactions</p>
<p>And what can this API track? Well, it can track long tasks - or in other words, JavaScript that blocks rendering, layout shifts to detect UI jank, and First Input Delay (FID) - or how fast a page responds to user input.</p>

```js
const observer = new PerformanceObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

|Performance API |	Best For |
|:----------|:----------:|
|performance.now() |	Precise timing of functions and scripts|
|Performance Timing API |	Measuring full page load performance|
|Performance Observer |	Real-time monitoring of interactions, long tasks, and rendering|

