import { Button } from 'react-bootstrap';
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Oauth = ({isRegister}) => {
  const navigate = useNavigate(); 

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = new getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const form = {
        // ✅ Changed 'from' to 'form'
        username: result.user.displayName,
        email: result.user.email,
      };

      const resp = await axios.post(
        'http://localhost:4000/api/v1/user/google',
        form,
        {
          withCredentials: true, // ✅ Important for cookies
        },
      );

      if (resp.data.success) {
        console.log(resp.data);
        navigate('/admin');
      }
    } catch (error) {
      console.error(
        'Google Auth Error:',
        error.response?.data || error.message,
      );
    }
  };

  return (
    <>
      <Button className='bg-danger' onClick={handleGoogleClick} style={{width:'100%', border:'none' ,alignContent:'center', justifyContent:"center"}}>
        <GoogleIcon className='text-white '/> {isRegister ? 'Sign up' : 'Login'} with Google
      </Button>
    </>
  );
};

export default Oauth;
