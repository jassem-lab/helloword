const token = "ADMINREDUCER/TOKEN";
const userId = "ADMINREDUCER/USERID";
const error = "ADMINREDUCER/ERROR";
const authentification = "ADMINREDUCER/AUTHENTIFICATION";
const menu = "ADMINREDUCER/MENU";

let initialState = {
  userId: null,
  token: null,
  login: "jassem",
  validation: true,
  error: null,
  photos: [
    {
      id: 0,
      img: require("./img/photos/1.jpg"),
      imdDescr: "I love ocean!",
    },
    {
      id: 1,
      img: require("./img/photos/2.jpg"),
      imdDescr: "my friend",
    },
    {
      id: 2,
      img: require("./img/photos/3.jpg"),
      imdDescr: "me, my self and i",
    },
    {
      id: 3,
      img: require("./img/photos/4.jpg"),
      imdDescr: "my love",
    },
    {
      id: 4,
      img: require("./img/photos/5.jpg"),
      imdDescr: "again ocean",
    },
    {
      id: 5,
      img: require("./img/photos/6.jpg"),
      imdDescr: "like a model",
    },
  ],
  feedbacks: [],
  menuOpened: false,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case token:
      return {
        ...state,
        token: action.jwtToken,
      };
    case userId:
      return {
        ...state,
        userId: action.id,
      };
    case authentification:
      return {
        ...state,
        validation: action.status,
      };
    case error:
      return {
        ...state,
        error: action.errorMessage,
      };
    case menu:
      return {
        ...state,
        menuOpened: action.currentMenuState,
      };
    default:
      return state;
  }
};

export const setToken = (jwtToken) => {
  return {
    type: token,
    jwtToken,
  };
};

export const setUserId = (id) => {
  return {
    type: userId,
    id,
  };
};

export const setAuth = (status) => {
  return {
    type: authentification,
    status,
  };
};

export const setError = (errorMessage) => {
  return {
    type: error,
    errorMessage,
  };
};

export const setMenuState = (currentMenuState) => {
  return {
    type: menu,
    currentMenuState,
  };
};

const storageName = "userData";

export const login = (jwtToken, id) => {
  return (dispatch) => {
    dispatch(setToken(jwtToken));
    dispatch(setUserId(id));
    dispatch(setAuth(true));
    localStorage.setItem(storageName, JSON.stringify({ userId: id, token: jwtToken }));
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUserId(null));
    dispatch(setAuth(false));
    localStorage.removeItem(storageName);
  };
};

export default AdminReducer;
