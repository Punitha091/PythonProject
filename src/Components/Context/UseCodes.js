// import React, { createContext, useEffect, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = (props) => {
//     const [token, setToken] = useState(localStorage.getItem("Welcome to first API"));
//     useEffect(() => {
//         const fetchUser = async () => {
//             const requestOptions = {
//                 method: "get",
//                 headers: {
//                     "Content-type": "application/json",
//                     Authorization: "Bearer" + token,
//                 },
//             };
//             const response = await fetch("/api", requestOptions);

//             if (!response.ok) {
//                 setToken();
//             };
//             localStorage.setItem("Welcome to first API", token);
//         };
//         fetchUser();
//     }, [token]);
//     return (
//         <UserContext.Provider value={[]}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }

