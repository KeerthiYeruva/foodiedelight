# FOODIEDELIGHT

FOODIEDELIGHT is a food delivery application where restaurant admins can manage restaurants and their menus. This project is focused on the frontend, which includes functionalities such as adding, modifying, deleting, and listing restaurants.

## Deployed Application

The application is live and can be accessed at:

[FOODIEDELIGHT](https://foodiedelight-nu.vercel.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
- [Screenshots](#screenshots)
- [Time Breakdown](#time-breakdown)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

FOODIEDELIGHT provides restaurant admins with a user interface to manage their restaurants. This includes adding new restaurants, updating existing restaurant details, deleting restaurants, and viewing a list of restaurants. The data is currently managed using mock data, but it is structured to easily integrate with a real backend API in the future.

## Features

- **Add New Restaurant:** Admins can add a new restaurant with a name, description, location, image, and categories.
- **Update Restaurant:** Admins can update the details of an existing restaurant.
- **Delete Restaurant:** Admins can delete a restaurant from the platform.
- **List Restaurants:** Admins can view a list of all restaurants, with pagination and search functionality.
- **Menu Management:** Admins can manage menu items for each restaurant.
- **Responsive Design:** The application is responsive and works well on all device sizes.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **TypeScript:** Typed superset of JavaScript for type safety.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Formik & Yup:** For form management and validation.
- **React Router:** For handling navigation within the app.
- **Context API:** For state management.
- **Mock Data:** Used for simulating API responses during development.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/your-username/foodiedelight.git
   cd foodiedelight
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

   or if you're using Yarn:

   \`\`\`bash
   yarn install
   \`\`\`

### Running the Application

To run the development server:

\`\`\`bash
npm start
\`\`\`

or with Yarn:

\`\`\`bash
yarn start
\`\`\`

This will start the application on \`http://localhost:3000\`.

### Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
\`\`\`

or with Yarn:

\`\`\`bash
yarn build
\`\`\`

The build artifacts will be stored in the \`build/\` directory. You can serve this build using any static site hosting service.

## Screenshots

### Admin Dashboard

![Admin Dashboard](](https://github.com/user-attachments/assets/66dc8945-8a8e-48e3-93e9-a1b056aa2e4c)


### Add Restaurant Form

![Add Restaurant](https://github.com/user-attachments/assets/b057b2e7-e3aa-405f-a0b5-fcd1c47e8078)


### Menu Item Management

![Menu Management](https://github.com/user-attachments/assets/c92c5124-dd3b-4f65-a18e-025c4e631689)



## Time Breakdown

- **Project Setup:** 2 hours
  - Initial setup of React with TypeScript and Tailwind CSS
  - Setting up project structure and initial components
- **Form Development:** 4 hours
  - Implementing and validating forms with Formik and Yup
  - Adding business logic and image processing
- **State Management:** 3 hours
  - Setting up Context API for state management
  - Handling restaurant data with mock APIs
- **UI/UX Design:** 3 hours
  - Creating responsive layouts with Tailwind CSS
  - Designing components for consistency and ease of use
- **Search and Pagination:** 2 hours
  - Implementing search functionality
  - Adding pagination to handle large data sets
- **Testing and Debugging:** 3 hours
  - Testing forms and components
  - Ensuring responsiveness across devices
- **Documentation:** 1 hour
  - Writing README.md and documenting the project

**Total Time:** 18 hours

## Future Enhancements

- **Backend Integration:** Replace mock data with real API endpoints.
- **Authentication:** Add user authentication for restaurant admins.
- **Advanced Search:** Implement search by categories and menu items.
- **Real-Time Updates:** Use WebSockets to handle real-time updates for restaurant status and orders.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
