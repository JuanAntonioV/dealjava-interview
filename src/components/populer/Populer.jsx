import './Populer.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ItemPopuler from './ItemPopuler';

export default function Populer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadProduk();
  }, []);

  const loadProduk = async () => {
    const res = await axios.get('http://localhost:3001/produk');
    setData(res.data);
  };

  return (
    <div className='populer_section'>
      <h1 className='judulPopuler'>Populer</h1>

      <div className='populer_container'>
        {data.map((items, index) => {
          if (items.rating == 5) {
            if (index < 3) {
              return <ItemPopuler key={index} items={items} />;
            }
          }
        })}
      </div>
    </div>
  );
}
