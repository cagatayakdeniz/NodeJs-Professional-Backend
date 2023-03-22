const logger = require("../utilities/logger");

exports.getAll = (req,res) => {
    try {
        // const countries = require("../jsons/country.json");
        // return countries;

        req.params.id.test = "sadfa";
        
    } catch (error) {
        throw new Error(error);
    }
    
}

exports.getCityByCountryId = (countryId) => {
    try {
        const cities = require("../jsons/city.json");
        const resultCities = cities.filter(x=>x.country_id==countryId);
        return resultCities;
    } catch (error) {
        throw new Error(error);
    }  
}