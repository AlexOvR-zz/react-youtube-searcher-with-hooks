import Axios from 'axios';

const KEY = "AIzaSyD4qM015kKeIpBG8PEA_zP3px7VuigGCDA";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY        
    }
});