import './ListProduk.css';
import ItemProduk from './ItemProduk';
import { useReducer, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import iconSemua from '../../assets/icons/category/semua.svg';
import iconDiskon from '../../assets/icons/category/hiburan.svg';
import iconLokasi from '../../assets/icons/location-icon.svg';
import iconTerlaris from '../../assets/icons/category/jasa.svg';

export default function ListProduk({ produk }) {
  let { id } = useParams();

  const [state, dispatch] = useReducer(filter);
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    produk
      .filter((items) => items.kategori.nama === id)
      .map((item) => {
        setProdukList((prev) => [...prev, item]);
      });
  }, [produk]);

  useEffect(() => {
    produk
      .filter((items) => items.kategori.nama === id)
      .map((item) => {
        setProdukList((prev) => [...prev, item]);
      });
  }, [id]);

  useEffect(() => {
    dispatch({ type: 'SHOW_ALL', payload: produkList });
  }, [produkList]);

  // create a function to toggle the active class for the button
  function toggleActive(e) {
    const btnFilter = document.getElementsByClassName('btnFilter');

    for (var i = 0; i < btnFilter.length; i++) {
      btnFilter[i].classList.remove('activeFilter');
    }

    e.target.classList.toggle('activeFilter');
  }

  useEffect(() => {
    const btnSub = document.getElementsByClassName('sub_kategori');
    for (let i = 0; i < btnSub.length; i++) {
      btnSub[0].classList.add('activeSubKategori');
    }
  }, [id]);

  // create a function to toggle the active class for the button
  function activeSub() {
    const btnSub = document.getElementsByClassName('sub_kategori');

    for (let i = 0; i < btnSub.length; i++) {
      btnSub[i].addEventListener('click', function () {
        for (let j = 0; j < btnSub.length; j++) {
          btnSub[j].classList.remove('activeSubKategori');
        }
        this.classList.add('activeSubKategori');
      });
    }
  }

  function filter(state, action) {
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

    switch (action.type) {
      case 'SHOW_ALL':
        return produk.map((items, index) => {
          if (items.kategori.nama === id) {
            return <ItemProduk key={index} items={items} />;
          }
        });
      case 'semua':
        toggleActive(action.e);
        return produk.map((items, index) => {
          if (items.kategori.nama === id) {
            return <ItemProduk key={index} items={items} />;
          }
        });
      case 'filterHarga':
        toggleActive(action.e);
        return produk.map((items, index) => {
          if (items.harga <= 100000 && items.kategori.nama === id) {
            return <ItemProduk key={index} items={items} />;
          } else if (items.kategori.nama === id) {
            return <ItemProduk key={index} items={items} />;
          }
        });
      case 'filterJenis':
        toggleActive(action.e);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.jenis.nilai - b.jenis.nilai)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'filterWaktu':
        toggleActive(action.e);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.waktuMakan.nilai - b.waktuMakan.nilai)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'filterHargaTerendah':
        toggleActive(action.e);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.harga - b.harga)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'semuaSub':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'trend':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .map((items, index) => {
            var hitDates = new Date(items.post) || {};
            if (hitDates >= startDate && hitDates <= endDate) {
              return <ItemProduk key={index} items={items} />;
            }
          });
      case 'diskon':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.diskon - b.diskon)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'terlaris':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => b.penjualan - a.penjualan)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'populer':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.diskon - b.diskon)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });
      case 'lokasi':
        activeSub(action.eSub);
        return produk
          .filter((items) => items.kategori.nama === id)
          .sort((a, b) => a.lokasi.jarak - b.lokasi.jarak)
          .map((items, index) => {
            return <ItemProduk key={index} items={items} />;
          });

      default:
        return new Error('Produk Tidak Tersedia');
    }
  }

  return (
    <div className='listProduk_container'>
      <div className='subKategori_container'>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'semuaSub' })}
        >
          <img src={iconSemua} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>Semua</p>
        </button>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'trend' })}
        >
          <img src={iconSemua} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>Hype & Trend</p>
        </button>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'diskon' })}
        >
          <img src={iconDiskon} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>Diskon</p>
        </button>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'terlaris' })}
        >
          <img
            src={iconTerlaris}
            alt='Sub Kategori Image'
            id='imgSubKategori'
          />
          <p>Terlaris</p>
        </button>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'populer' })}
        >
          <img src={iconSemua} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>Terpopuler</p>
        </button>
        <button
          className='sub_kategori'
          onClick={(event) => dispatch({ type: 'lokasi' })}
        >
          <img src={iconLokasi} alt='Sub Kategori Image' id='imgSubKategori' />
          <p>Terdekat</p>
        </button>
      </div>

      <div className='produk_container'>
        <h1>Semua {id}</h1>

        <div className='filter_container'>
          <div className='filter_kiri'>
            <button
              className='btnFilter activeFilter'
              onClick={() => dispatch({ type: 'semua', e: event })}
            >
              Semua
            </button>
            <button
              className='btnFilter'
              onClick={() => dispatch({ type: 'filterHarga', e: event })}
            >
              Harga dari Rp 0 - Rp 100.000
            </button>
            <button
              className='btnFilter'
              onClick={() => dispatch({ type: 'filterJenis', e: event })}
            >
              Jenis {id}
            </button>
            <button
              className='btnFilter'
              onClick={() => dispatch({ type: 'filterWaktu', e: event })}
            >
              Waktu {id}
            </button>
          </div>
          <div className='filter_kanan'>
            <button
              className='btnFilter'
              onClick={() =>
                dispatch({ type: 'filterHargaTerendah', e: event })
              }
            >
              Harga Terendah
            </button>
          </div>
        </div>

        <div className='items_container'>{state}</div>
      </div>
    </div>
  );
}
