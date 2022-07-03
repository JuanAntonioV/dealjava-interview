import ItemDeals from './ItemDeals';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function NewDeal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios
    //   .get('http://localhost:3001/produk')
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
    loadProduk();
  }, []);

  const loadProduk = async () => {
    const res = await axios.get('http://localhost:3001/produk');
    setData(res.data);
  };

  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  return (
    <div className='dealsTerbaru'>
      <h1 className='judulDeals'>Deal Terbaru</h1>

      <div className='dealsItems'>
        {data.map((items, index) => {
          var hitDates = new Date(items.post) || {};
          if (hitDates >= startDate && hitDates <= endDate) {
            // return the items max 6
            if (index < 6) {
              return <ItemDeals items={items} key={index} />;
            }
          }
        })}
      </div>
    </div>
  );
}
