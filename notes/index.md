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