import { Component } from 'react';
import './Koleksi.css';

export default class Koleksi extends Component {
  render() {
    const imgKategori = [
      'https://s3.dealjava.com/content/thumb_small/11f9b3c88876857055af40d6bf56e55b.jpg',
      'https://s3.dealjava.com/content/thumb_small/7a3c54db2ba3475977b07967143cf560.jpg',
      'https://s3.dealjava.com/content/thumb_med/hd/deal_juaraspa_62449.jpg',
      'https://s3.dealjava.com/content/thumb_med/hd/deal_tokyobeautymedan_62317.jpg',
    ];

    return (
      <div className='koleksi_section'>
        <h1>Koleksi Minggu Ini</h1>

        <div className='koleksi_container'>
          <button
            className='koleksi'
            onClick={() => {
              location.href = '/kategori/Makanan';
            }}
          >
            <img src={imgKategori[0]} alt='Deal Sehat' />
            <h2>Deal Sehat Segar Selalu</h2>
          </button>
          <button
            className='koleksi'
            onClick={() => {
              location.href = '/kategori/Kecantikan';
            }}
          >
            <img src={imgKategori[1]} alt='Deal Sehat' />
            <h2>Lifestyle</h2>
          </button>
          <button
            className='koleksi'
            onClick={() => {
              location.href = '/kategori/Relaksasi';
            }}
          >
            <img src={imgKategori[2]} alt='Deal Sehat' />
            <h2>Ngapaen Aja Seru</h2>
          </button>
          <button
            className='koleksi'
            onClick={() => {
              location.href = '/kategori/Hiburan';
            }}
          >
            <img src={imgKategori[3]} alt='Deal Sehat' />
            <h2>Aktifitas Keluarga</h2>
          </button>
        </div>
      </div>
    );
  }
}
