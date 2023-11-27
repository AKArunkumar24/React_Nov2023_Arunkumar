import React from 'react';
import Navbar from './navbar';
import ProductCatalog from './ProductCatalog';

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1528459584353-5297db1a9c01?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, height: '150vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginTop: '80px' }}>
        <h1 style={{ color: 'black', fontSize: '4rem', textAlign: 'center' }}>Welcome to GlamMart!</h1>
        <p style={{ color: 'indigo', fontSize: '2rem', textAlign: 'center' }}><b>We are a leading provider of Beauty products.</b></p>&nbsp;
        <ul style={{ color: 'black', fontSize: '1.5rem', textAlign: 'center', height: '20%' }}>
          <li><b>"Beauty is power; a smile is its sword." - John Ray</b> </li>
          <li><b>"The best thing is to look natural, but it takes makeup to look natural." - Calvin Klein</b></li>
          <li><b>"Invest in your skin. It is going to represent you for a very long time." - Linden Tyler</b></li>
        </ul>
      </div>
      <ProductCatalog />

      

    
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', marginTop: '30px' }}>
        <div className="bb" style={{ textAlign: 'center', margin: '0 90px', backgroundColor: 'white' }}>

          <img src="https://glammart.in/wp-content/uploads/elementor/thumbs/Free-shipping-qd2ih62l4rgnvrvyrtk92u1qbudknt5xlohm9iui8w.png" alt="Beauty Product 3" style={{ width: '150px', borderRadius: '20px' }} />

          <p style={{ color: 'black', textAlign: 'center' }}><b>Free Shipping</b></p>

        </div>
        <div className="aaa" style={{ textAlign: 'center', margin: '0 20px', backgroundColor: 'white' }}>
          <img src="https://glammart.in/wp-content/uploads/elementor/thumbs/15-day-return-qd2ihars2xn3htp50dldxav1arqeqaolabr1nwnjds.png" alt="Beauty Product 4" style={{ width: '150px', borderRadius: '20px' }} />
          <p style={{ color: 'black', textAlign: 'center' }}><b>15-Day Return</b></p>
        </div>
      </div>

     
      <footer style={{ background: 'black', color: 'white', width: '98%', padding: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h2>About Us</h2>
            <p>Discover the best in beauty and skincare with Glammart. We are committed to providing high-quality products to enhance your natural beauty.</p>
          </div>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:info@glammart.com" style={{ color: 'white', textDecoration: 'none' }}>info@glammart.com</a></p>
            <p>Phone: 044-4545 4545</p>
          </div>
          <div style={{ flex: 1 }}>
            <h2>Follow Us</h2>
            <p>Stay connected and follow us on social media for the latest updates:</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <a href="https://twitter.com/glammart" target="_blank" rel="noopener noreferrer">
                <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" alt="Twitter" style={{ width: '60px', height: '50px', marginRight: '10px' }} />
              </a>
              <a href="https://www.instagram.com/glammart/" target="_blank" rel="noopener noreferrer">
                <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" alt="Instagram" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              </a>
              <a href="https://www.facebook.com/glammart/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-6.png" alt="Facebook" style={{ width: '50px', height: '50px' }} />
              </a>
            </div>
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>&copy; 2023 Copyrights @GlamMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
