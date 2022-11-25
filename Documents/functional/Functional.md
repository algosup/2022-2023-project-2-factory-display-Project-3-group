The author of this functional specification is **Robin Debry**
<br>
<h1 style="text-align: center">Project 1 smart signage project 4 group - Functional Specifications</h1>

<details> 
<summary style="text-decoration: underline; font-size:150%">Table of contents:</summary>

- [1. Introduction](#1-introduction)
- [2. Glossary](#2-glossary)
- [3. Stakeholders](#3-stakeholders)
  - [3.1. The sponsor](#31-the-sponsor)
  - [3.2. The engineering team](#32-the-engineering-team)
- [4. Monitoring screens in the factory](#4-monitoring-screens-in-the-factory)
- [5. Remote control of the screen in the factory](#5-remote-control-of-the-screen-in-the-factory)
- [6. Personas:](#6-personas)
  - [6.1 Content Producer](#61-content-producer)
    - [6.1.1. Michael](#611-michael)
    - [6.1.2. Christine](#612-christine)
  - [6.2 Viewers](#62-viewers)
    - [6.2.1. Bertrand](#621-bertrand)
    - [6.2.2. Pierre](#622-pierre)
    - [6.2.3. Akira](#623-akira)
- [7. Out of scope](#7-out-of-scope)
- [8. User cases](#8-user-cases)
- [9. Functional analysis](#9-functional-analysis)
- [10. The technology](#10-the-technology)
- [11. Improvements for V2](#11-improvements-for-v2)
  - [11.1 Software](#111-software)
- [12. Non-functional requirements](#12-non-functional-requirements)
  - [12.1 Cost](#121-cost)
    - [12.1.1 Hardware](#1211-hardware)
    - [12.1.2 Software](#1212-software)
      - [Server Costs](#server-costs)
      - [Maintenance](#maintenance)
      - [Energy consumption](#energy-consumption)
  - [12.2 Security](#122-security)
- [13. Conclusion](#13-conclusion)
</details>

--- 

## 1. Introduction 

Jacobi Group is the world leader in purification solutions for air and water, using Activated Carbon, Ion Exchange Resins, and Mobile Filtration Units. With its factory in Forge's industrial zone since 1956, it has a heritage of being the only French industry manufacturing this unique product and supplying customers like Veolia, Valeo, Honeywell, and the French Ministry of Defence, to name a few. <br>
The factory in Vierzon is the oldest in the Group. However, one of the most successful is thanks to a flexible and can-do approach.
Now the Jacobi group wants to improve its management.
They contacted us to create this project to improve the management of the factory.

## 2. Glossary

- **Jacobi:** The company that we are working for.
- **GDPR:** European law protects the data of the people.
- **HTML:** (HyperText Markup Language) We use this language to create a web page. It is the skeleton of the page. We write all the content as well as its structure. It is the language that the browser understands.
- **CSS:** (Cascading Style Sheets) This language completes HTML. It allows formatting and makes the website more ergonomic. It is the flesh that embellishes the skeleton.
- **JS:** (JavaScript) It's an object-oriented scripting language. This means that we can make the elements that make up the website dynamic. It is the muscles and joints of the site.
- **Firebase:** It's a service that allows us to store data in the cloud. It is a database that is hosted on the internet. It is a service that allows us to store data in the cloud. It is a database that is hosted on the internet.
- **Stakeholders:** The people who are interested in the project.

## 3. Stakeholders


During this project for Jacobi, there are two different kinds of stakeholders.

### 3.1. The sponsor

First of all, there is the client, at the beginning of the project it will be represented by Franck JEANNIN, but after it, it will be directly the sponsor: Jacobi. <br>

At Jacobi, the aim is to become the most sustainable supplier in the industry. They put their all into their sustainability programs and do everything they can to have a positive impact on our planet and environment. Their processes are refined so that we make use of any surplus energy, we invest in local communities across the globe, and they are constantly looking for ways to reduce our carbon footprint. They are proud to be a part of the Jacobi Group and they are committed to making a difference. <br> 

The Jacobi team who works on this project is composed of:
- Project owner, Mr. Usman SAEED.
- Content creator, Mrs. Karen BLANQUE (HR Assistant), Mr. Pierre PAGE (HR Manager), Mr. Nicolas YVELIN (Factory Manager)
- Power-user, Mrs. Karen Blanque
- On-site Installation Manager, Mr. Samuel NEVES (Maintenance Shop Manager)

### 3.2. The engineering team

The second stakeholder type is the engineering team who will directly work on the development and the conception of the project. This team is composed of 5 people: <br>
* Quentin CLEMENT as the project manager.
* Robin DEBRY as the program manager.
* Thomas PLANCHARD as the software engineer.
* Karine VINETTE as the tech lead.

## 4. Monitoring screens in the factory

The most important part for Jacobi is the communication between the factory and the people who work there. It's because they need a website to display some information on a screen to inform all of the employees. <br>
The importance of the screens in the company is to inform the employees about the news of the company.<br>
The screens are used to display the news of the company, the weather, the time, the news of the world, the news of the factory, the news of the employees, the news of the canteen, the news of the meeting room, the news of the reception and the news of the locker room. Also, you will have information if someone visits the factory and it will be displayed for the good room <br>
The monitoring of the screen is the main point of the development of this project. <br>
The user will use an application connected to the other screens with a Wi-Fi connection. <br>
because of the GDPR, the user will have to log in to the application to be able to see the content of the screen. Also, the user can stay connected to the application without reconnecting every time he wants to see or change the content of the screen. <br>
He should be able to see if the screen is on if it is off, the actual connection of the screen (with Wi-Fi bar) and the time since the screen is connected (in hours and minutes). <br>
This function will be an informative one, it has the role of informing the user of the status of the screen in real-time.

## 5. Remote control of the screen in the factory

The importance of the remote control of the screen is to be able to change the content of the screen without having to go to the screen. <br>
Also, the user will be able to change the content of the screen without having to log in every time the application. <br>
The user will be able to schedule the content of the screen for a precise day and a precise hour <br>

The remote control of the screen is the second parameter to consider during this project. <br>
The user will be able to manage the other screens via an application. The user will be able to change the campaign he wants on the screen and choose for which screen he wants to apply this campaign(one screen or multiple screens).<br>
The user will also be able to configure an automatic on/off time that he will be able to change at any time with some precise hours.

This will be the interactive features between the screen and the user.

## 6. Personas:

### 6.1 Content Producer

The content producer is the person who will create or/and implement the content on the screen.
He will be able to create a campaign and choose the content of the campaign. <br>

#### 6.1.1. Michael
Michael has been the content creator of Jacobi since April 2022. He is 43 years old, married with two children who are now adults. He loves sports and road trips with his husband during his free time. He lives in Bourges. He takes the train every morning and evening. <br>
His job is to recruit people in the company and he will produce some content for the other's screen. <br>
He is a power user of the application and he will use it to manage the screen in the company.<br>
With these improvements, he will inform the workers of the company if there is a problem in the factory and he will be able to inform them of the new campaign of the company.<br>
Also with the website she will be able to know if a screen is turned on or turned off and if the screen is connected to the Wi-Fi.

#### 6.1.2. Christine
Christine has been the CEO of Jacobi since January 2022 and she is 45 years old. She is married with four children who are now adults. She loves reading during her free time. She lives in Paris, she takes the train every morning and evening. <br>
Christine has an account for the website. With this when Michael is not here Christine will be able to create a campaign or add a new screen, and see the status of them as Michael did. Christine will be happy because it can be useful to have one account for each person responsible for the Jacobi group with that if they are not here another responsible can tell some information to their workers <br>

### 6.2 Viewers

The viewers are the people who will see the content of the screen. <br>

#### 6.2.1. Bertrand

Bertrand has been a technician at Jacobi since 2019. He is 32 years old, married and has four children, and lives in Méreau with them. He loves food and spending time with her friends. <br>
His job is to install and repair the machine in the factory. He also has to take control of every machine one time a month to know if it needs repair. <br>
He will be able to check if TV is on or not. With the website, he will be able to avoid the intervention and he will only intervene if Michael or Christine sees that the TV has a problem and it needs to be repaired.<br> 
It will reduce the frequency of his verification in the factory and will be able to replace the time lost with the Television to do other tasks.

#### 6.2.2. Pierre

Pierre has been a worker at Jacobi since 2012. He is 36 years old, married and has one child, and lives in Bourges with them. He loves sports. <br>
He works in the production part of the factory. He will see the content of the screen in the factory every day. <br>
Also, Pierre wants to know if a customer is coming to the factory. He will be able to see it on the screen and he will be able to prepare the machine to produce the product that the customer wants. <br>
He will also be able to see if there is a problem in the factory.<br>

#### 6.2.3. Akira

Akira is a Japanese customer who is coming to visit the factory. She is 49 years old, married and has one child, and lives in Tokyo with them. She loves french food. <br>
She will come to visit the factory to see how the product is made. She will be able to see the content of the screen selected by the content producer. She will have some places where she can't enter for privacy. <br>



## 7. Out of scope
Due to time and resources constraints, these features might be included in the upcoming versions:
- Different languages for the website in the future
- Display the campaigns on the screen in Paris

## 8. User cases

![UserCase](img/user_case.png)

## 9. Functional analysis

For this project to be considered done, we need to have at least the following specifications :

|Flexibility | importance |
| ---------- | ------------------------------- |
| F0 | mandatory |
| F1 | important (product performance) |
| F2 | secondary (nice to have) |

![UserCase](img/functionalAnalysis.png)

## 10. The technology

The hardware we will use is just a simple monitor. Moreover, we need a little computer.<br>
The software we will use is a web application. This application will be related to the simple monitor with the help of a little computer. <br>

## 11. Improvements for V2

### 11.1 Software

The following step of this project is to create an application for the users to let them control many screens. It will be improved in the following months.

## 12. Non-functional requirements

### 12.1 Cost

#### 12.1.1 Hardware

The hardware is composed of a monitor and a little computer. <br>
The monitor is a 50" monitor with a resolution of 3840x2160 4K. <br>
The little computer is a micro PC with 4K Wi-Fi and 5 Gigabit Ethernet. <br>
The total cost of the hardware is €1856 including taxes because we need two screens and two little computers <br>

#### 12.1.2 Software

##### Server Costs

The database we will use is Firebase. Firebase is free we will only pay the name domain is average €15.<br>
The total cost of the server is €15/year.<br>

##### Maintenance
- The monitor: Should be changed every seven or eight years but you have two years of guarantee.<br>
- The mini-computer: Should last at least four years.<br>

##### Energy consumption
Energy Consumption of the screen: 
0,147Wh, the screen will be on 24/24h so the energy consumption will be 0,147 KWh * 24h * 365 days = 1288.60 KWh for one year. <br>
The price of 1KWh is €0,1394 to have the total cost of a screen. It's the price of 1KWh multiplied by the number of kWh used for one year. 1288.60 KWh * €0,1394 = €179.63 <br>
The total cost for one screen is €179.63 per years.<br>


### 12.2 Security

- Following the GDPR, we will have to make sure that the data is not shared with anyone other than the user. <br>
- Availability: By using the Wi-Fi of the factory Jacobi with it we can ensure that the product will be available 24/7.
- Confidentiality/Privacy: All the passwords are encrypted.
- Traceability: we use a logging system that provides the modification made by the user and the date of the modification.

## 13. Conclusion

Despite the specifications transmitted by Jacobi, a lot of freedom was voluntarily left to us so that we could find ideas that they had not necessarily thought of. <br>

Thanks to the communication between the two stakeholders with it we were able to imagine and develop a rich project in the image of ALGOSUP and Jacobi. <br>

<b><u>Author:</u></b>
Debry Robin