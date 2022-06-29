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

export default class Hero extends Component {
  render() {
    const slides = [
      'https://picsum.photos/id/1032/900/400',
      'https://picsum.photos/id/1033/900/400',
      'https://picsum.photos/id/1037/900/400',
      'https://picsum.photos/id/1035/900/400',
      'https://picsum.photos/id/1036/900/400',
    ];

    return (
      <div className='hero'>
        <img id='bgHero' src={bgHero} alt='Background Hero' />

        <div className='navHero'>
          <div className='menuCategory'>
            <button className='categorySemua' name='semua'>
              <img className='icSemua' src={iconSemua} alt='Semua Category' />
              <label htmlFor='semua'>Semua</label>
            </button>
            <button className='categoryMakanan' name='makanan'>
              <img src={iconMakanan} alt='Makanan' />
              <label htmlFor='makanan'>Makanan</label>
            </button>
            <button className='categoryKecantikan' name='kecantikan'>
              <img src={iconKecantikan} alt='Kecantikan' />
              <label htmlFor='kecantikan'>Kecantikan</label>
            </button>
            <button className='categoryRelaksasi' name='relaksasi'>
              <img src={iconRelaksasi} alt='Relaksasi' />
              <label htmlFor='relaksasi'>Relaksasi</label>
            </button>
            <button className='categoryHiburan' name='hiburan'>
              <img src={iconHiburan} alt='Hiburan' />
              <label htmlFor='hiburan'>Hiburan</label>
            </button>
            <button className='categoryJasa' name='jasa'>
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
}
