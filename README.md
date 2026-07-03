# MyStore Project Overview

## Goal

This project aims to solidify skills in designing and creating interactive CRUD (Create, Read, Update, and Delete) applications in the real world by create a single-page application.

## Description

**MyStore** is an e-commerce website or an Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process. This project relies on input from users of the application to display the different application pages, record what items will be bought and the amount of each item to buy, update the item purchase list, and delete item(s) from the purchase list.

#### Project features

The application including the following pages:

* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

![MyStore shopping flow](shoppingflow.gif)

## Creation Date

> 5/7/2026

## Project Status

> Active

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## How to Install and Run the Project
1. Open the **shopping-app** folder in a code editor (ex. _Visual Studio Code_)
2. Navigate to the directory of ```shopping-app```
3. _If **Angular** is **not installed**,_ input the following command into the terminal
```
npm install -g @angular/cli
```
The command shown above installs _Angular_ **globally**. Therefore, the command can be run in the command prompt.

4. Input the command shown below to confirm successful _Angular_ installation
```
ng --version
```
5. Input the following command to run the project run on ```port 4200```
```
ng serve
```
6. Open a web browser
7. Input the following URL into the search bar to run the project on ```port 4200```
```
http://localhost:4200/
```

## How to Use the Project
1. Open the **shopping-app** folder in a code editor (ex. _Visual Studio Code_)
2. Navigate to the path where ```shopping-app``` is stored
3. Input the following command to run the project on ```port 4200```
```
ng serve
```
4. Open a web browser
5. Input the following URL into the search bar to use the project on ```port 4200```
```
http://localhost:4200/
```

## Challenges Faced During Project

One challenge faced was sending ID of item that was clicked on in the webpage to the ```item-details``` webpage. When the item image was clicked on, the ID of the chosen item was reset back to the default value of zero before it reached the ```product-item-detail``` component. This was resolved by creating a service file called ```product-item.ts``` in the ```services``` folder that stores the ID while the ```product-list``` component and all of its values reset after the code exits the component and adding navigation code that opens ```item-details``` webpage when the item image is clicked on.

Another challenge that was faced was accessing the "data.json" file in "product-list" service file. This was resolved by first adding a new asset to the "assets" section in "angular.json" file. The new asset ensures that when the "data.json" file in the "assets" folder is accessed, the "data.json" file will be received. AsyncPipe was then used to automatically refresh the user interface to ensure that the data was updated and appeared on the application.


## Udacity Mentors Who Have Answered Questions In Knowledge To Help With Project
- Ananta
- Ahmed L

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

21mcs1081. “How to Limit to 2 Decimal Place with a Angular Pipe ?” _GeeksforGeeks_, GeeksforGeeks, 28 Apr. 2025, www.geeksforgeeks.org/angular-js/how-to-limit-to-2-decimal-place-with-a-angular-pipe/. Accessed 25 Jun. 2026.

“Adding Event Listeners.” _Angular_, angular.dev/guide/templates/event-listeners. Accessed 21 May 2026.

Ahmed, Naveed, and Günter Zöchbauer. “How to Check the Length of an Observable Array.” Edited by Tobias47n9e and Günter Zöchbauer, _Stack Overflow_, 2026 Stack Exchange Inc, 27 June 2016, stackoverflow.com/questions/38057537/how-to-check-the-length-of-an-observable-array. Accessed 15 Jun. 2026.

Amrmsmb, et al. “Argument of Type ‘Event’ Is Not Assignable to Parameter of Type ‘String.’” Edited by Yuri and Ramanathan Chockalingam, _Stack Overflow_, 2026 Stack Exchange Inc, 4 Apr. 2021, stackoverflow.com/questions/66938398/argument-of-type-event-is-not-assignable-to-parameter-of-type-string. Accessed 22 May 2026.

“Angular - Routing Module.” _Tutorials Point_, www.tutorialspoint.com/angular/angular-routing-module.htm. Accessed 25 May 2026.

Angular University. “Angular @for: Complete Guide.” _Angular University_, Angular-University.io, 2026, blog.angular-university.io/angular-for/. Accessed 20 Jun. 2026.

Assistant Bot. “What Is the Difference between the Files ‘App.Module.TS’ and ‘App-Routing.Module.TS’ in Angular?” _Quora_, Oct. 2025, www.quora.com/What-is-the-difference-between-the-files-app-module-TS-and-app-routing-module-TS-in-angular. Accessed 7 Jun. 2026.

B, Hemanth. “What Is the Difference Between BehaviorSubject and Observable in Angular ?” _GeeksforGeeks_, 26 July 2024, www.geeksforgeeks.org/angular-js/what-is-the-difference-between-behaviorsubject-and-observable-in-angular/. Accessed 18 Jun. 2026.

bensalerno, et al. “Running Angular App Only Shows Angular Default Homepage.” _Stack Overflow_, 2026 Stack Exchange Inc, 5 Oct. 2020, stackoverflow.com/questions/64215177/running-angular-app-only-shows-angular-default-homepage. Accessed 8 May 2026.

Chautard, Alain. “What Does Zoneless Angular Mean?” _Medium_, 11 June 2025, blog.angulartraining.com/what-does-zoneless-angular-mean-0a3a9d2a047d?gi=45de611c4b1c. Accessed 10 Jun. 2026.

Danioss, and Robin Dijkhof. “Angular 2 ‘component’ Is Not a Known Element.” _Stack Overflow_, 2026 Stack Exchange Inc, 2 May 2019, stackoverflow.com/questions/44429996/angular-2-component-is-not-a-known-element/44430230#44430230. Accessed 8 May 2026.

ErinDab, and Jignesh Panchal. “ERROR NG8001: ‘courses’ Is Not a Known Element.” Edited by ErinDab and Jignesh Panchal, _Stack Overflow_, 2026 Stack Exchange Inc, 13 May 2024, stackoverflow.com/questions/78472566/error-ng8001-courses-is-not-a-known-element. Accessed 8 May 2026.

“GitHub Profile README Generator.” _GitHub Profile Readme Generator | GitHub Profile Readme Generator_, rahuldkjain.github.io/gh-profile-readme-generator/. Accessed 7 May 2026.

Habib, Ahmad, et al. “Passing Parameter Onclick, in a Loop Using Angular8.” Edited by Ahmad Habib and Mihai Alexandru-Ionut, _Stack Overflow_, 2026 Stack Exchange Inc, 8 Jan. 2020, stackoverflow.com/questions/59640400/passing-parameter-onclick-in-a-loop-using-angular8. Accessed 20 May 2026.

Holeczek, Łukasz. “How to Create a Dropdown in Angular.” _CoreUI_, coreui.io/answers/how-to-create-a-dropdown-in-angular/. Accessed 17 Jun. 2026.

“How TO - Hide Arrows From Input Number.” _W3Schools_, www.w3schools.com/howto/howto_css_hide_arrow_number.asp. Accessed 17 Jun. 2026.

“HTML <small> Tag</Small>.” _W3Schools_, www.w3schools.com/tags/tag_small.asp. Accessed 13 May 2026.

“HTML Images.” _W3Schools_, www.w3schools.com/html/html_images.asp. Accessed 13 May 2026.

“HTML Text Formatting.” _W3Schools_, www.w3schools.com/html/html_formatting.asp. Accessed 26 June 2026.

Jaouadirabeb. “Passing Data Between Angular Components: Mastering @Input, @Output, and Signal-Based Inputs.” _Medium_, 7 Nov. 2025, medium.com/@jaouadirabeb/passing-data-between-angular-components-mastering-input-output-and-signal-based-inputs-decee874a609. Accessed 22 May 2026.

Jus10, and jonrsharpe. “Using an Observable to Detect a Change in a Variable.” Edited by Mave, _Stack Overflow_, 2026 Stack Exchange Inc, 9 Sept. 2017, stackoverflow.com/questions/46132012/using-an-observable-to-detect-a-change-in-a-variable. Accessed 18 Jun. 2026.

Krunals. “Different Ways To Read Local JSON Files In Angular Application.” _Medium_, 2 Oct. 2024, medium.com/@krunals/different-ways-to-read-local-json-files-in-angular-application-c3ecd545fd37. Accessed 10 May 2026.

Kumari, Anni. “How to Turn an Image into a Link in HTML?” _GeeksforGeeks_, GeeksforGeeks, 23 July 2025, www.geeksforgeeks.org/html/how-to-turn-an-image-into-a-link-in-html/. Accessed 14 May 2026.

Leichtos, and Mojtaba Nejad Poor Esmaeili. “Angular-NG8001 Not Known Element Error. How Solve It?” _Stack Overflow_, 2026 Stack Exchange Inc, 12 Jan. 2024, stackoverflow.com/questions/77808592/angular-ng8001-not-known-element-error-how-solve-it. Accessed 8 May 2026.

mahalaxmi. “How to Link a Button to Another Page in HTML?” _GeeksforGeeks_, GeeksforGeeks, 23 July 2025, www.geeksforgeeks.org/html/how-to-link-a-button-to-another-page-in-html/. Accessed 12 May 2026.

“MLA Works Cited: Electronic Sources (Web Publications).” _MLA Works Cited: Electronic Sources - Purdue OWL® - Purdue University_, owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_works_cited_electronic_sources.html. Accessed 7 May 2026.

Motto, Todd. “Handling Observables with NgFor and the Async Pipe.” _Ultimate Courses_, 7 June 2020, ultimatecourses.com/blog/angular-ngfor-async-pipe. Accessed 15 Jun. 2026.

“Navigate to Routes.” _Angular_, angular.dev/guide/routing/navigate-to-routes. Accessed 25 May 2026.

“NgIf.” _Angular_, angular.dev/api/common/NgIf. Accessed 30 May 2026.

“ngIf.” _AngularJS_, docs.angularjs.org/api/ng/directive/ngIf. Accessed 30 May 2026.

“NgSwitch.” _Angular_, angular.dev/api/common/NgSwitch. Accessed 31 May 2026.

Nidhi, and Kavya. “How to Change the Value of an Observable in TypeScript Angular.” _Edureka Community_, 26 Nov. 2024, www.edureka.co/community/292261/how-to-change-the-value-of-observable-in-typescript-angular. Accessed 18 Jun. 2026.

Patel, Sonali. “What Is the Difference between Change and ngModelChange in Angular?” _GeeksforGeeks_, GeeksforGeeks, 16 Dec. 2020, www.geeksforgeeks.org/angular-js/what-is-the-difference-between-change-and-ngmodelchange-in-angular/. Accessed 26 Jun. 2026.

Patil, Jaydeep. “Observable and Subjects in Angular.” _Medium_, 4 Aug. 2023, medium.com/@jaydeepvpatil225/observables-and-subjects-in-angular-a4d73dfa5bb. Accessed 18 Jun. 2026.

POV, and Charly Sosa. “How to Read Json File and Use in Everywhere as Service?” Edited by POV, _Stack Overflow_, 2026 Stack Exchange Inc, 3 Oct. 2019, stackoverflow.com/questions/58225939/how-to-read-json-file-and-use-in-everywhere-as-service. Accessed 10 May 2026.

RC07JNR, and Eliseo. “How to Get Data from an Observable Array?” _Stack Overflow_, 2026 Stack Exchange Inc, 13 Dec. 2021, stackoverflow.com/questions/70339008/how-to-get-data-from-an-observable-array/70339593. Accessed 21 Jun. 2026.

“ROUTING.” _Angular v2 Archive_, v2.angular.io/docs/ts/latest/tutorial/toh-pt5.html. Accessed 7 Jun. 2026.

Samadder, Sabyasachi. “Remove Elements From a JavaScript Array.” _GeeksforGeeks_, GeeksforGeeks, 12 July 2025, www.geeksforgeeks.org/javascript/remove-elements-from-a-javascript-array/. Accessed 27 Jun. 2026.

“Select.” _Angular_, angular.dev/guide/aria/select. Accessed 17 Jun. 2026.

“Sharing Data between Child and Parent Directives and Components.” _Angular_, v17.angular.io/guide/inputs-outputs. Accessed 8 May 2026.

Sharma, Himanshu. “What Is the AppModule in Angular ?” _GeeksforGeeks_, GeeksforGeeks, 4 Apr. 2024, www.geeksforgeeks.org/angular-js/what-is-the-appmodule-in-angular/. Accessed 7 Jun. 2026.

Simon, and LocalPCGuy. “Angular routerLink with Automatic Href.” Edited by LocalPCGuy, _Stack Overflow_, 2026 Stack Exchange Inc, 12 May 2022, stackoverflow.com/questions/72220258/angular-routerlink-with-automatic-href. Accessed 11 May 2026.

Singh, Tarandeep. “Angular10 NgSwitch Directive.” _GeeksforGeeks_, GeeksforGeeks, 23 July 2025, www.geeksforgeeks.org/angular-js/angular10-ngswitch-directive/. Accessed 31 May 2026.

Team, Angular. “AsyncPipe.” _Angular_, angular.dev/api/common/AsyncPipe. Accessed 10 Jun. 2026.

Tripathi, Saumya. “App.Config.Ts vs App.Module.Ts in Angular.” _Medium_, 21 Feb. 2025, medium.com/@saumya.tripathi05062000/app-config-ts-vs-app-module-ts-in-angular-1e096876dea4. Accessed 7 Jun. 2026.

Udacity. “Nd-0067-C3-Angular-Fundamentals-Project-Starter.” _GitHub_, github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter. Accessed 7 May 2026.

## License

[License](LICENSE.txt)
