import { features } from '../data/countries.json';
import papa from 'papaparse';
import { fireEvent } from '@testing-library/react';
import { map } from 'leaflet';

class LoadCountriesTask {
  // hacky proxy fix again
  covid19DataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';

  setState = null;
  mapCountries = features;

  load = (setState) => {
    this.setState = setState;
    // this.setState(features);

    papa.parse(this.covid19DataUrl, {
      download: true,
      header: true,
      complete: (result) => {
        // console.log('result: ', result)
        this.#processCovidData(result.data)
      }
    })
  }

  #processCovidData = (covidCountries) => {
    for(let i=0; i < this.mapCountries.length; i++){
      const mapCountry = this.mapCountries[i];
      

      const covidCountry = covidCountries.find((covidCountry) => covidCountry.ISO3 === mapCountry.properties.ISO_A3);

      mapCountry.properties.confirmed = 0;
      mapCountry.properties.confirmedText = "0";

      if(covidCountry !== undefined){
        const confirmed = Number(covidCountry.Confirmed);
        mapCountry.properties.confirmed = confirmed;
        mapCountry.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
      }
    }

    this.setState(this.mapCountries);
  }

  #formatNumberWithCommas = function (number)  {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountriesTask;

// https://github.com/CSSEGISandData/COVID-19/blob/web-data/data/cases_country.csv