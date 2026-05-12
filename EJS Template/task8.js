/* Task 8: Dynamic Dashboards with Roles
Create a GET route at /admin-panel that passes a user object including a 
permissions array (e.g., permissions: ['read', 'delete', 'edit']).
Server Logic: Pass a user object with a specific set of allowed actions.
Template Logic: Use logic to check if a specific permission exists in the 
array (using .includes()). If 'delete' is present, show a red "Delete" button;
 if not, show "Access Denied."
Goal: Implement real-world authorization logic where the UI adapts based on a 
set of dynamic user privileges. */
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/admin-panel", (req, res) => {
  const adminUser = {
    username: "AdminMaster",
    role: "Admin",
    permissions: ["read", "delete", "edit"],
  };
  res.render('admin-panel',{user:adminUser})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
