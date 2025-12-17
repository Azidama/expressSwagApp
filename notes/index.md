# Reading material 
## React
React's way of lazily loading components using lazy + Suspense:

```js
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))
<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```
## Dependency Injection
Dependency Injection is a runtime system that injects dependencies into classes based on a dependency graph, avoiding manual instantiation and enabling decoupling and testability.

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