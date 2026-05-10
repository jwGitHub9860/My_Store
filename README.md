# MyStore Project Overview

## Goal
This project aims to solidify skills in designing and creating interactive CRUD applications in the real world.

## Description
MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Creation Date

> 5/7/2026

## Project Status

> Active

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## Project Instructions

#### Project introduction: MyStore

You've completed the course! You know how to create a single-page application to offer a rich, dynamic experience on the web.

![MyStore shopping flow](shoppingflow.gif)

To showcase your new skills, you'll build an e-commerce website – an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process. 

#### How will this help my career?

Many applications that you use daily include the functionality to read, write, update, and delete content provided by APIs. For example, a typical image-sharing social media application may allow you to view photos, add photos, edit them, and remove them from an album or user account. Similar to such applications, this project relies on input from users of the application. After completing this project, you'll solidify your skills in designing and creating interactive CRUD applications in the real world.

#### Before you begin

Throughout the course, you've learned a lot about Angular components, services, modules, services, routing, and data flow. Before you begin scaffolding the application, ask yourself:

* How do I fetch and use data from an external API (or JSON data file)?
* What does a logical hierarchy of components look like? For example, which components should be parent components, and which components should be their children components?
* How do I collect input from the user, using controlled form elements as the "source of truth" of such data?
* What are events in Angular, and how do I listen and respond to them?
* What is a model, and how do I create one in TypeScript?
* How do I pass data between parent and child components? Hint: Which decorators should be used?
* How do I pass data between sibling or otherwise "unrelated" components?
* How is routing set up in the templates? Likewise, how do I configure the app routing module to support this?

#### Starter code

The Angular CLI allows you to quickly scaffold a new application, as well as generate all necessary components, services, and modules. While you'll use the CLI to create a new application from scratch, we've provided some code and data to help you along the way:

* **CSS**. The provided stylesheets are not required, but you may use the included CSS classes to help you style the application. Feel free to use your creativity and build a UI as you see fit!

* `data.json`. You may fetch the list of products for your store from the API created in the previous course of this Nanodegree program. In lieu of using that data, you may also choose to have your application read the provided `data.json` file to populate your store.

If you choose to use the starter code, all files can be downloaded here. To use them, just merge the folders into the root directory of your scaffolded application.

#### Project features

Your application reflects the same user experience as that of a real-world e-commerce website, including a(n):

* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

#### Development strategy

Feel free to use this overview and the rubric specifications to create this project. You are always welcome to design and implement your own workflow, but if you are stuck or could use some inspiration, we've included the following walkthrough the help you get up and running.

1. **Scaffold your project** using the Angular CLI, and install any dependencies.
2. **Generate the product list component**. Having the product list as the "main" page is a great start for your users.
3. **Begin building the component logic and template** What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
3. **Consider the hierarchy of components**. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
4. **Create the TypeScript model** for products in the app. Any available product should be of this type, rather than an ordinary object.
5. **Generate the service(s)**. Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
6. **Fetch data** from the API (or included `data.json` file) and render products in your product list.
7. **Generate and create other components**. How do these components interact, if at all, with the component you first created? How can we facilitate sharing information between them?
8. **Create routing** between components. Which components are linked by the router? How is the app routing module set up and configured to make sure the page doesn't reload during navigation?
9. **Ensure that inputs are validated** in the client. For example, your checkout form needs to collect information from the user in order for them to complete the checkout process. How do you ensure that you are collecting accurate information from the user?

## How to Install and Run the Project
1. Open **Visual Studio Code**
2. Open **terminal** in _Visual Studio Code_
3. _If **Angular** is **not installed**,_ input the following command into the terminal
```
npm install -g @angular/cli
```
The command shown above installs _Angular_ **globally**. Therefore, the command can be run in the command prompt.

4. Input the command shown below to confirm successful _Angular_ installation
```
ng --version
```
5. Ensure that the path in the terminal ends with ```My_Store\shopping-app```
6. _If path does **not exist**_, ensure that the path in the terminal ends with ```My_Store```
7. Input the following command into the terminal to create **shopping-app** project with _Angular_
```
ng new shopping-app
```
This will fix ```Error: This command is not available when running the Angular CLI outside a workspace.```

8. Choose ```CSS``` for the **stylesheet system**
9. Choose ```N``` for **enabling Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)**
10. Choose ```N``` for **AI tools to configure with Angular best practices**
11. Change the terminal directory to ```shopping-app```
12. Input the following command into the terminal to test if the project will run on ```port 4200```
```
ng serve
```
13. Choose ```N``` for **sharing pseudonymous usage data about this project with the Angular Team at Google under Google's Privacy Policy**
14. Open a web browser
15. Input the following URL into the search bar to run the project on ```port 4200```
```
http://localhost:4200/
```
16. Move the ```src``` folder and all its contents into the respective places in the ```shopping-app``` folder
17. _If the previous web browser is <ins>closed</ins>,_ repeat _Steps 14-15_
18. Refresh web browser

## How to Use the Project
1. _If Visual Studio Code is <ins>not open</ins>,_ skip to _Step 2_
2. Open **Visual Studio Code**
3. Open **terminal** in _Visual Studio Code_
4. Ensure that the path in the terminal ends with ```My_Store\shopping-app```
```
cd shopping-app
```
The path required for the command above may differ.

5. Input the following command into the terminal to run the project on ```port 4200```
```
ng serve
```
6. Open a web browser
7. Input the following URL into the search bar to use the project on ```port 4200```
```
http://localhost:4200/
```

## Challenges Faced During Project

## Udacity Mentors Who Have Answered Questions In Knowledge To Help With Project
- 

## Languages

**Angular**

<a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a>

**Jasmine**

<a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="40" height="40"/> </a> 

**JavaScript**

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>

**TypeScript**

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>


## Tools

**Visual Studio Code** - The application software where the project is edited.

<p align="left"> <img width="43" height="46" alt="VSCode_logo" src="https://github.com/user-attachments/assets/0f8d15c4-276a-46ef-92cd-80a2f1958e76" /> </p>

**GitHub Desktop** - The application software that gives access to the project from _GitHub_ and allows it to be edited in _Visual Studio Code_.

<p align="left"> <img width="46" height="46" alt="GitHub_Desktop_logo" src="https://github.com/user-attachments/assets/bbd2a72d-0953-499e-ab28-e55b11171b83" /> </p>

**ChatGPT** - The application software that answers specific questions of why project has specific problems or why project failed to achieve intended results.

<p align="left"> <img width="49" height="42" alt="ChatGPT_logo" src="https://github.com/user-attachments/assets/34fd410d-3e92-4fc6-8dc7-1be521a8d2a6" /> </p>


## Credits
###### References used while making project

bensalerno, et al. “Running Angular App Only Shows Angular Default Homepage.” _Stack Overflow_, stackoverflow.com/#organization, 1 June 1964, stackoverflow.com/questions/64215177/running-angular-app-only-shows-angular-default-homepage. Accessed 8 May 2026.

Danioss, and Robin Dijkhof. “Angular 2 ‘component’ Is Not a Known Element.” _Stack Overflow_, stackoverflow.com/#organization, 2 May 2019, stackoverflow.com/questions/44429996/angular-2-component-is-not-a-known-element/44430230#44430230. Accessed 8 May 2026.

ErinDab, and Jignesh Panchal. “ERROR NG8001: ‘courses’ Is Not a Known Element.” Edited by ErinDab and Jignesh Panchal, _Stack Overflow_, stackoverflow.com/#organization, 13 May 2024, stackoverflow.com/questions/78472566/error-ng8001-courses-is-not-a-known-element. Accessed 8 May 2026.

“GitHub Profile README Generator.” _GitHub Profile Readme Generator | GitHub Profile Readme Generator_, rahuldkjain.github.io/gh-profile-readme-generator/. Accessed 7 May 2026.

Leichtos, and Mojtaba Nejad Poor Esmaeili. “Angular-NG8001 Not Known Element Error. How Solve It?” _Stack Overflow_, stackoverflow.com/#organization, 12 Jan. 2024, stackoverflow.com/questions/77808592/angular-ng8001-not-known-element-error-how-solve-it. Accessed 8 May 2026.

“MLA Works Cited: Electronic Sources (Web Publications).” _MLA Works Cited: Electronic Sources - Purdue OWL® - Purdue University_, owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_works_cited_electronic_sources.html. Accessed 7 May 2026.

Udacity. “Nd-0067-C3-Angular-Fundamentals-Project-Starter.” _GitHub_, github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter. Accessed 7 May 2026.

## License

[License](LICENSE.txt)
