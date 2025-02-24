import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MoreVert, CheckCircle, Flag, PendingActions, Delete } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Pie, Bar } from 'react-chartjs-2';

// Styled Components
const StatusCard = styled(Card)(({ status }) => ({
  backgroundColor: status === 'Active' ? 'green' : status === 'Pending' ? 'blue' : status === 'Flagged' ? 'yellow' : 'red',
  color: status === 'Flagged' ? 'black' : 'white',
  textAlign: 'center',
  width: 150,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
}));

const ContentPart = () => {
  const [content, setContent] = useState([
    { id: 1, userId: '101', userName: 'John Doe', title: 'Sample content 1', description: 'This is a sample content', image: `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`, video: 'https://www.w3schools.com/html/movie.mp4', status: 'Pending', flagged: false, views: 100, likes: 10, dislikes: 2, comments: 5 },
    { id: 2, userId: '102', userName: 'Jane Doe', title: 'Sample content 2', description: 'This is another sample content', image: `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`, video: 'https://www.w3schools.com/html/movie.mp4', status: 'Flagged', flagged: true, views: 200, likes: 15, dislikes: 3, comments: 8 },
    { id: 3, userId: '103', userName: 'Alice', title: 'Inappropriate content', description: 'This content is inappropriate', image: `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`, video: 'https://www.w3schools.com/html/movie.mp4', status: 'Active', flagged: false, views: 300, likes: 20, dislikes: 5, comments: 10 },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ type: '', url: '' });

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleOpen = (type, url) => {
    setSelectedMedia({ type, url });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusChange = (id, status) => {
    setContent(content.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  const chartData = {
    labels: ['Active', 'Pending', 'Flagged', 'Removed'],
    datasets: [
      {
        label: 'Content Status',
        data: [
          content.filter(item => item.status === 'Active').length,
          content.filter(item => item.status === 'Pending').length,
          content.filter(item => item.status === 'Flagged').length,
          content.filter(item => item.status === 'Removed').length,
        ],
        backgroundColor: ['#4caf50', '#1976d2', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const monthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Content Published per Month',
        data: [3, 4, 1, 2, 5, 0, 3, 2, 4, 3, 1, 2], // dummy data for now
        backgroundColor: '#1976d2',
      },
    ],
  };

  return (
    <div className="content-moderation">
      <div className="status-cards" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {['Active', 'Pending', 'Flagged', 'Removed'].map((status, index) => (
          <StatusCard key={index} status={status}>
            <CardContent>
              <Typography variant="h6">{status}</Typography>
              <Typography variant="body2">{content.filter(item => item.status === status).length}</Typography>
            </CardContent>
          </StatusCard>
        ))}
      </div>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Content Analytics
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            width: '100%',
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '45%' }, height: 'auto' }}>
            <Pie data={chartData} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '45%' }, height: 'auto' }}>
            <Bar data={monthData} />
          </Box>
        </Box>
      </Box>

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
              <TableCell>Analytics</TableCell>
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
                  <span 
                    style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
                    onClick={() => handleOpen('image', item.image)}
                  >
                    View Image
                  </span>
                </TableCell>
                <TableCell>
                  <span 
                    style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
                    onClick={() => handleOpen('video', item.video)}
                  >
                    Play Video
                  </span>
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
                <TableCell>
                  <Box>
                    <Typography variant="body2">Views: {item.views}</Typography>
                    <Typography variant="body2">Likes: {item.likes}</Typography>
                    <Typography variant="body2">Dislikes: {item.dislikes}</Typography>
                    <Typography variant="body2">Comments: {item.comments}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedMedia.type === 'image' ? 'Image' : 'Video'}</DialogTitle>
        <DialogContent>
          {selectedMedia.type === 'image' ? (
            <img src={selectedMedia.url} alt="Content" style={{ width: '100%', height: 'auto' }} />
          ) : (
            <video controls style={{ width: '100%', height: 'auto' }}>
              <source src={selectedMedia.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContentPart;