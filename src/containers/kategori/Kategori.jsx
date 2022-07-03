import { HeroKategori, ListProduk, SubKategori } from '../../components';
import './Kategori.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Kategori = () => {
  const [subKategori, setSubKategori] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [produk, setProduk] = useState([]);
  const [kategoriImg, setKategoriImg] = useState([]);

  useEffect(() => {
    axios
      .get('../../api/data.json')
      .then((res) => {
        setSubKategori(res.data.subKategori);
        setProduk(res.data.produk);
        setKategori(res.data.kategori);
        setKategoriImg(res.data.kategori[0].img);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='mainKategori_container'>
      <HeroKategori
        kategori={kategori}
        kategoriImg={kategoriImg}
        setKategoriImg={setKategoriImg}
      />
      {/* <SubKategori subKategori={subKategori} /> */}
      <ListProduk produk={produk} />
    </main>
  );
};

export default Kategori;
