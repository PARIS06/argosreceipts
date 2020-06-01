import jwtDecode from 'jwt-decode';

// Token checker
export const getAuthToken = () => {
    return localStorage.getItem('token');
 };
 
 export const setAuthToken = token => {
    localStorage.setItem('token', token);
 };
 
 export const removeAuthToken = () => {
    localStorage.removeItem('token');
 };
 
 export const isValidToken = () => {
    return new Promise((resolve, reject) => {
       // Check if token is present
       const currentTime = Date.now().valueOf() / 1000;
       const token = getAuthToken();
 
       if (!token) {
          reject();
          return;
       }
 
       const decodedToken = jwtDecode(token);
 
       // If token expired - remove it
       if (decodedToken.exp < currentTime) {
          removeAuthToken();
 
          reject();
          return;
       }
 
       resolve(token);
    });
 };
 