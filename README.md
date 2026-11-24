# Recipe Finder

A simple JavaScript program that finds recipes without any hassle.

## The Problem

My original problem was that using recipe websites are very annoying. They often have extra information that is useless and unneeded. So I decided to make a program to fix that.

## How It Works

Recipe Finder is a console program that gives the user recipes they want as fast and simple as possible. It first asks the user wants to search for a recipe and checks the response given. Then it asks for what recipe/meal they want to search for, validates the input, and then displays it nicely for them. This cycle then repeats until the user no longer wants to search for a recipe.

![System diagram](https://github.com/user-attachments/assets/da6617a1-1041-49d2-9e03-c8c5501c0739)


## Tech Stack
- Language: JavaScript
- Tools: Node.js
- APIs: TheMealDB

## Setup and Usage
### Prerequisites
- Node.js (v18 or higher)
### 1. Clone the repository:
```bash
git clone https://github.com/kdefreitas1/Recipe-Finder.git
```
### 2. Change to project directory
```bash
cd Recipe-Finder
```
### 3. Run the program
```bash
node index.js
```
### Example of a running program
```console
$ node index.js

Welcome to Recipe Finder

Would you like to search for a recipe (y/n) y
Input Meal (type "r" to get a random meal): Arrabiata

----------------

Spicy Arrabiata Penne

From Italy
This is a Vegetarian dish

Ingredients:

1 pound penne rigate
1/4 cup olive oil
3 cloves garlic
...

Instructions:

Bring a large pot of water to a boil...

In a large skillet...

...

----------------

Would you like to search for another recipe? (y/n) n
```

## Roadmap
- [x] Create function to get a random meal
- [ ] Create a basic website and add program functionality to it

## Demo
[Video Walkthrough](https://www.youtube.com/watch?v=ZnCiKvuRDt4)

## Author
Kamalani DeFreitas
