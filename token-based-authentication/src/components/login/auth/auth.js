import { SignJWT, jwtVerify } from "jose";  

export const userData = { 
    username: "Manasi", 
    password: "manasi@1234" 
};

const secret_key = new TextEncoder().encode("secret-key");  //Uint8Array

export async function generate_token(username){
  return await new SignJWT({ sub: username })
    .setProtectedHeader({ alg: "HS256", typ: "jwt" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret_key);
}

export async function validate_token(token){
  try{
    await jwtVerify(token, secret_key);
    return true;
  } 
  catch{
    return false;
  }
}

export const store_userData=(token, username)=>{
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
}

export const clear_userData=() => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}

export const get_token=()=>{
  return localStorage.getItem("token");
}

export const get_username = () => {
  return localStorage.getItem("username");
}

export const logout =() => {
  return clear_userData();
} 