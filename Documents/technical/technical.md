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
Factory display-Jacobi Project 3
<br>
Author: Karine Vinette 
<br>
| Role              | Name                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Manager   | [Quentin CLEMENT](https://github.com/Quentin-Clement)                                                                                                                                                                                     |
| Technical Leader  | [Karine VINETTE](https://github.com/KarineVinette)                                                                                                                                                                                           |
| Program Manager   | [Robin DEBRY](https://github.com/robin-debry)                                                                                                                                                                                           |
| Software Engineer | [Thomas PLANCHARD](https://github.com/thomas-planchard)                                                                                                                                                                                     |
| Q&A               | TEAM'S WORK |

- Created on: 2022-11-25
<br>
- Bug Tracker by Karine Vinette : https://docs.google.com/document/d/1VXgCwnPgpMuJ61_PvMg_wf2PeF6v-9OH_zd8SrqFB24/edit
# 2. Introduction
## a. Overview

[JACOBI](https://www.jacobi.net/fr/) wants to display informations to their employees on two different rooms to TV's or monitors.

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
- They want news that are displayed by TVS or monitors.They want that when they connect the tvs or the monitors, the webpage will be display directly

Technical requirements :
- Following the company's need, **ALGOSUP** was required to buy a mini windows computer and a monitor. The other choice was to use a smart TV, but we think that with this solution there is a problem of security because employees can change the tv's channel.

## e. Future Goals
Jacobi wants to add more screen in their firms, for exemple in Paris or in another countries.

## f. Assumptions
We have to be able to add TVS easily without the help of a technician. 
  
# 3. Solutions
## a. Current or Existing Solution / Design

[Cenareo](https://cenareo.com/?utm_source=adwords&utm_medium=ppc&utm_term=cenareo&utm_campaign=Branding&hsa_cam=12234004786&hsa_mt=e&hsa_ver=3&hsa_src=g&hsa_ad=538661575911&hsa_net=adwords&hsa_tgt=kwd-778007499720&hsa_acc=5673575680&hsa_grp=128722602387&hsa_kw=cenareo&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsfKyn9b4i27tCc5W9TIZQNZv8Kyrg2cAzSiuPuaGNr_JGzr81WsJ0RoCT1MQAvD_BwE) is a software company that develops digital signage. Digital signage is an interactive communication platform that gives you full control over digital display networks. Our easy to use digital signage solution allows you to create, share and manage your stories on any digital display with perfect ease. <br>
Their product is one exemple to our solution. The difference is that we need to create our own solution, designed just for Jacobi.

## b. Suggested or Proposed Solution / Design 

**The hardware**<br>

**Launch the website at the start of the computer**<br>

**Login page**<br>

**Hosting with Microsoft Azure**<br>

**Managing the data with MongoDB**<br>

**Create subdomains to display the campaigns on several screens**<br>

**Programming the campaigns in time**<br>

**Persistance of the login**<br>

**Automatic refresh page**<br>
setTimeout(() => {
  document.location.reload();
}, 3000);


## c. Test Plan
Test plan by Karine VINETTE :


## d. Release / Roll-out and Deployment Plan

**SignAll** wants to release the product as soon as possible. They want to create a new line of product connected based on our product. They said " We want to be the first on this market". This product needs to be available for all the customers of **SignAll** but not only because they also want to sell this product to the competitor's customers. Indeed, if the product can be used on different signs of different brands, the market has no limit. In addition it's a really positive point for their brand image to be the precursor on this type of product.  

## e. Alternate Solutions 

We can see this problem from a different perspective and propose a different approach to solve it. One of the point that we can discuss is why use WINDOWS computer instead of phones. <br>
With a phone you can display a subdomain of the campaigns's website easily and with security. The only problem is the lifetime of the battery in our case because Jacobi wants that the diffusion would be on everytime. 
# 4. Further Considerations
## a. Impact on other teams

 **Jacobi** communication's team could diffuse their informations to the employees in a modern way.

 ## b. Regional considerations

**Jacobi** is implemented all over Europe and the language can be different from one country to another. So 
## c. Cost analysis

Let's talk about cost. First of all the company needs to produce the device. Then it sells the product to their customers. For the customer's side, he needs to buy the product and the installation. In addtition during the year he needs to pay the extra electricity generated by the product. 


## d. Security considerations

The main element of safety is the safety of the hardware. The hardware must be safe, waterproof and not dangerous for customers and technicians. We must avoid any problems related to fire and electric shock. For the software part we need to be careful that it is not possible for a hacker to overheat the leds.

## e. Privacy considerations

We use Lora to avoid a lot of problems with data privacy, data leaks. If instead of using Lora, we used  wifi, it would have been much more problematic, because wifi is weaker in terms of security. 



## h. Support considerations

At the moment the support is complicated with the actual sign. There is no way to know if a sign is broken or not. The only way is to move where the sign is located. So one of the goal of the product is to save the technician time by avoiding them to move for nothing. In addition Signall want to predict the future state of led depending of the weather. 
# 5. Work
## a. Prioritization

| Function                        | Flexibility         |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Turn on/off the light| F1 |
| Reduce/increase the light intensity| F2 |
| Know the led status |F2|
| Know the brightness of a led  |F1|
| Turn off the light in accord with the law|F0|
| In accord to Ecowatt, turn off or reduce the light|F0 |
| Send a notification when a led is down | F2|
| Programable light which light up on various hours |F0 |
## b. Milestones

- 1st week:<br>

- 2nd week:<br>

- 3rd week:<br>

- 4rd week:<br>

- 5th week:<br>
  
- 6th week:<br>


# 6. End Matter


## a. References


## b. Acknowledgement

Mrs. Karen BLANQUE (HR Assistant), Mr. Pierre PAGE (HR Manager), Mr. Nicolas YVELIN (Factory Manager), Mr. Samuel NEVES (Maintenance Shop Manager)
