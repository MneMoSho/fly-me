import axios from "axios"

export default class FlightService {

    static async findFlight(destination) {
        const response = await axios.post('http://localhost:8080/api/flights/FindFromFront', destination);
        return response.data;
    }

    static async findMinPrice() {
       const response = await axios.get('http://localhost:8080/api/flights/findMinPrice');
       return response.data;
    }

    static async findAllUniqueCities() {
        const response = await axios.get('http://localhost:8080/api/flights/findByCountry');
        console.log(response.data);
        return response.data;
    }
}

