import React, { useEffect, useState, useTransition } from 'react';
import { NavLink } from 'react-router-dom';
import { getCountryData } from '../api/PostApi';
import Loader from '../Components/Layout/Ui/Loader';
import SearchFilter from '../Components/Layout/Ui/SearchFilter';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  // Filter countries by name and region
  const filteredCountries = countries.filter((country) => {
    const nameMatch = country.name.common.toLowerCase().includes(search?.toLowerCase() || '');
    const regionMatch = filter === 'all' || country.region === filter;
    return nameMatch && regionMatch;
  });

  // Dropdown handler
  const hndlselectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <>
    <section className="country-sectionCards">
      <div className="compo">

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

      <div className="select-wrapper">
        <select className="select-box" value={filter} onChange={hndlselectChange}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 
            12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 
            0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      </div>
            </div>

      <ul>
        {filteredCountries.map((country) => (
          <div className="cardss" key={country.name.common}>
            <h3>{country.name.common}</h3>
            <div className="flags">
              <img
                src={country.flags.svg}
                height="60px"
                width="100px"
                className="flagss"
                alt={country.name.common}
                />
              <p><span className="span">Capital: </span>{country.capital?.[0] || 'N/A'}</p>
              <p><span className="span">Region: </span>{country.region}</p>
              <p><span className="span">Population: </span>{country.population?.toLocaleString() || 'N/A'}</p>

              <NavLink to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 
                    19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">CLICK</span>
                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 
                    19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </ul>
        </section>
        </>
  );
}

export default Country;
