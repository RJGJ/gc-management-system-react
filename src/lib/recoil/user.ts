import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    email: "",
    userId: 0,
    role: 0,
    access_token: "",
    firstName: "",
    lastName: "",
    created_at: "",
    is_admin: 0,
    updated_at: "",
  },
});

export default userState;
