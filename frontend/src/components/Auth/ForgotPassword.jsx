import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [newpassword, setNewpassword] = React.useState('');
  const [otpSent, setOtpSent] = React.useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      console.log('Email is required to send OTP.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/send-restotp-password',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = response.data;
      if (data.success) {
        console.log(response.data);

        setOtpSent(true);
      }
      console.log('OTP sent to:', email);
    } catch (error) {
      console.log('Error sending OTP:', error.response?.data || error.message);
    }
  };

  const handleForgotPasswordSave = async () => {
    if (!email || !otp || !newpassword) {
      console.log('All fields are required!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/resetpassword',
        { email, otp, newpassword },
      );

      const data = response.data;
      if (data.success) {
        console.log(response.data);
        alert('Password reset successfully!');
        navigate('/login');
      }
    } catch (error) {
      console.log('Error sending OTP:', error.response?.data || error.message);
    }

    console.log('Forgot Password Updated Successfully!');
    console.log('Email:', email, 'OTP:', otp, 'New Password:', newpassword);
  };

  return (
    <Card
      sx={{ minWidth: 400, maxWidth: 600 }}
      style={{ margin: 'auto', paddeing: '20px' }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Reset Password</Typography>
        <Typography level="body-sm">
          Enter your email and the OTP you received to reset your password.
        </Typography>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ mt: 2 }}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            size="sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <Button
          size="sm"
          variant="outlined"
          sx={{ width: 'auto', marginTop: 2 }}
          onClick={handleSendOtp}
        >
          Get OTP
        </Button>
        <FormControl sx={{ marginTop: 2 }}>
          <FormLabel>OTP</FormLabel>
          <Input
            size="sm"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
        </FormControl>
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input
            size="sm"
            type="password"
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}
            placeholder="Enter new password"
          />
        </FormControl>
      </Stack>
      <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
          <Button size="sm" variant="outlined" color="neutral">
            Cancel
          </Button>
          <Button size="sm" onClick={handleForgotPasswordSave}>
            Save
          </Button>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default ForgotPassword;