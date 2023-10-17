# Pinhin Ionic Project
Projects to help pinhita to understand Ionic.

## Goal
1. Create a Login page.
2. Create a Home page.
3. Create router to Login and Home.
4. Create AuthData service to handle the "user data" that we get in the Login.
5. Create Guard to block acces to Home if you're not logged.
6. Create a DataProvider service to get the json of the API [Rick & Morty](https://rickandmortyapi.com/documentation/#rest).
7. Each time the user enters to the Home, needs to trigger the DataProveider service to get the data, when the data is downloaded need to be stored in cache.
8. Each time the user enters to the Home, needs to validate if the DataProvider has a cache of the data to load it or trigger the get.
9. Once the DAtaProvider has the data in the cache, you need to display it in the mainmenu in a grid using Card elements.

## Some Commands
- `npm install` install all the node modules.
- `ionic serve` start app.
- `ionic generate page pages/page-name --no-spec` to generate a page without spec file.
- `ionic generate service services/service-name/service-name` to generate a service file.
- `ionic generate guard guards/guard-name` to generate a guard file


## Summary of Ionic Elements
- **Page**:
  - Pages in Ionic are essentially views or screens in your mobile application.
  - Each page represents a different section or functionality within your app.
  - Pages are typically composed of one or more components and may have their own routing configuration.
  - They control the overall structure and layout of your app's user interface.

- **Component**:
  - Components are reusable building blocks of your application's user interface.
  - They encapsulate specific functionality and user interface elements.
  - Components can be used within pages to create complex layouts and functionality.
  - They encourage a modular and maintainable code structure.

- **Directive**:
  - Directives are special instructions that Angular applies to the DOM (Document Object Model) to modify its behavior or appearance.
  - In Ionic, you may use built-in Angular directives like ngIf, ngFor, and ngStyle to manipulate DOM elements.
  - You can also create custom directives for specific UI behaviors that you want to reuse throughout your app.

- **Service**:
  - Services in Angular and Ionic are used to encapsulate and manage data, business logic, and functionality that can be shared across components, pages, and directives.
  - They are often used for tasks like making HTTP requests, managing state, or interacting with external APIs.
  - Services promote code reusability and separation of concerns by keeping the business logic separate from the components.

To summarize, in an Ionic application:
- **Pages** control the high-level structure and layout of your app.
- **Components** represent reusable UI elements and encapsulate specific functionality.
- **Directives** are used to manipulate the DOM and apply special behavior to elements.
- **Services** provide a way to manage data and logic that needs to be shared across various parts of your app.