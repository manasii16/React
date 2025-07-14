### Navigating Around (Using React Router)

This application uses something called React Router to handle moving between different "pages" or sections without refreshing the whole browser. Think of it like this:


#### How It Works in This App 

-   <BrowserRouter>: This is like the main engine that watches the browser's address bar and makes sure React Router can do its job. It wraps your entire application.

-   <Routes>: Think of this as a big switchboard. It holds all the different "routes" (paths) that your app knows about.

-   <Route>: Each <Route> is a specific instruction: "If the address bar says /login, then show the Login component." Or, "If it says /, show the HomePage."

-   <Link>: When you click on a navigation item (like "TV Shows" in the Navbar), we use a special <Link> component instead of a regular <a> tag. This tells React Router to change the content smoothly without a full page refresh.

-   useNavigate (for more complex moves): Sometimes, after an action (like successfully logging in), you want to automatically jump to another page. That's where useNavigate comes in – it lets us programmatically tell the app to go to a different address.
