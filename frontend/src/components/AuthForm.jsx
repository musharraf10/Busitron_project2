import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
} from 'react-bootstrap';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import Oauth from './Oauth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const naviget = useNavigate();
  const [isRegister, setIsRegister] = useState();
  const [error, setError] = useState(''); // Error state

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError('');

    // ✅ Merge countryCode and phoneNumber before sending to backend
    // const mergedPhoneNumber = `${form.countryCode}${form.phoneNumber}`;

    // const finalData = {
    //   ...form,
    //   phoneNumber: mergedPhoneNumber,
    // };

    if (isRegister) {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/v1/user/register',
          form,
        );
        console.log(response);

        const data = response.data;

        if (data.success) {
          console.log(data);
          setForm({
            username: '',
            email: '',
            password: '',
          });
          naviget('/');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/v1/user/login',
          form,
        );
        const data = response.data;
        if (data.success) {
          console.log(data);
          setForm({
            email: '',
            password: '',
          });
          naviget('/');
        } else {
          console.log(data.error);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
    >
      <Card
        className="text-black m-5"
        style={{ borderRadius: '25px', maxWidth: '900px', width: '100%' }}
      >
        <Card.Body>
          <Row>
            <Col
              md={10}
              lg={6}
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-3">
                {isRegister ? 'Sign up' : 'Login'}
              </p>
              {error && <Alert variant="danger">{error}</Alert>}{' '}
              {/* Show error message if login fails */}
              <Form onSubmit={onSubmitHandler} style={{ width: '100%' }}>
                {isRegister && (
                  <div className="d-flex flex-row align-items-center mb-3">
                    <TextField
                      label="Your Name"
                      variant="outlined"
                      fullWidth
                      name="username"
                      value={form.username}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                )}

                <div className="d-flex flex-row align-items-center mb-3">
                  <TextField
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={form.email}
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-3">
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    value={form.password}
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                {/*{isRegister && (*/}
                {/*    <div className="d-flex align-items-center gap-2 mb-3">*/}
                {/*      /!* Country Code Dropdown *!/*/}
                {/*      <FormControl variant="outlined" style={{ width: "30%" }}>*/}
                {/*        <InputLabel>Code</InputLabel>*/}
                {/*        <Select name="countryCode" value={form.countryCode} onChange={onChangeHandler} label="Code">*/}
                {/*          <MenuItem value="+1">+1 (USA)</MenuItem>*/}
                {/*          <MenuItem value="+91">+91 (India)</MenuItem>*/}
                {/*          <MenuItem value="+44">+44 (UK)</MenuItem>*/}
                {/*          <MenuItem value="+61">+61 (Australia)</MenuItem>*/}
                {/*        </Select>*/}
                {/*      </FormControl>*/}

                {/*      /!* Phone Number Input *!/*/}
                {/*      <TextField*/}
                {/*          label="Phone Number"*/}
                {/*          type="tel"*/}
                {/*          variant="outlined"*/}
                {/*          fullWidth*/}
                {/*          name="phoneNumber"*/}
                {/*          value={form.phoneNumber}*/}
                {/*          onChange={onChangeHandler}*/}
                {/*          placeholder="9876543210"*/}
                {/*          required*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*)}*/}

                <Button
                  type="submit"
                  variant="primary"
                  className="mb-3"
                  size="lg"
                  style={{ width: '100%' }}
                >
                  {isRegister ? 'Register' : 'Login'}
                </Button>
              </Form>
              <p className="text-center">
                {isRegister
                  ? 'Already have an account?'
                  : "Don't have an account?"}{' '}
                <Button variant="link" onClick={toggleForm}>
                  {isRegister ? 'Login' : 'Sign up'}
                </Button>
              </p>
              <Oauth />
            </Col>

            <Col
              md={10}
              lg={6}
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                alt="auth illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AuthForm;
