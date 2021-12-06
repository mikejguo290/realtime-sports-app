# realtime sports app
> React App which listens for and displays golfers' stats in a table. 
## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->
## General Information

This is a React app which allows the client to be updated with the stats of golf players as they are made available.

The data is emitted via an external server and this client app uses socket.io to listen for the data update events. The data is saved to state in a React component and rendered with Material UI's DataGrid component. 

## Technologies Used
- React
- Material UI
- Socket.io
## Features
- Golfers' stats are displayed in a table. 
- Users can filter and sort by column values.
## Setup
Clone this repo and run npm install to install dependencies. 

## Project Status
Paused
## Room for Improvement
- Figure out what's important to the end user to establish how best to make use of all the data in an update event.
- Allow user to search for, add and delete golfers from view.
## Contact
Created by Mike Guo - feel free to contact me at mikejguo290@hotmail.com