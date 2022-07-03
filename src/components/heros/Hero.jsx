import { Component } from 'react';
import './Hero.css';
import bgHero from '../../assets/bgCircle.png';
import iconSemua from '../../assets/icons/category/semua.svg';
import iconKecantikan from '../../assets/icons/category/kecantikan.svg';
import iconMakanan from '../../assets/icons/category/makanan.svg';
import iconRelaksasi from '../../assets/icons/category/relaksasi.svg';
import iconHiburan from '../../assets/icons/category/hiburan.svg';
import iconJasa from '../../assets/icons/category/jasa.svg';
import Carousel from '../carousel/Carousel';

export default function Hero() {
  const slides = [
    'https://s3.dealjava.com/content/headline_banner/thumb/spa-and-massage-medan-3.jpg',
    'https://s3.dealjava.com/content/headline_banner/thumb/jj-steak-pizza-pasta-premiumsteak-juni.jpg',
    'https://s3.dealjava.com/content/headline_banner/thumb/Manicure-Pedicure-medan-4.jpg',
    'https://s3.dealjava.com/content/headline_banner/thumb/perawatan-tepat-untuk-kulit-sehat-medan.jpg',
    'https://s3.dealjava.com/content/headline_banner/thumb/marutama-ojju%20Delipark-diskon-48.jpg',
  ];

  return (
    <div className='hero'>
      <img id='bgHero' src={bgHero} alt='Background Hero' />

      <div className='navHero'>
        <div className='menuCategory'>
          <button
            className='categorySemua'
            onClick={() => {
              location.href = '/';
            }}
            name='semua'
          >
            <img className='icSemua' src={iconSemua} alt='Semua Category' />
            <label htmlFor='semua'>Semua</label>
          </button>
          <button
            className='categoryMakanan'
            onClick={() => {
              location.href = '/kategori/Makanan';
            }}
            name='makanan'
          >
            <img src={iconMakanan} alt='Makanan' />
            <label htmlFor='makanan'>Makanan</label>
          </button>
          <button
            className='categoryKecantikan'
            onClick={() => {
              location.href = '/kategori/Kecantikan';
            }}
            name='kecantikan'
          >
            <img src={iconKecantikan} alt='Kecantikan' />
            <label htmlFor='kecantikan'>Kecantikan</label>
          </button>
          <button
            className='categoryRelaksasi'
            onClick={() => {
              location.href = '/kategori/Relaksasi';
            }}
            name='relaksasi'
          >
            <img src={iconRelaksasi} alt='Relaksasi' />
            <label htmlFor='relaksasi'>Relaksasi</label>
          </button>
          <button
            className='categoryHiburan'
            onClick={() => {
              location.href = '/kategori/Hiburan';
            }}
            name='hiburan'
          >
            <img src={iconHiburan} alt='Hiburan' />
            <label htmlFor='hiburan'>Hiburan</label>
          </button>
          <button
            className='categoryJasa'
            onClick={() => {
              location.href = '/kategori/Jasa';
            }}
            name='jasa'
          >
            <img src={iconJasa} alt='Jasa' />
            <label htmlFor='jasa'>Jasa</label>
          </button>
        </div>
      </div>

      <div className='carousel_container'>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
