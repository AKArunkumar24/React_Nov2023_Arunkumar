import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './navbar';

const ProductCatalog = () => {
  // Dummy product data (replace this with your actual product data)
  const products = [
    
    {
      id: 1,
      name: 'Product 1',
      image: 'https://static.javatpoint.com/list/images/list-of-cosmetic-products11.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://www.lakmeindia.com/cdn/shop/files/serumsss_400x500_8b543622-cb07-43d4-b16f-c030a61335ce_400x.jpg?v=1679910639',
      
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://www.lakmeindia.com/cdn/shop/files/29663_H-8901030974021_400x.jpg?v=1695793993',
    },
    
    {
      id: 4,
      name: 'Product 4',
      image: 'https://www.lakmeindia.com/cdn/shop/files/3_235ab503-747c-4b79-87ab-05b968abb5c3_400x.jpg?v=1684156853',
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://www.lakmeindia.com/cdn/shop/files/29685_H-8901030971082_400x.jpg?v=1695816973',
      
    },
    
    // Add more products as needed
  ];
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      <Navbar/>
      {products.map(product => (
        <div key={product.id} style={{ textAlign: 'center', margin: '0 20px' }}>
          <img src={product.image} alt={product.name} style={{ width: '150px', borderRadius: '20px' }} />
          <p style={{ color: 'black', textAlign: 'center' }}>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url("https://static.desty.app/desty-page/I1UGGyDaCD0ODbWnIgD2o.image/png?x-oss-process=image/resize,w_800/format,webp")`, height: '150vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginTop: '80px' }}>
        <h1 style={{ color: 'black', fontSize: '4rem', textAlign: 'center' }}>Welcome to GlamMart!</h1>
        <p style={{ color: 'indigo', fontSize: '2rem', textAlign: 'center' }}><b>We are a leading provider of Beauty products.</b></p>&nbsp;
        <ul style={{ color: 'black', fontSize: '1.5rem', textAlign: 'center', height: '200%' }}>
          <li><b>"Beauty is power; a smile is its sword." - John Ray</b> </li>
          <li><b>"The best thing is to look natural, but it takes makeup to look natural." - Calvin Klein</b></li>
          <li><b>"Invest in your skin. It is going to represent you for a very long time." - Linden Tyler</b></li>
        </ul>
      </div>
      
       {/* Additional Images Section */}
       <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', margin: '0 20px' }}>
          <img src="https://glammart.in/wp-content/uploads/elementor/thumbs/Free-shipping-qd2ih62l4rgnvrvyrtk92u1qbudknt5xlohm9iui8w.png" alt="Beauty Product 3" style={{ width: '150px', borderRadius: '20px' }} />
          <p style={{ color: 'black', textAlign: 'center' }}>Free Shipping</p>
        </div>
        <div style={{ textAlign: 'center', margin: '0 20px' }}>
          <img src="https://glammart.in/wp-content/uploads/elementor/thumbs/15-day-return-qd2ihars2xn3htp50dldxav1arqeqaolabr1nwnjds.png" alt="Beauty Product 4" style={{ width: '150px', borderRadius: '20px' }} />
          <p style={{ color: 'black', textAlign: 'center' }}>15-Day Return</p>
        </div>
      </div>
     

      {/* Product Catalog Section */}
      <ProductCatalog />

      {/* Footer Section */}
      <footer style={{ background: 'black', color: 'white', width: '1500px', padding: '0px', textAlign: 'center' }}>
        <p>Contact us: 044-4545 4545 </p>
        <p>Visit our website: <a href="https://www.Glammart.com" style={{ color: 'white' }}>www.Glammart.com</a></p>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<HomePage />);

export default HomePage;
