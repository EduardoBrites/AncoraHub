import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="center">
      <img src={logo} alt="logo" className="logoMain" />
    </div>
  );
}

export default LandingPage;
