import './HeroKategori.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function HeroKategori({
  kategori,
  kategoriImg,
  setKategoriImg,
}) {
  const [item, setItem] = useState([]);
  let { id } = useParams();
  let history = useNavigate();
  const kategori_pilihan = document.getElementById('list_kategori');

  useEffect(() => {
    kategori.find((items) => items.nama === id && setItem(items));
  });

  const changeKategori = () => {
    history('/kategori/' + kategori[kategori_pilihan.value - 1].nama);

    if (kategori_pilihan.value) {
      setKategoriImg(kategori[kategori_pilihan.value - 1].img);
    }
  };

  return (
    <div className='hero_container'>
      <div className='hero_kiri'>
        <select
          name='kategori'
          id='list_kategori'
          value={item.id}
          onChange={() => {
            changeKategori();
          }}
        >
          {kategori.map((item) => {
            return (
              <option value={item.id} id='pilihan_kategori' key={item.id}>
                {item.nama}
              </option>
            );
          })}
        </select>
      </div>

      <div className='hero_kanan'>
        <img src={kategoriImg} alt='Kategori Image' id='imgKategori' />
      </div>
    </div>
  );
}
