import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Mihai",
      email: "mita@yahoo.com",
      password: hashSync("password", 10),
      role: "admin",
    },
    {
      name: "User",
      email: "user@example.com",
      password: hashSync("password", 10),
      role: "user",
    },
  ],
};

export default sampleData;
