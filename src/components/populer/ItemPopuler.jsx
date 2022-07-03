import locationIconBlack from '../../assets/icons/location-icon-black.svg';

export default function ItemPopuler({ items }) {
  const formatIDR = (angka) => {
    var reverse = angka.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');

    return ribuan;
  };

  const formatPenjualan = (angka) => {
    var reverse = angka.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(',').split('').reverse().join('');

    return ribuan;
  };

  const str = (kalimat) => {
    if (kalimat.length > 48) {
      return kalimat.substring(0, 48) + '...';
    } else {
      return kalimat;
    }
  };

  return (
    <div className='populerItems'>
      <div className='banner'>
        <img src={items.banner} alt='Banner' />
      </div>

      <div className='diskon'>
        <p>{items.diskon}%</p>
      </div>

      <div className='harga_container'>
        <div className='harga'>
          <h1>
            Rp {formatIDR((items.harga * items.diskon) / 100 - items.harga)}
          </h1>
          <p>Rp {formatIDR(items.harga)}</p>
        </div>
        <div className='terjual'>
          <img
            className='iconLocationpopuler'
            src={locationIconBlack}
            alt='Location'
          />
          <p> {formatPenjualan(items.penjualan)} Terjual</p>
        </div>
      </div>

      <div className='footerItems'>
        <div className='namaItems'>
          <h2>{str(items.nama)}</h2>
          <p>{items.lokasi.nama}</p>
        </div>

        <div className='logoVendor'>
          <img src={items.logo} alt='logo' />
        </div>
      </div>
    </div>
  );
}
