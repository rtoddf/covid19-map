import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCountriesTask from '../Tasks/LoadCountriesTask';

const Covid19 = () => {
  const [countries, setCountries] = useState([]);

  // const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  // console.log("countries: ", countries)

  return (
    <div>

      {countries.length === 0 ? <Loading /> : <div><CovidMap countries={countries} /><Legend /></div>}
    
    </div>
  );
}
 
export default Covid19;