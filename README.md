https://youtu.be/A7DOSfj9bBQ?si=0fVL0U488AT-FS6K

Menu Management App

Overview
The Menu Management App is a React Native application designed for restaurant owners, chefs, and food enthusiasts to efficiently manage their menus. Users can view, filter, add, and edit menu items with ease. The app provides a user-friendly interface that organizes dishes across various courses like starters, main courses, and desserts.

Table of Contents

Features
Technologies Used
Installation
Usage
Screens
References

Features

Existing Features
View Menu Items: Browse through a list of menu items with details such as name, description, price, and course type.
Add New Menu Items: Seamlessly add new dishes to the menu by providing necessary details like name, description, price, and course (starter, main, dessert).
Item Details: View detailed information about each dish, including its ID and price.
User-Friendly UI: A clean, intuitive interface that makes it easy for users to navigate and manage their menu.

New Features
Filter Menu by Course: Easily filter the menu to view items belonging to specific courses (Starters, Mains, Desserts) for better organization and quick access.
Improved Navigation: Intuitive screen transitions using React Navigation to enhance the user experience.

Technologies Used
React Native: For building the mobile app interface.
TypeScript: Ensures type safety and better code maintainability.
React Navigation: Handles the app’s navigation between screens.
State Management: Managing state within functional components for efficient data handling.
Installation
Prerequisites
Node.js
Expo CLI
React Native development environment set up (Xcode for iOS or Android Studio for Android)
Steps

Clone the repository:

git clone https://github.com/elriquedolf/ChefMenuApp_

Navigate to the project directory:

cd menu-management-app

Install dependencies:

npm install

Start the app:

For Android:

npx react-native run-android

For iOS:

npx react-native run-ios

If using Expo:

npm start

Usage
Once the app is set up, you can start managing your menu with ease:

View Menu: Open the app to view your current list of menu items.
Filter Menu: Use the "Filter by Course" feature to quickly locate items under starters, mains, or desserts.
Add Items: Tap the "Add New Item" button on the home screen, fill in the details, and save the item to add it to the list.
Details: Tap on any menu item to view its details, including the item ID and price.
Edit & Manage: Future versions of the app will allow for editing existing menu items.

Screens

Home Screen:

Displays a list of all menu items and their basic details.
Includes a "Filter by Course" button to refine the list by starters, mains, or desserts.

Filter Screen:

Allows users to choose a course category to filter the menu (e.g., starters, mains, desserts).

Details Screen:

Provides a detailed view of a selected menu item, including the ID and price.

Add Item Screen:

Users can input new menu item details like name, description, course, and price.

References
IIE 2024. Mobile App Scripting. Module Manual. The Independent Institution of Education.
OpenAI. 2024. ChatGPT. https://chatgpt.com

