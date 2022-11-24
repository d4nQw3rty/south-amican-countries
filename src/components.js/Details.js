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
            <Link to="/">
              <div className="return-icon"><IoIosArrowBack /></div>
            </Link>
            <h3>{item.name}</h3>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src={item.flag
                  ? item.flag
                  : 'https://www.countryflags.io/xx/flat/64.png'}
                alt="flag"
                className="flag"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Details;
