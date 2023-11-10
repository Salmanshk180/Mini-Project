import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { adminSignUp } from "../clientSide/redux/actions/adminAuthAction";
import { SyncLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';

const VerificationContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    to right,
    #4a90e2,
    #8253de
  ); /* Same background as the signup page */
`;

const VerifyCard = styled(Card)`
  width: 300px;
  padding: 20px;
`;

const VerifyText = styled.p`
  text-align: center;
  margin-bottom: 15px;
`;

const LoaderContainer = styled.div`
  text-align: center;
`;

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOTP] = useState("");
  const email = location.state?.email;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/admin/verify-otp', {
        email,
        otp,
      });

      if (response.status === 200) {
        setLoading(true);
        // On successful verification, proceed to the login page after a delay
        setTimeout(() => {
          setLoading(false);
          navigate('/admin/login');
        }, 4000);
      }
    } catch (error) {
      toast.error("Wrong OTP, please try again");
      console.error('OTP verification failed:', error);
      setLoading(false);
    }
  };

   return (
    <VerificationContainer fluid>
      {loading ? (
        <LoaderContainer>
          <SyncLoader color={"#4a9022"} loading={loading} />
        </LoaderContainer>
      ) : (
        <VerifyCard>
          <VerifyText>
            Enter the OTP sent to your email for verification:
          </VerifyText>
          <Form onSubmit={handleVerification}>
            <Form.Group>
              <Form.Control
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                placeholder="Enter OTP"
              />
            </Form.Group>
            <Button className="w-100 mt-2" type="submit">
              Verify OTP
            </Button>
            <Button className="mt-2" onClick={() => window.history.back()}>
              Go back
            </Button>
          </Form>
        </VerifyCard>
      )}
    </VerificationContainer>
  );
};

export default Verification;
