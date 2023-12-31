


import React, { useReducer, createContext, useEffect, useState } from "react";


const initialState = {
  isLoggedIn: false,
  user: null,
};

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        ...initialState
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const signIn = (dispatch, userData) => {
  localStorage.setItem("userInfos", JSON.stringify(userData));
  return dispatch({
    type: "LOGIN_SUCCESS",
    payload: {
      user: userData
    }
  });
};

export const updateUserAfterCheckOut = (dispatch, userData) => {
  localStorage.setItem("userInfos", JSON.stringify(userData));
  return dispatch({
    type: "UPDATE_SUCCESS",
    payload: {
      user: userData
    }
  });
};

export const signOut = (dispatch) => {
  // localStorage.setItem("userInfos", JSON.stringify(initialState));
  return dispatch({
    type: "LOGOUT_SUCCESS"
  });
};

const AuthProvider = ({ children }) => {

  var userInfos = JSON.parse(localStorage.getItem('userInfos')) || {}

  const [persistedUser, setPersistedUser] = useState(userInfos);

  const persistedUserState = {
    isLoggedIn: persistedUser?(persistedUser.isLoggedIn? persistedUser.isLoggedIn : false) : false,
    user: persistedUser?(persistedUser.user ? persistedUser.user : null) :null
  };
  
  const [state, dispatch] = useReducer(reducer, persistedUserState);

  useEffect(() => {
    localStorage.setItem("userInfos", JSON.stringify(state))
    setPersistedUser(state.user);
  }, [state]);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export default AuthProvider;








// import React, { useReducer, createContext, useEffect, useState } from "react";


// const initialState = {
//   isLoggedIn: false,
//   user: null,
//   isLoggingIn: false
// };

// export const AuthStateContext = createContext();
// export const AuthDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_REQUEST":
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//         isLoggingIn: true
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         isLoggedIn: true,
//         user: action.payload.user,
//         isLoggingIn: false
//       };
//     case "LOGIN_FAILURE":
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//         isLoggingIn: false
//       };
//     case "LOGOUT_SUCCESS":
//       return {
//         ...state,
//         ...initialState
//       };
//     default:
//       throw new Error(`Unknown action: ${action.type}`);
//   }
// };

// export const signIn = (dispatch, userData) => {
//   localStorage.setItem("userInfos", JSON.stringify(userData));
//   return dispatch({
//     type: "LOGIN_SUCCESS",
//     payload: {
//       user: userData
//     }
//   });
// };

// export const signOut = (dispatch) => {
//   localStorage.clear();
//   return dispatch({
//     type: "LOGOUT_SUCCESS"
//   });
// };

// const AuthProvider = ({ children }) => {

//   var userInfos = JSON.parse(localStorage.getItem('userInfos')) || {}

//   const [persistedUser, setPersistedUser] = useState(userInfos);

//   const persistedUserState = {
//     ...initialState,
//     user: persistedUser,
//     isLoggedIn: false
//   };
  
//   const [state, dispatch] = useReducer(reducer, persistedUserState);

//   useEffect(() => {
//     localStorage.setItem("userInfos", JSON.stringify(state))
//     setPersistedUser(state.user);
//   }, [state]);

//   return (
//     <AuthDispatchContext.Provider value={dispatch}>
//       <AuthStateContext.Provider value={state}>
//         {children}
//       </AuthStateContext.Provider>
//     </AuthDispatchContext.Provider>
//   );
// };

// export default AuthProvider;