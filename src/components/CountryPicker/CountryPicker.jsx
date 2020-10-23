import React, {useState, useEffect} from 'react';
import {Select, Form} from 'antd';
import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css'
const {Option} = Select;

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const countries = async() => {
            setFetchedCountries(await fetchCountries());
        }
        countries();
    }, [setFetchedCountries]);


    return(
        <div className ={styles.container}>
            COUNTRY:
        <Form>
         <Select defaultValue="" style={{ width: 500 }} onChange={(e) => handleCountryChange(e)}>
             
         <Option value="">Global</Option>
            {fetchedCountries.map((country) => (
      <Option value={country}>{country}</Option>))}
    </Select>
    
    </Form>
    </div>
    )
}

export default CountryPicker;