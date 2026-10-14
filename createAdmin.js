import bcrypt from "bcryptjs";
import { getUsers, saveUsers } from "./data/users.js";

const email = "muhammad@gmail.com";
const password = "77327732";

async function createAdmin() {
  const users = getUsers();

  const existingAdmin = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (existingAdmin) {
    console.log("Admin аллакай вуҷуд дорад.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = {
    id: Date.now().toString(),
    name: "Admin",
    surename: "",
    email,
    password: hashedPassword,
    xp: 0,
    level: "Admin",
    role: "admin",
  };

  users.push(admin);

  saveUsers(users);

  console.log("Admin бомуваффақият сохта шуд.");
  console.log("Email:", email);
  console.log("Password:", password);
}

createAdmin();