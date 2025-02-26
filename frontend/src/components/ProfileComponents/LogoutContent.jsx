import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutContent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/"); 
  }, [navigate]);

  return null; 
}

export default LogoutContent;

