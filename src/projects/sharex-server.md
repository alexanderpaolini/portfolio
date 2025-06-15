---
title: "ShareX Server"
published: 2025/01/06
description: >-
  A web server for managing and storing images uploaded through ShareX, with features like file storage optimization, caching, and scalable image management. Built with Express.JS and EJS for the frontend and MongoDB with mongoose for the database. 
slug: sharex-server
hidden: true
favor: 1
---

**Technologies:** JavaScript, Redis, MongoDB, Git, Mongoose  
**Repository:** [alexanderpaolini/sharex-server](https://github.com/alexanderpaolini/ShareX-Server)

A webserver built for managing screenshots uploaded via ShareX or similar software.

I created this to become more familiar with the structure and use of systems like imgur as well as an introduction to web development.

### Key Features

- Built a server using Express.js and EJS for the frontend to display uploaded images.
- Implemented file storage across multiple servers, enhancing the scalability of the platform.
- Integrated Redis for caching and improving performance by temporarily saving images on the host server.
- Used MongoDB and Mongoose for storing metadata about the images.

### What I Learned

- Developing full-stack applications with both frontend (Express.js) and backend (Node.js, MongoDB).
- Handling file storage and optimization with Redis.
- Scaling applications with distributed file storage systems.
