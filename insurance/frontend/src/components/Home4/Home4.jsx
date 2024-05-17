import React, { useEffect, useState } from 'react';
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Service from '../Services';
import Footer from '../Footer/Footer';
import CustomNavbar from '../Navbar1'; // Assuming this is the correct path to CustomNavbar

function Home() {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    setUserRole(storedUserRole);
  }, []);

  return (
    <div>
      <Minibar />
      <CustomNavbar userRole='agentassurance' /> {/* Pass userRole as a prop */}
      <Homes1 />
      <br /> <br /> <br />
      <Service />
      <div id='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
