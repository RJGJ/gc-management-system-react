// import { createStore } from "vuex";
// import { State, User } from "./interfaces";

// const store = createStore({
//   state() {
//     return {
//       user: <User>{
//         email: "",
//         access_token: "",
//         userId: 0,
//       },
//     };
//   },

//   mutations: {
//     mutUpdateUser(state: State, user: User) {
//       state.user = user;

//       if (state.user.access_token)
//         localStorage.setItem("token", state.user.access_token);
//     },

//     mutClearUser(state: State) {
//       state.user = {
//         email: "",
//         userId: 0,
//         role: 0,
//         access_token: null,
//         firstName: "",
//         lastName: "",
//         created_at: "",
//         is_admin: 0,
//         updated_at: "",
//       };

//       if (localStorage.getItem("token")) localStorage.removeItem("token");
//     },
//   },

//   actions: {
//     updateUser: async (context, user: User) => {
//       context.commit("mutUpdateUser", user);
//     },

//     clearUser: async (context) => {
//       context.commit("mutClearUser");
//     },
//   },

//   getters: {
//     getUser: (state) => {
//       return state.user;
//     },
//   },
// });

// export default store;
