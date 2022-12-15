<h1 style="text-align: center">Project 1 smart signage project 3 group - Technical Specifications</h1>

<details> 
<summary style="text-decoration: underline; font-size:150%">Table of contents:</summary>

- [1. Front matter](#1-front-matter)
- [2. Introduction](#2-introduction)
  - [a. Overview](#a-overview)
  - [b. Glossary  or Terminology](#b-glossary--or-terminology)
  - [c. Context or Background](#c-context-or-background)
  - [d. Product and Technical Requirements](#d-product-and-technical-requirements)
  - [e. Future Goals](#e-future-goals)
  - [f. Assumptions](#f-assumptions)
- [3. Solutions](#3-solutions)
  - [a. Current or Existing Solution / Design](#a-current-or-existing-solution--design)
  - [b. Suggested or Proposed Solution / Design](#b-suggested-or-proposed-solution--design)
  - [c. Release / Roll-out and Deployment Plan](#c-release--roll-out-and-deployment-plan)
  - [d. Alternate Solutions](#d-alternate-solutions)
- [4. Further Considerations](#4-further-considerations)
  - [a. Impact on other teams](#a-impact-on-other-teams)
  - [b. Regional considerations](#b-regional-considerations)
  - [c. Cost analysis](#c-cost-analysis)
  - [d. Security considerations](#d-security-considerations)
  - [e. Privacy considerations](#e-privacy-considerations)
  - [h. Support considerations](#h-support-considerations)
- [5. Work](#5-work)
  - [a. Prioritization](#a-prioritization)
  - [b. Milestones](#b-milestones)
- [6. End Matter](#6-end-matter)
  - [a. References](#a-references)
  - [b. Acknowledgement](#b-acknowledgement)
</details>

--- 

# 1. Front matter
Factory display - Jacobi Project 3

Author: Karine Vinette 
<br>
| Role              | Name                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Manager   | [Quentin CLEMENT](https://github.com/Quentin-Clement)                                                                                                                                    |
| Technical Leader  | [Karine VINETTE](https://github.com/KarineVinette)                                                                                                                                                                                           |
| Program Manager   | [Robin DEBRY](https://github.com/robin-debry)                                                                                                                                                                                           |
| Software Engineer | [Thomas PLANCHARD](https://github.com/thomas-planchard)                                                                                                                                                                                     |
| Q&A               | [Quentin CLEMENT](https://github.com/Quentin-Clement) |

- Created on: 2022-11-25

# 2. Introduction

## a. Overview

[JACOBI](https://www.jacobi.net/fr/) wants to display informations to their employees in two different rooms on TV's or monitors.

## b. Glossary  or Terminology

| Terms                        | Definition             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wigdet| A widget, active tile, interactive tile, or mini-software is a tool available on an operating system, webpage, or blog. Interactive widgets usually provide information or entertainment.|
| Hardware| In the field of IT, hardware refers to the physical part of devices, telecommunications devices, storage, and peripherals in general. |
| Software| The term software is used to describe software that enables your computer to operate and handles data processing. Several software are installed on your device to give commands, so that specific tasks are performed according to their uses.|
| Database| A database is information that is set up for easy access, management and updating. Computer databases typically store aggregations of data records or files that contain information, such as sales transactions, customer data, financials and product information. |
| MongoDb| MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information. |
| Authentification| In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password.  |
| Firebase| Firebase is a set of hosting services for any type of application. It offers to host in NoSQL and in real time databases, content, social authentication, and notifications, or even services, such as a real-time communication server.  |
| Hosting| Hosting (also known as Web site hosting, Web hosting, and Webhosting) is the business of housing, serving, and maintaining files for one or more Web sites. More important than the computer space that is provided for Web site files is the fast connection to the Internet.  |
| Azure| Azure is a cloud computing platform and an online portal that allows you to access and manage cloud services and resources provided by Microsoft. These services and resources include storing your data and transforming it, depending on your requirements.  |
| DNS| The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.  |
| Subdomains| A subdomain name is a piece of additional information added to the beginning of a website's domain name. It allows websites to separate and organize content for a specific function — such as a blog or an online store — from the rest of your website.  |
| Json| This type of file provides a human-readable format for storing and manipulating data when developers build software. It was initially designed based on Javascript object notation but has since grown in popularity, so many different languages are compatible with JSON data  |
| Mongoose| Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. The problem that Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer.  |
| Routes| The route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), an URL path/pattern, and a function that is called to handle that pattern.   |
| Javascript| Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites. |
| NodeJs| Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.  |
| Express| Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.  |
| Static website| A static website is delivered to a user exactly the way it's stored. That means that nothing on the page will change by the user or even the site administrator unless there's a redesign of the site, or the site administrator goes directly into the code to change it.
Dynamic website | Dynamic Website is a website containing data that can be mutable or changeable. It uses client-side or server scripting to generate mutable content. Like a static website, it also contains HTML data. Dynamic websites are those websites that changes the content or layout with every request to the webserver.  |
| Windows| Windows is an operating system designed by Microsoft. The operating system is what allows you to use a computer. Windows comes preloaded on most new personal computers (PCs), which helps to make it the most popular operating system in the world.  |
| Linux| Linux® is an open source operating system (OS). An operating system is the software that directly manages a system's hardware and resources, like CPU, memory, and storage. The OS sits between applications and hardware and makes the connections between all of your software and the physical resources that do the work.  |
| Raspberry Pi| The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python.  |




## c. Context or Background
At the moment, the informations are shared by paper, that is not ecological and wastes a lot of time, furthermore they don't know if all employees are receiving the informations or paying attention to them.
## d. Product and Technical Requirements

Product requirements :
- They want news that are displayed by TVS or monitors. They want that when they connect the tvs or the monitors, the webpage will be display directly.

Technical requirements :
- Following the company's need, **ALGOSUP** was required to buy a mini windows computer and a monitor. The other choice was to use a smart TV, but we think that with this solution there is a problem of security because employees can change the tv's channel.

## e. Future Goals
Jacobi wants to add more screen in their firms, for exemple in Paris or in another countries.

## f. Assumptions
We have to be able to add TVS easily without the help of a technician. 
  
# 3. Solutions
## a. Current or Existing Solution / Design

[Cenareo](https://cenareo.com/?utm_source=adwords&utm_medium=ppc&utm_term=cenareo&utm_campaign=Branding&hsa_cam=12234004786&hsa_mt=e&hsa_ver=3&hsa_src=g&hsa_ad=538661575911&hsa_net=adwords&hsa_tgt=kwd-778007499720&hsa_acc=5673575680&hsa_grp=128722602387&hsa_kw=cenareo&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsfKyn9b4i27tCc5W9TIZQNZv8Kyrg2cAzSiuPuaGNr_JGzr81WsJ0RoCT1MQAvD_BwE) is a software company that develops digital signage. Digital signage is an interactive communication platform that gives you full control over digital display networks. A easy to use digital signage solution allows you to create, share and manage your stories on any digital display with perfect ease. <br>
Their product is one exemple to our solution. The difference is that we need to create our own solution, designed just for Jacobi.

## b. Suggested or Proposed Solution / Design 

**The hardware:**
We want to use a mini PC Windows with a monitor. It has an easy automatic setup system.
Why Windows ?
The Windows software is simply best because of how it has evolved with time. Its security system is state-of-the-art, its user interface allows convenient usage irrespective of the device that you are using it on. The only thing that will pinch some is its price.<br>
In second choice, we can use a Linux technology, it wasn't our first choice because their leader product Raspberry Pi is not available for the moment, but we can use RogPi, a similar product.
Linux offers great speed and security, on the other hand, Windows offers great ease of use, so that even non-tech-savvy people can work easily on personal computers. Linux is employed by many corporate organizations as servers and OS for security purpose while Windows is mostly employed by business users and gamers.
If the company asks us, we can make a technology change.

**Launch the website at the start of the computer:**
Use Windows startup.
[Tutorial](https://support.microsoft.com/en-us/windows/add-an-app-to-run-automatically-at-startup-in-windows-10-150da165-dcd9-7230-517b-cf3c295d89dd)
We want to use a fullscreen to display the webpage of the ecran, so we used a fullscreen plugin available with Firefox browser.

**Software:**
We have to make an intranet for **JACOBI**.
How to do it ?
To display a website on the browser, we have to use web's technologies like Javascript or Nodejs if we want a compiled language more powerful.<br>
We will use the framework **Express** from NodeJs. (We studied this solution with our teacher in computer science and we wanted to apply our new skills.)<br>
We will use a database to store the campaigns on the cloud to be accessible from all pages of the app.<br>
We chose MongoDb because it is easy to use.<br>
 MongoDb doesn't provide a specific tool of authentification. We could have used Firebase database but it is not user friendly. We have to host the website on the cloud to be accessible from whatever browser.<br>
For the display each screen is related to a subdomain, when we type the subdomain address in the browser, the routage of the software is redirecting the app to a specific html page which is dedicated to display the informations that we want.

**Login page:**
We create a signin and signup with **Firebase** authentification because it is simple and secure. We want that only someone who has a login can create a new account.

**Persistance of the login:**
We used the solution provided by **Firebase** to keep the user logged when he navigates into the website.


**Hosting with Microsoft Azure:**
Connecting the app with DNS and add subdomains to display the campaigns on several screens.
We chose Microsoft Azure because it is an advice from ALGOSUP and we needed an hosting for a dynamic website. However, the custom domain from **AZURE** wasn't user friendly, so we bought a custom domain from **IONOS** (1€excl.tax/year the first year) that **JACOBI** will be able to buy if they want to keep it. The addresses are webjacobi.fr and jacobi-test.azurewebsites.net.

**Managing the data with MongoDB:**
CRUD : Create, Read, Update and Delete the data.
In newCampaign.html, we take the informations (with a form) of the campaign that the company wants to display. We want a pop-up with the confirm method to valide the creation of a new campaign.
In campaign.html, we display the list of campaigns that are stored in our database.
In these campaigns, we are storing videos, images and pdfs.

**Programming the campaigns in time:**<br>
```
isToday(new Date('2022-11-21')); // false

function isToday(date) {
  const today = new Date();
  document.getElementById("a").style.display = "none";

  // 👇️ Today's date
  console.log(today);
  console.log(date);


  if (today.toDateString() === date.toDateString()) {
  
  document.getElementById("a").style.display = "block";
  console.log("ok block");
  }

  return false;
}

/* console.log(isToday(new Date())); // 👉️ true
console.log(isToday(new Date('2022-01-21')));

```

**Automatic refresh page:**
`setTimeout(() => {
  document.location.reload();
}, 3000);`

**Connecting to subdomain**
At the beginning we wanted to have ecran1.webjacobi.fr to host the first screen but with Azure we need to have a paid plan for mapping a URL path to a directory. So, our solution is to display webjacobi.fr/ecran1, that is simple.

**Design**
We add a favicon from the jacobi's logo.

## c. Release / Roll-out and Deployment Plan

**Jacobi** wants to use the product as soon as possible. They want to diffuse their campaigns in strategics's places. They want to display informations in rooms dedicated to employees rest. Indeed, if the use of the product would scale, for exemple to the firm in Paris, they could display another type of campaigns. Also, if the product is to be used in another country, we will change the content to english.  

## d. Alternate Solutions 

We can see this problem from a different perspective and propose a different approach to solve it. One of the point that we can discuss is why use WINDOWS computer instead of phones. <br>
With a phone you can display a subdomain of the campaigns's website easily and with security. The only problem is the lifetime of the battery in our case, because Jacobi wants that the diffusion would be on everytime. 
# 4. Further Considerations
## a. Impact on other teams

 **Jacobi** communication's team will be able to distribute their informations to the employees in a modern way.

 ## b. Regional considerations

**Jacobi** is speaking French in his companies in France.
## c. Cost analysis

We have been ask to respect a budget of 1000€ per device. So we did our choice considering this restriction.

hardware_choice.md](https://github.com/algosup/2022-2023-project-2-factory-display-Project-3-group/blob/main/Documents/hardware%20choice/hardware_choice.md)


## d. Security considerations

The main element of safety is the diffusion of the website on the screen. The hardware must be safe. We must avoid any problems related to switch the channel in a recreative goal. For the software part we need to be careful that it is not possible for a hacker to access the webpage without a login.

## e. Privacy considerations

We use a mini-computer to avoid a lot of problems with the use of the screen. If instead of using a mini-computer, we used  smart TV, it would have been much more problems, because you can plug a remote controller to the TV to switch channels, for exemple.



## h. Support considerations

The solution including the hardware and the software has to be user friendly. For exemple, the main user has not skills in computer science, and he will need to use the application easily.
# 5. Work
## a. Prioritization
(F0=urgent & F2=not urgent)
| Function                        | Flexibility         |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login| F0 |
| Hosting| F0 |
| Subdomains |F0|
| Register campaigns  |F0|
| Add a new campaign | F0|
| Program campaigns|F1|
| Delete campaigns|F1 |
| Add a new screen |F2 |
## b. Milestones

- **1st week:**
Overview of the project
- **2nd week:**
Choice of hardware
- **3rd week:**
Coding the frontend
- **4rd week:**
Coding the backend
- **5th week:**
 Coding the backend and production 
- **6th week:**
Preparation of the presentation

# 6. End Matter
 The addresses are webjacobi.fr and jacobi-test.azurewebsites.net.

## a. References
[MongoDb](https://www.mongodb.com/fr-fr)<br>
[Azure](https://azure.microsoft.com/fr-fr/)<br>
[Nodejs](https://nodejs.org/en/)<br>
[Firebase Documentation](https://firebase.google.com/docs?gclid=Cj0KCQiA1sucBhDgARIsAFoytUs0kb6ml7KcDkJ_p-h5__D7r-OKUsoSV6-6u5iU6a4q2ErNPgEIkXcaAq3jEALw_wcB&gclsrc=aw.ds)

## b. Acknowledgement

Mrs. Karen BLANQUE (HR Assistant),
Mr. Pierre PAGE (HR Manager),
Mr. Nicolas YVELIN (Factory Manager),
Mr. Samuel NEVES (Maintenance Shop Manager)
