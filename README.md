

## Recipe App :fork_and_knife:

The Recipe App is a web application that allows users to create, view, and manage their recipes. It provides a user-friendly interface for creating recipes with various details such as name, description, ingredients, instructions, cooking time, and an optional image URL. Users can also view and search for existing recipes.

### :key: Key Features

- :busts_in_silhouette: User Registration: Users can create an account by providing a unique username and password.
- :closed_lock_with_key: User Login: Registered users can securely log in to their accounts.
- :notebook_with_decorative_cover: Recipe Creation: Users can create new recipes by providing the necessary details, including ingredients and instructions.
- :bookmark_tabs: Recipe Listing: All created recipes are displayed in a list format for easy browsing.
- :mag: Recipe Details: Users can view the full details of a recipe, including its name, description, ingredients, instructions, cooking time, and image.
- :star: Favorite Recipes: Implement the ability for users to mark recipes as favorites and view them separately.
- :lock: User Authentication: The app ensures secure user authentication and authorization for protected routes.
- :iphone: Responsive Design: The application is designed to be responsive, providing a seamless experience across different devices and screen sizes.

### :computer: Technologies Used

- Frontend: React, React Router, Axios, react-cookie
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT), bcrypt
- UI Styling: CSS, Bootstrap

### :rocket: Getting Started

To run the Recipe App locally, follow these steps:

1. :open_file_folder: Clone the repository: `git clone <repository-url>`
2. :package: Install dependencies: `npm install`
3. :gear: Set up the backend:
   - :card_file_box: Create a MongoDB database and update the connection string in the backend configuration file.
   - :rocket: Start the backend server: `npm run start:backend`
4. :art: Set up the frontend:
   - :globe_with_meridians: Update the backend API URL in the frontend configuration file.
   - :rocket: Start the frontend development server: `npm run start:frontend`
5. :computer: Access the Recipe App in your browser at `http://localhost:3000`.


### :bulb: Future Enhancements

- :bust_in_silhouette: User Profile: Allow users to update their profile information and manage their saved recipes.
- :mag_right: Search Functionality: Users can search for recipes based on keywords or ingredients to quickly find what they are looking for.
- :label: Recipe Categories/Tags: Allow users to categorize recipes or assign tags for easier organization and filtering.
- :star2: Recipe Rating and Reviews: Enable users to rate and leave reviews/comments on recipes.
- :link: Social Sharing: Add social sharing functionality to allow users to share recipes on social media platforms.
- :mag_right: Advanced Search Filters: Implement more advanced search filters, such as filtering by cooking time, dietary restrictions, or recipe difficulty.

### :handshake: Contributing

Contributions to the Recipe App project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

