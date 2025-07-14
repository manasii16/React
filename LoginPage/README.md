# Simple Login App

Hey there! This is just a basic little web app where you can pretend to log in and out. The cool part? It actually remembers if you're logged in, even if you close your browser and come back!

## What You Can Do With It

-   Log In: You'll see a simple screen asking for an email and a password.
-   Smart Checking: Don't worry if you type something wrong! It'll give you a little nudge if your email doesn't look quite right or if your password isn't long enough (it needs to be at least 8 characters).
-   Welcome Home! Once you put in valid details, it'll whisk you away to a simple welcome page. It even says hello to you by name (well, the first part of your email address, anyway!).
-   Log Out Anytime: When you're done, there's a handy button on the welcome page to log right back out.
-   Sticky Login: This is neat! Even if you close the tab or restart your browser, if you logged in, you'll still be logged in when you return. No need to type your details again until you choose to log out.
-   Helpful Messages: If something's not quite right, little pop-up messages will guide you.

## How It's Put Together (For the Curious Minds)

This app is built using some cool tech, but don't worry, I'll keep it simple:

-   React: Think of this as the main drawing board for everything you see on the screen.
-   Hooks (like `useState` and `useEffect`): These are special tools in React that help the app remember things (like what you've typed or if you're logged in) and react to changes (like when the page first loads or when you log out).
    -   `useEffect` is especially clever here – it's what makes the app remember your login status even after you close the tab.
-   Local Storage: This is like a tiny sticky note pad built into your web browser. It's where the app writes down "Yep, this person is logged in!" so it remembers for later.
-   MUI (Material-UI): This is a library that gives us ready-made, good-looking buttons, text boxes, and other design elements, so everything looks nice without us having to draw it all from scratch.
-   CSS Modules: These are like little styling compartments. They make sure that the way we style one part of the app doesn't accidentally mess up another part.
-   Portals: This is a bit fancy! It's how those little "OK" pop-up messages show up perfectly on top of everything else, no matter what's going on underneath.

