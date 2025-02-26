import React, { useState } from "react";
import {
    Card, CardContent, Button, Select, MenuItem, FormControl, InputLabel,
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Snackbar
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const UserManagement = () => {
    const [filterRole, setFilterRole] = useState("All");
    const [users, setUsers] = useState([
        { id: 1, name: "Alice Johnson", designation: "Manager", role: "Admin", status: "Active" },
        { id: 2, name: "Bob Smith", designation: "Editor", role: "Content Curator", status: "Active" },
        { id: 3, name: "Charlie Davis", designation: "Subscriber", role: "Subscriber", status: "Active", date: "2025-02-18", time: "10:00 AM", endTime: "6:00 PM", notification: "Monthly", ads: "Yes" },
        { id: 4, name: "David Williams", designation: "Assistant", role: "Content Curator", status: "Active" },
        { id: 5, name: "Emma Brown", designation: "Support", role: "Admin", status: "Active" },
        { id: 6, name: "Frank Thomas", designation: "Viewer", role: "Subscriber", status: "Active", date: "2025-03-01", time: "9:30 AM", endTime: "5:30 PM", notification: "Yearly", ads: "No" },
        { id: 7, name: "Grace White", designation: "Analyst", role: "Content Curator", status: "Active" },
        { id: 8, name: "Henry Green", designation: "Subscriber", role: "Subscriber", status: "Active", date: "2025-02-25", time: "11:00 AM", endTime: "7:00 PM", notification: "Monthly", ads: "Yes" },
    ]);

    const [editUser, setEditUser] = useState(null);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditClick = (user) => {
        setEditUser(user);
        setOpenEdit(true);
    };

    const handleEditChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    const handleSaveEdit = () => {
        setUsers(users.map(user => user.id === editUser.id ? editUser : user));
        setOpenEdit(false);
        setOpenAlert(true);
    };

    const handleToggleStatus = (id) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
        ));
    };

    const filteredUsers = filterRole === "All" ? users : users.filter(user => user.role === filterRole);

    return (
        <Card sx={{ p: 3, maxWidth: "100%", mx: "auto", mt: 3, boxShadow: 3 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>User & Content Management</h2>
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel  sx={{padding:4,pt:0,mt:-0.8}} >Filter By Role</InputLabel>
                    <Select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Content Curator">Content Curator</MenuItem>
                        <MenuItem value="Subscriber">Subscriber</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <CardContent>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc", fontSize: "0.875rem" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>ID</th>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Name</th>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Designation</th>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Role</th>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Status</th>
                            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} style={{ textAlign: "center" }}>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>{user.id}</td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>{user.name}</td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>{user.designation}</td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>{user.role}</td>
                                <td 
                                    style={{ 
                                      padding: "8px", border: "1px solid #ddd", cursor: "pointer", fontWeight: "bold", color: user.status === "Active" ? "green" : "red" }}
                                    onClick={() => handleToggleStatus(user.id)}
                                >
                                    {user.status}
                                </td>
                                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                    <IconButton color="primary" onClick={() => handleEditClick(user)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(user.id)}>
                                        <Delete />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardContent>

            <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    {editUser && (
                        <>
                            <TextField label="Name" name="name" fullWidth margin="dense" value={editUser.name} onChange={handleEditChange} />
                            <TextField label="Designation" name="designation" fullWidth margin="dense" value={editUser.designation} onChange={handleEditChange} />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={openAlert} autoHideDuration={3000} onClose={() => setOpenAlert(false)} message="User details updated successfully!" />
        </Card>
    );
};

export default UserManagement;