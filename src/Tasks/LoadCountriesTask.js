import { features } from '../data/countries.json';

class LoadCountriesTask {
  setState = null;

  load = (setState) => {
    this.setState = setState;
    this.setState(features);
  }
}

export default LoadCountriesTask;