# Basic Gallery App

A responsive React-based image gallery application that fetches random images from the Picsum API. Features include search by author, favorites management, infinite scroll, dark mode toggle, and image download.

## 🚀 Live Demo

Check out the live application:  
**https://basic-gallery-app.vercel.app/** 

## 📋 Features

- **Image Gallery**: Displays a grid of random images from Picsum API.
- **Search Functionality**: Filter images by author name.
- **Favorites**: Bookmark images with localStorage persistence.
- **Infinite Scroll**: Automatically loads more images as you scroll.
- **Dark Mode Toggle**: Switch between light and dark themes.
- **Image Download**: Download images directly to your device.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: Picsum Photos API
- **Deployment**: Vercel

## 📂 Project Structure
src/ ├── components/ │ ├── Cards.jsx # Individual image card with favorite and download buttons │ ├── SearchBar.jsx # Search input component │ ├── FavouriteList.jsx # Displays favorited images │ └── DarkModeToggle.jsx # Dark mode toggle button ├── hooks/ │ └── useInfiniteScroll.js # Custom hook for infinite scrolling ├── App.jsx # Main app component ├── main.jsx # Entry point └── index.css # Global styles



## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/daniyaa1/basic-gallery-app.git
   cd basic-gallery-app

   Install dependencies:
    npm install

   Start the development server:
     npm run dev

   The app will run at http://localhost:5173 (default Vite port).

   Usage
Search: Type an author's name in the search bar to filter images.
Favorites: Click the "Favorite" button on an image to add it to your favorites list.
Infinite Scroll: Scroll down to load more images automatically.
Dark Mode: Use the toggle button to switch themes.
Download: Click "Download" on an image to save it locally.


🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

👨‍💻 Author
Built by Daniya Ishteyaque.
