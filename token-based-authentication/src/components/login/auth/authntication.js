const USER = { username: "admin", password: "password123" };

const makeToken = () => btoa(`${USER.username}:${Date.now()}:${Math.random()}`);

export function login(username, password) {
  if (username === USER.username && password === USER.password) {
    const token = makeToken();
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return true; 
  }
  return false; 
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem("token"));
}

export function getUsername() {
  return localStorage.getItem("username");
}
