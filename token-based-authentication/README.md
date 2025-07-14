# Secure Login App

This is a web application that provides a secure way for users to log in and access a protected welcome page. It uses modern security practices to keep your session safe.

## What It Does

-   Login Screen: You start here, with fields for a username and password.
-   Secure Login:
    -   It checks your username and password against a pre-defined correct set.
    -   If they match, it creates a special, temporary "token" (like a digital key) for you.
    -   This token proves you're logged in and is stored securely in your browser.
    -   You're then taken to a private "Welcome" page.
-   Automatic Access: If you're already logged in (meaning you have a valid token), the app remembers this and takes you directly to the Welcome page when you open it, without needing to log in again.
-   Protected Welcome Page: This page can only be seen if you are properly logged in. If you try to go there without a valid token, it sends you back to the login screen.
-   Logout: On the Welcome page, there's a button to log out. This removes your digital key, and you'll need to log in again to access the welcome page.
-   Invalid Credentials: If you enter the wrong username or password, it will show an error message.

## How It's Built

This app uses some clever techniques to keep things secure and running smoothly:

-   React: The main tool for building what you see and interact with on the screen.
-   React Router: This helps the app act like it has different "pages" (Login, Welcome) and lets you move between them smoothly without refreshing the whole browser.
    -   BrowserRouter: The overall manager for navigation.
    -   Routes and Route: Define which path (like / or /welcome) shows which part of the app.
    -   useNavigate: A tool to automatically send you to a different page after an action, like logging in or out.
-   JSON Web Tokens (JWTs) & jose library: This is the secure part!
    -   When you log in, the app creates a unique, encrypted token. This token says "This user is valid, and they logged in at this time."
    -   It uses a "secret key" to make sure no one can fake these tokens.
    -   jose is a special library that helps create and check these tokens.
-   Local Storage: A small storage area in your browser where the app temporarily keeps your login token and username. This is how it remembers you're logged in, even if you close the tab.
-   Private Route: A special React component that acts like a bouncer. Before it shows the Welcome page, it checks if you have a valid token. If not, it sends you away (back to Login).
-   State (React Hooks - useState, useEffect): These help the app remember what's happening (like what you've typed, if there's an error, or if you're logged in) and react to changes.
    -   useEffect is used to check your token when the page loads, so you don't have to log in repeatedly.
-   MUI (Material-UI): Provides nice-looking pre-made components like buttons, text fields, and navigation bars, so the app looks good.

Default Login Details:
-   Username: Manasi
-   Password: manasi@1234