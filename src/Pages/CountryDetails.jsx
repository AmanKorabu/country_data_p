import React, { useEffect, useTransition } from 'react'
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../api/PostApi';
import Loader from '../Components/Layout/Ui/Loader';


function CountryDetails() {
    const params = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        })
    }, [params.id])
    if (isPending) {
        return <Loader />
    }
    return (
        <div className="c1">
            {
                country && (
                    <div className="card1">
                        <div className='cardCon'>
                            <div className="content">
                                <h1 className='cName'>{country.name.common}</h1>
                                <p><span className='span12'>Capital: </span> {country.capital}</p>
                                <p><span className='span12'>Native Name: </span>  {
                                    country.name.nativeName
                                        ? Object.keys(country.name.nativeName)
                                            .map((key) => country.name.nativeName[key].official)
                                            .join(", ")
                                        : 'N/A'
                                }</p>
                                <p><span className='span12'>Population: </span> {country.population}</p>
                                <p><span className='span12'>Languages: </span> {Object.values(country.languages).join(", ")}</p>
                                <p>
                                    <span className='span12'>Currencies: </span> {
                                        country.currencies
                                            ? Object.keys(country.currencies)
                                                .map(code => {
                                                    const currency = country.currencies[code];
                                                    return `${currency.name} (${currency.symbol || ''})`;
                                                })
                                                .join(", ")
                                            : 'N/A'
                                    }
                                </p>

                                <p><span className="span12">Region: </span> {country.region || 'N/A'}</p>
                                <p><span className="span12">Sub-Region: </span> {country.subregion || 'N/A'}</p>
                            </div>
                            <div className="right01">
                                <img src={country.flags.svg} />
                            </div>
                        </div>
                        <NavLink to={'/country'} style={{ textDecoration: 'none' }}>
                            <button className="animated-button">
                                <span className="circle"></span>
                                <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15 18l-7-7 7-7" />
                                </svg>
                                <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15 18l-7-7 8-8" />
                                </svg>
                                <span className="text">BACK</span>
                            </button>

                        </NavLink>
                    </div>

                )}

        </div>
    )
}

export default CountryDetails
