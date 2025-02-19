import React, { useState } from 'react';
// import './ContentModeration.css';
import { Button, Card, CardContent, Typography, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box } from '@mui/material';
import { MoreVert, CheckCircle, Flag, PendingActions, Delete } from '@mui/icons-material';

const ContentModeration = ({props}) => {
  const [content, setContent] = useState([
    { id: 1, userId: '101', userName: 'John Doe', title: 'Sample content 1', description: 'This is a sample content', image: 'https://via.placeholder.com/150', video: 'https://www.w3schools.com/html/movie.mp4', status: 'Pending', flagged: false },
    { id: 2, userId: '102', userName: 'Jane Doe', title: 'Sample content 2', description: 'This is another sample content', image: 'https://via.placeholder.com/150', video: 'https://www.w3schools.com/html/movie.mp4', status: 'Flagged', flagged: true },
    { id: 3, userId: '103', userName: 'Alice', title: 'Inappropriate content', description: 'This content is inappropriate', image: 'https://via.placeholder.com/150', video: 'https://www.w3schools.com/html/movie.mp4', status: 'Active', flagged: false },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleStatusChange = (id, status) => {
    setContent(content.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="content-moderation">
      <h2>Content Moderation Panel</h2>
      <div className="status-cards" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {['Active', 'Pending', 'Flagged', 'Removed'].map((status, index) => (
          <Card key={index} sx={{ width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: status === 'Active' ? 'green' : status === 'Pending' ? 'blue' : status === 'Flagged' ? 'yellow' : 'red', color: status === 'Flagged' ? 'black' : 'white' }}>
            <CardContent>
              <Typography variant="h6">{status}</Typography>
              <Typography variant="body2">{content.filter(item => item.status === status).length}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="content table">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>User Id</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Video</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <span style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>View Image</span>
                </TableCell>
                <TableCell>
                  <span style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Play Video</span>
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleMenuOpen}>
                    <MoreVert />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={() => { handleStatusChange(item.id, 'Flagged'); handleMenuClose(); }}>
                      <Flag style={{ marginRight: 5 }} /> Flag
                    </MenuItem>
                    <MenuItem onClick={() => { handleStatusChange(item.id, 'Removed'); handleMenuClose(); }}>
                      <Delete style={{ marginRight: 5 }} /> Remove
                    </MenuItem>
                  </Menu>
                </TableCell>
                <TableCell>
                  {item.status === 'Pending' ? (
                    <Button variant="contained" color="success" onClick={() => handleStatusChange(item.id, 'Active')}>
                      <CheckCircle style={{ marginRight: 5 }} /> Approve
                    </Button>
                  ) : (
                    <Button variant="contained" color="error" onClick={() => handleStatusChange(item.id, 'Pending')}>
                      <PendingActions style={{ marginRight: 5 }} /> Pending
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContentModeration;
