import { features } from '../data/countries.json';
import papa from 'papaparse';

class LoadCountriesTask {
  setState = null;

  // hacky proxy fix again
  covid19DataUrl = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';


  load = (setState) => {
    this.setState = setState;
    this.setState(features);

    papa.parse(this.covid19DataUrl, {
      download: true,
      header: true,
      complete: (result) => {
        console.log('result: ', result)
        this.#processCovidData(result.data)
      }
    })
  }

  #processCovidData = (covidCountries) => {
    //console.log('covidCountries: ', covidCountries)
  }
}

export default LoadCountriesTask;

// https://github.com/CSSEGISandData/COVID-19/blob/web-data/data/cases_country.csv