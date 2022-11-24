import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import '../App.css';

const Details = () => {
  const params = useParams();
  const country = useSelector((state) => state.countries.countries);
  const countryDetails = country.filter((item) => item.name === params.name);
  return (
    <div>
      {countryDetails.map((item) => (
        <div key={item.name}>
          <div className="return">
            <Link to="/" className="return-link">
              <div className="return-icon"><IoIosArrowBack /></div>
            </Link>
            <h3 className="details-title">{item.name}</h3>
          </div>
          <div className="detailed-card">
            <div className="card-img">
              <img
                src={item.flag
                  ? item.flag
                  : 'https://www.countryflags.io/xx/flat/64.png'}
                alt="flag"
              />
            </div>
          </div>
          <table className="table">
            <tbody className="row">
              <tr>
                <td className="table-title"><span className="text">Information</span></td>
                <td className="table-info">&nbsp;</td>
              </tr>
              <tr>
                <td className="table-title">Oficial name:</td>
                <td className="table-info">{item.oficialName}</td>
              </tr>
              <tr>
                <td className="table-title">Capital:</td>
                <td className="table-info">{item.capital}</td>
              </tr>
              <tr>
                <td className="table-title">Population:</td>
                <td className="table-info">{item.population}</td>
              </tr>
              <tr>
                <td className="table-title">Region:</td>
                <td className="table-info">{item.region}</td>
              </tr>
              <tr>
                <td className="table-title">Subregion:</td>
                <td className="table-info">{item.subregion}</td>
              </tr>
              <tr>
                <td className="table-title">Area:</td>
                <td className="table-info">{`${item.area} Km2`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>

  );
};

export default Details;
