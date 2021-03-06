const axios = require('axios')
const page_url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'

const getStockStatus = async() => {
    try {
        const { data } = await axios.get(
            page_url
        )
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

getStockStatus()