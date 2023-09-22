import axios from "axios";

export const getChampsId = async (id: string) => {
    try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_AR/champion/${id}.json/`)
        const results = await response.data.data;
        return results;
    } catch (error) {
        console.error(error);
    }
}

