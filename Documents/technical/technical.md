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
  - [c. Test Plan](#c-test-plan)
  - [d. Release / Roll-out and Deployment Plan](#d-release--roll-out-and-deployment-plan)
  - [e. Alternate Solutions](#e-alternate-solutions)
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
| Q&A               | Team's work |

- Created on: 2022-11-25
<br>
- Bug Tracker by Karine Vinette : https://docs.google.com/document/d/1VXgCwnPgpMuJ61_PvMg_wf2PeF6v-9OH_zd8SrqFB24/edit
# 2. Introduction
## a. Overview

[JACOBI](https://www.jacobi.net/fr/) wants to display informations to their employees in two different rooms on TV's or monitors.

## b. Glossary  or Terminology

| Terms                        | Definition             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wigdet| A widget, active tile, interactive tile, widget, or mini-software is a tool available on an operating system, webpage, or blog. Interactive widgets usually provide information or entertainment.|
| Hardware| In the field of IT, hardware refers to the physical part of devices, telecommunications devices, storage, and peripherals in general. |
| Software| The term software is used to describe software that enables your computer to operate and handles data processing. Several software are installed on your device to give commands, so that specific tasks are performed according to their uses.|


## c. Context or Background
At the moment, the informations are shared by paper, that is not ecological and wastes a lot of time, furthermore they don't know if all employees are receiving the informations or paying attention to them.
## d. Product and Technical Requirements

Product requirements :
- They want news that are displayed by TVS or monitors.They want that when they connect the tvs or the monitors, the webpage will be display directly.

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
We want to use a mini PC Windows with a monitor.

**Launch the website at the start of the computer:**
Use Windows startup.
[Tutorial](https://support.microsoft.com/en-us/windows/add-an-app-to-run-automatically-at-startup-in-windows-10-150da165-dcd9-7230-517b-cf3c295d89dd)

**Login page:**
Create a signin and signup with Firebase.

**Hosting with Microsoft Azure:**
Connecting the app with DNS and add subdomains to display the campaigns on several screens.

**Managing the data with MongoDB:**
CRUD : Create, Read, Update and Delete the data.

**Programming the campaigns in time:**<br>

**Persistance of the login:**<br>

**Automatic refresh page:**
`setTimeout(() => {
  document.location.reload();
}, 3000);`


## c. Test Plan
Test plan by Karine VINETTE :


## d. Release / Roll-out and Deployment Plan

**Jacobi** wants to use the product as soon as possible. They want to diffuse their campaigns in strategics's places. They want to display informations in rooms dedicated to employees rest. Indeed, if the use of the product would scale, for exemple to the firm in Paris, they could display another type of campaigns. Also, if the product is to be used in another country, we will change the content to english.  

## e. Alternate Solutions 

We can see this problem from a different perspective and propose a different approach to solve it. One of the point that we can discuss is why use WINDOWS computer instead of phones. <br>
With a phone you can display a subdomain of the campaigns's website easily and with security. The only problem is the lifetime of the battery in our case, because Jacobi wants that the diffusion would be on everytime. 
# 4. Further Considerations
## a. Impact on other teams

 **Jacobi** communication's team will be able to distribute their informations to the employees in a modern way.

 ## b. Regional considerations

**Jacobi** is speaking French in his companies in France.
## c. Cost analysis

We have been ask to respect a budget of 1000€ per device. So we did our choice considering this restriction.

[hardware_choice.md](https://github.com/algosup/2022-2023-project-2-factory-display-Project-3-group/blob/main/Documents/hardware%20choice/hardware_choice.md)

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


## a. References
[MongoDb](https://www.mongodb.com/fr-fr)
[Azure](https://azure.microsoft.com/fr-fr/)
[Nodejs](https://nodejs.org/en/)

## b. Acknowledgement

Mrs. Karen BLANQUE (HR Assistant),
 Mr. Pierre PAGE (HR Manager),
  Mr. Nicolas YVELIN (Factory Manager),
   Mr. Samuel NEVES (Maintenance Shop Manager)