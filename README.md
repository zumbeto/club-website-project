# Local Hiking Club Website

This is a fictional Local Hiking Club Website created as a challenge project for Codecademy's Full Stack Engineer Career Path.

## Project Description

The website is designed to be a hub for hikers to find trails and engage with the hiking community. The project includes an interactive, responsive design with several key features:

1. **Navigation Bar**: The website has a sticky semi-transparent navigation bar on top, with links to the Login, Members, Activities, and Trails sections. The company logo is placed on the left of the navigation bar.

2. **Hero Image**: The hero image has the main heading and a subheading vertically centered and aligned to the left. There is also a call-to-action (CTA) button under the heading named "Find Out More".

3. **Main and Aside Sections**: The main section contains the description of the hiking club and the aside section contains the mission statement and membership information. These sections are designed with images which animate into place when the user scrolls the page.

4. **Views Section**: This section has three images showing the members hiking in the mountains with stunning views.

5. **Footer**: The footer contains copyright information.

6. **Responsive Design**: The website has a responsive design with a hamburger menu for mobile devices.

## Project Structure

The project has three main files:

1. **index.html**: This file contains the HTML markup for the website.

2. **styles.css**: This file contains the CSS rules for styling the website.

3. **main.js**: This file contains the JavaScript code for managing the hamburger menu and animations.

## JavaScript Functionality

The JavaScript file (`main.js`) provides two main functionalities:

- **Hamburger Menu**: A listener is added to the hamburger menu button that toggles the 'active' class on both the button and the mobile navigation menu, effectively opening and closing the menu.

- **Scroll Animation**: The Intersection Observer API is used to detect when certain elements (those with the classes 'animate-on-scroll-left' and 'animate-on-scroll-right') enter the viewport. When an element enters the viewport, the 'animate' class is added to it, triggering an animation.

## Running the Project

To run the project, simply open the `index.html` file in a web browser.

## License

This project is licensed under the terms of the MIT license.
