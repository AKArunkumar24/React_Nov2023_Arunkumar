import React from 'react';
import Navbar from './navbar';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: 'Lakme Moisturizer',
      name1: 'Help You from Dryness',
      price: "Price: 110.00",
      image: 'https://static.javatpoint.com/list/images/list-of-cosmetic-products11.jpg',
      link: 'https://www.amazon.in/Lakme-Complexion-Care-Cream-Beige/dp/B01BBNF6C6/ref=sr_1_6?crid=QZIA1F126WHJ&keywords=lakme%2Bproducts&qid=1700801369&sprefix=lakme%2Bpro%2Caps%2C345&sr=8-6&th=1',
    },
    {
      id: 2,
      name: 'Lakme Face Serum',
      name1: 'Orange Edition',
      price: "Price: 570.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/serumsss_400x500_8b543622-cb07-43d4-b16f-c030a61335ce_400x.jpg?v=1679910639',
      link: 'https://www.amazon.in/Vitamin-Nourished-Bright-Antioxidant-Extract/dp/B0932SKNJ7/ref=sr_1_19?crid=QZIA1F126WHJ&keywords=lakme+products&qid=1700801369&sprefix=lakme+pro%2Caps%2C345&sr=8-19',
    },
    {
      id: 3,
      name: 'Lakme Lipstick',
      price: "Price: 275.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/29663_H-8901030974021_400x.jpg?v=1695793993',
      link: 'https://www.amazon.in/Lakme-Forever-Liquid-Colour-Carpet/dp/B0828W3NL3/ref=sr_1_29?crid=QZIA1F126WHJ&keywords=lakme%2Bproducts&qid=1700801369&sprefix=lakme%2Bpro%2Caps%2C345&sr=8-29&th=1',
    },
    {
      id: 4,
      name: 'Lakme Cosmetics Orange Edition',
      name1: 'Combo Pack',
      price: "Price: 750.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/3_235ab503-747c-4b79-87ab-05b968abb5c3_400x.jpg?v=1684156853',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 5,
      name: 'Lakme Foundation',
      
      price: "Price: 175.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/29685_H-8901030971082_400x.jpg?v=1695816973',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 6,
      name: 'Lakme Gliterrle',
      name1: 'Smudje Proof',
      price: "Price: 350.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/29657_H-8901030973727_400x.jpg?v=1695810502',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 7,
      name: 'Lakme EyePaint',
      name1: 'Absolute Gray',
      price: "Price: 550.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/29625_H-8901030968686_400x.jpg?v=1695813767',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 8,
      name: 'Lakme Eyeconic',
      name1: 'Twin Pack',
      price: "Price: 360.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/24272_H_8901030707988_400x.jpg?v=1698905885',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 9,
      name: 'Lakme Absolute Matterral',
      name1: 'Skin Natural Mousse',
      price: "Price: 655.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/22770_H_8901030366109_600x.jpg?v=1698915172',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 10,
      name: 'Lakme Absolute Compact',
      name1: 'Dry and Wet Compact',
      price: "Price: 745.00",
      image: 'https://www.lakmeindia.com/cdn/shop/files/22682_H_8901030366741_600x.jpg?v=1698913175',
      link: 'https://www.lakmeindia.com/',
    },
    {
      id: 11,
      name: 'Lakme Face Pack',
      name1: ' Pomogranate Mask',
      price: "Price: 100.00",
      image: 'https://www.lakmeindia.com/cdn/shop/products/Lakme_Blush_and_Glow_Pomegranate_Sheet_Mask_600x.jpg?v=1603193636',
      link: 'https://www.lakmeindia.com/',
    },
    {
        id: 12,
        name: 'Lakme Absolute',
        name1: 'Absolute Red- Best Seller ',
        price: "Price: 213.00",
        image: 'https://www.lakmeindia.com/cdn/shop/products/LakmeAbsoluteGelStylistNailColorScarletRed_600x.png?v=159834303',
        link: 'https://www.lakmeindia.com/',
      },
   
  ];

  

  return (
    <div>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ textAlign: 'center', margin: '0 20px', border: '3px solid black', padding: '10px', borderRadius: '10px' }}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={product.name} style={{ width: '200px', borderRadius: '20px' }} />
            </a>
            <p style={{ color: 'black', textAlign: 'center' }}>{product.name}</p>
            <p style={{ color: 'black', textAlign: 'center' }}>{product.name1}</p>
            <p style={{ color: 'black', textAlign: 'center' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
