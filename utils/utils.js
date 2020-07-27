const axios = require('axios');

//função de apoio para pegar o html como string
const getHTML = async function (url){
    try {
        const { data } = await axios.get(url);
        return data;
    } catch {
        console.error(
            `ERROR: An error occurred while trying to fetch the URL: ${url}`
        );
    }
}

module.exports = {getHTML}