import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from './api'
import Footer from './components/Footer/Footer'

class App extends Component {

    state = {
        data:{},
        country:''
    }
  
    async componentDidMount(){
        const fetchedData = await fetchData();
        

        

        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country});
        
    }

    render() {

        const {data, country} =  this.state;
        return (
            <div className={styles.container}>
                <img  src={require('./images/image.png')} className={styles.image} alt="COVID-19"/><br></br><br></br>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>              
                <Chart data={data} country={country}/> <br></br><br></br><br></br><br></br>
                <Footer/>              
            </div>
        );
    }
}

export default App;
