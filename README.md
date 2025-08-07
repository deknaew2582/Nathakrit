# Nathakrit Chuajeen Portfolio Website

This is a cutting-edge, professional freelance portfolio website for Nathakrit Chuajeen, built with React.

## Features

- Modern, minimalist, clean, and interactive design.
- Dark-themed with a specific color palette.
- Responsive layout for desktop, tablet, and mobile.
- Interactive elements inspired by toukoum.fr (pre-loader, custom mouse cursor, magnetic buttons, page transitions - *Note: Some advanced interactive features like pre-loader, custom mouse cursor, and magnetic buttons are placeholders and require further implementation.*)
- Structured content presentation inspired by allanim.com.

## Technology Stack

- **Frontend Framework:** React
- **Animation & Interactivity:** Framer Motion, Three.js / React Three Fiber
- **Styling:** Styled Components
- **Routing:** React Router DOM
- **Hosting:** Firebase Hosting
- **File Storage:** Firebase Storage (for resume PDF and project images - *Note: Firebase integration is a placeholder and requires further implementation.*)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd nathakrit-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000`.

## Deployment to Firebase Hosting

*Note: This section assumes you have a Firebase project set up and the Firebase CLI installed.*

### Firebase CLI Installation

If you don't have the Firebase CLI installed, run:

```bash
npm install -g firebase-tools
```

### Firebase Login

Log in to your Firebase account:

```bash
firebase login
```

### Initialize Firebase in your project

From the `nathakrit-portfolio` directory, run:

```bash
firebase init
```

Follow the prompts:
- Select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys."
- Choose your Firebase project.
- For "What do you want to use as your public directory?", type `build`.
- For "Configure as a single-page app (rewrite all urls to /index.html)?", type `Yes`.
- For "Set up automatic builds and deploys with GitHub?", type `No` (unless you want to set this up).

### Build for Production

Before deploying, create a production build of your React application:

```bash
npm run build
```

This will create a `build` folder in your project directory.

### Deploy to Firebase

To deploy your application to Firebase Hosting, run:

```bash
firebase deploy --only hosting
```

After successful deployment, Firebase will provide you with the URL to your live website.

## Project Structure

```
nathakrit-portfolio/
├── public/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer)
│   ├── pages/            # Page-level components (Home, Services, Portfolio, etc.)
│   ├── App.js            # Main application component and routing
│   └── index.js          # Entry point of the React application
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Customization

- **Content:** Update the text content in `src/pages/*.js` files with your actual information.
- **Images:** Replace placeholder images in `src/pages/Portfolio.js` and other relevant components with your project images.
- **Firebase Storage:** Integrate Firebase Storage for dynamic content like resume PDF and project images.
- **Advanced Features:** Implement the pre-loader, custom mouse cursor, and magnetic button effects as per the project goal.
- **Three.js Background:** Enhance the Three.js background effect in `src/pages/Home.js`.

## Contact

Nathakrit Chuajeen - nathakrit.cha@gmail.com

Project Link: [Your Repository Link Here]