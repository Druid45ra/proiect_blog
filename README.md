# Blogging Platform

A modern full-stack blogging platform built with Angular (front-end) and Django (back-end), designed to create, manage, and share articles efficiently.

## Overview

This application allows users to write and publish blog posts, add comments, and manage content through an intuitive interface. It features user authentication, a responsive design, and seamless integration between front-end and back-end.

## Technologies

- **Front-end**: Angular 19.x, TypeScript, HTML, CSS
- **Back-end**: Django 4.x, Python 3.10+, Django REST Framework
- **Database**: SQLite (development), PostgreSQL (production-ready)
- **Tools**: Node.js 18.19+, npm, Angular CLI

## Features

- Article creation, editing, and deletion
- Comment system for user interaction
- User authentication (login/register)
- Responsive design for all devices
- Admin panel for content management

## Prerequisites

- Node.js (v18.19 or higher)
- Python (v3.10 or higher)
- npm (v8.0 or higher)
- Angular CLI (installed globally)
- Git

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Druid45ra/blogging-platform.git
   cd blogging-platform

2. Set up the back-end:
cd blog_backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3. Set up the front-end:
bash :

    cd blog_frontend
    npm install
    ng serve
   
4. Access the application:
        Front-end: http://localhost:4200
        Back-end API: http://localhost:8000/api

5. Usage :
Navigate to http://localhost:4200 to view the blog.
Log in or register to create and manage articles.
Use the admin panel at http://localhost:8000/admin for back-end management (default credentials: admin/admin).

6. Contributing :
Feel free to fork the repository, submit issues, or create pull requests to improve the project.

7. License :
This project is licensed under the MIT License.

