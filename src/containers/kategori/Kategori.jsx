import { HeroKategori, ListProduk, SubKategori } from '../../components';
import './Kategori.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Kategori = () => {
  // const [subKategori, setSubKategori] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [produk, setProduk] = useState([]);
  const [kategoriImg, setKategoriImg] = useState([]);

  useEffect(() => {
    loadProduk();
    loadKategori();
    loadKategoriImg();

    // axios
    //   .get('http://localhost:3001/produk')
    //   .then((res) => {
    //     // setSubKategori(res.data.subKategori);
    //     setProduk(res.data);
    //     // setKategori(res.data.kategori);
    //     // setKategoriImg(res.data.kategori[0].img);
    //   })
    //   .catch((err) => console.log(err));

    // axios
    //   .get('http://localhost:3001/kategori')
    //   .then((resKategori) => {
    //     setKategori(resKategori.data);
    //   })
    //   .catch((err) => console.log(err));

    // axios
    //   .get('http://localhost:3001/kategori')
    //   .then((res) => {
    //     setKategoriImg(res.data[0].img);
    //   })
    //   .catch((err) => console.log(err));

    // axios
    //   .get('http://localhost:3001/subKategori')
    //   .then((resSubKategori) => {
    //     // setSubKategori(res.data.subKategori);
    //     setSubKategori(resSubKategori.data);
    //     // setKategori(res.data.kategori);
    //     // setKategoriImg(res.data.kategori[0].img);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const loadProduk = async () => {
    const res = await axios.get('http://localhost:3001/produk');
    setProduk(res.data);
  };

  const loadKategori = async () => {
    const res = await axios.get('http://localhost:3001/kategori');
    setKategori(res.data);
  };

  const loadKategoriImg = async () => {
    const res = await axios.get('http://localhost:3001/kategori');
    setKategoriImg(res.data[0].img);
  };

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
