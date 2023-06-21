import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m dari pusat</span>
        <span className="siTaxiOp">Free penjemputan bandara </span>
        <span className="siSubtitle">
          Dilengkapi dengan AC dan Breakfast
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Bebas pembatalan </span>
        <span className="siCancelOpSubtitle">
         Anda dapat membatalkannya kapan saja, ada harga spesial untuk hari ini!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Termasuk pajak</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Lihat Ketersediaan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
