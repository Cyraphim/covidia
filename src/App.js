import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from "./api"
import styles from "./App.module.css"

class App extends React.Component {

  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    this.setState({ data: fetchedData });
  }


  handleCountryChange = async (country) =>
  {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData });
    console.log(country);
    this.setState({country: country});
  }

  render() {

    const { data } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.card}>

          <Cards data={data}></Cards>
          <br />
          <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
          <br />
          <Chart></Chart>
        </div>
      </div>
    )
  }
}

export default App;
