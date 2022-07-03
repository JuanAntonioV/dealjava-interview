import { useEffect } from 'react';
import './SubKategori.css';

export default function MenuKategori({ subKategori }) {
  const btnSubKategori = document.getElementsByClassName('sub_kategori');

  useEffect(() => {
    for (let i = 0; i < btnSubKategori.length; i++) {
      btnSubKategori[i].addEventListener('click', function () {
        for (let j = 0; j < btnSubKategori.length; j++) {
          btnSubKategori[j].classList.remove('activeSubKategori');
        }
        this.classList.add('activeSubKategori');
      });
      btnSubKategori[0].classList.add('activeSubKategori');
    }
  });

  return (
    <div className='subKategori_container'>
      {subKategori.map((items, index) => (
        <button className='sub_kategori' key={index}>
          <img src={items.img} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>{items.nama}</p>
        </button>
      ))}
    </div>
  );
}
