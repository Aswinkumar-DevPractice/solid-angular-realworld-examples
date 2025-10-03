# 🧠 SolidAngularRealworldExamples

A practical guide to applying the **SOLID design principles** in **real Angular applications**, using realistic business cases like banking, user management, and notifications.

🚀 Built with Angular 20.3.4+ and TypeScript  
🛠️ Focused on Clean Architecture, Reusability, and Maintainability  
📘 Ideal for developers, interview prep, and code architecture learning

---

## 📚 Table of Contents

- [📌 Project Structure](#-project-structure)
- [✅ Principles Covered](#-principles-covered)
- [✨ Demo: Abstraction in Angular](#-demo-abstraction-in-angular)
- [🚀 Development server](#-development-server)
- [⚙️ Code scaffolding](#️-code-scaffolding)
- [🏗 Building](#-building)
- [✅ Running unit tests](#-running-unit-tests)
- [✅ Running end-to-end tests](#-running-end-to-end-tests)
- [📚 Additional Resources](#-additional-resources)
- [👤 Author](#-author)
- [⭐️ Like this project?](#️-like-this-project)

---

## 📌 Project Structure

src/app/principles/
├── abstraction/
├── liskov-substitution/
├── open-closed/
├── interface-segregation/
└── dependency-inversion/


Each folder shows a real-world implementation of one SOLID principle in Angular.

---

## ✅ Principles Covered

| Principle | Description | Angular Real-World Example |
|----------|-------------|-----------------------------|
| **S**ingle Responsibility | A class/component should do one thing only | Component for UI only, service for data only |
| **O**pen/Closed Principle | Open for extension, closed for modification | Strategy pattern for notifications (Email, SMS, Push) |
| **L**iskov Substitution | Subtypes should replace base types | Bank account services: savings, checking, etc. |
| **I**nterface Segregation | Prefer multiple specific interfaces | Auth service: OTP login, password login separately |
| **D**ependency Inversion | Depend on abstractions, not concrete classes | Logger or payment system interface + implementations |

---

## ✨ Demo: Abstraction in Angular

```ts
// Generic Data Service for CRUD operations
export abstract class DataService<T> {
  constructor(protected http: HttpClient, protected apiUrl: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item);
  }

  update(id: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
Used in:

@Injectable({ providedIn: 'root' })
export class UserService extends DataService<User> {
  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/users');
  }
}


✅ Reusable
✅ Testable
✅ DRY
✅ SOLID-compliant
🚀 Development server

To start the app locally:

ng serve


Navigate to: http://localhost:4200/

The app will auto-reload when you change source files.

⚙️ Code scaffolding

Generate a new component:

ng generate component component-name


List all schematics:

ng generate --help

🏗 Building

Compile the project:

ng build


Build output will be stored in the dist/ directory. Production builds are optimized.

✅ Running unit tests

Run tests via Karma
:

ng test

✅ Running end-to-end tests

Run e2e tests (if configured):

ng e2e


Note: Angular CLI doesn’t come with a default e2e framework — you can choose one (e.g., Cypress, Playwright).

📚 Additional Resources

Angular CLI Docs

RxJS Docs

TypeScript Handbook

👤 Author

LinkedIn: [Aswinkumar](https://www.linkedin.com/in/aswinkumar-k-04639a208)

GitHub: Aswinkumar-DevPractice

⭐️ Like this project?

If you found this helpful:

⭐️ Star the repo

🍴 Fork it

🧑‍💻 Share with other Angular developers or job seekers