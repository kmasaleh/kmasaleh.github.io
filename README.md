# Landing Page Project  
### Author : Khaaled Saleh  
###  Date:   11/05/2020  

### ___________________________________________ 

## Table of Contents
 
* [Instructions](#Introduction)
* [Vision](#Vision)
* [Implementation](#Implementation)
* [Finishing](#Finishing)

## Introduction
This project "Landing Page" is consist of a starter static site was asigned to me as an assessment from UDACITY, the mission was to convert this site into a dyanamic one by adding javascript code and applying addon html and styles on the page.

## Vision
My vision was to utilize and apply OOP concepts that I learned to  implement the needed functionality using  ES6 javascript classes that construct the model of the page by wrapping its elements inside a few well connected objects that do the job.

By doing this I got a great benefit from the encapsulation fetaure of ES6 classes then easly applying the DRY and separation of concerns principles inside my code, that led me to complete the project in just two days.


## Implementation
I started by constructing a class for each low level component of the page like menu item, page section and 'back to top" button.
Then moved to implement a top level classes that manage these low level components like the menu and the sections container and finally wrapped all of that stuff inside a top manger class that plays the role of application bootstrap.
The classes are connected to each other properly so that enabled me to propagate the required functionality easly after intercepting DOM events in one place then trigger proper object's methods calls instead of scattering thise event handlers and global variables hard to manage code.

## Finishing
After making a hands on testing sessions to the site and make sure  of the working features I made a linting process to my code.
There were some errors that I'd managed and fixed successfully then finally the code came with zero linting errors.