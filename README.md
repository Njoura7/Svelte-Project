# 🚀 Svelte Project

## Overview

This repository contains a web application built with Svelte. Svelte is a modern JavaScript framework that enables developers to write easy-to-understand JavaScript code, which is then compiled to highly efficient code that runs in the browser. The project also utilizes Prisma, an open-source database toolkit, for database management.

## Setup Instructions

### Prerequisites

Node.js installed
npm (usually comes with Node.js)

### Installation

Clone the Repository

Copy code

`git clone https://github.com/Njoura7/Svelte-Project.git
cd Svelte-Project`

Install Dependencies

Copy code

`npm install`

Prisma Setup

Create a .env file in the root of your project with the following content:

env
Copy code

`DATABASE_URL="file:./dev.db"`

Run the Prisma migration:

Copy code
`npx prisma migrate dev`

Generate the Prisma client:

Copy code

`npx prisma generate`

Running the Application

Copy code

`npm run dev`

## Contributing

Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.
