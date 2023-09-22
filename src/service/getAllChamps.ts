import axios from "axios";
import {allChamps} from "../helpers/apis"


export const getChamps = async () => {
    try {
        const response = await axios.get(allChamps);
        const results = await response.data.data;
        return results;
    } catch (error) {
        console.error(error)
    }
}
