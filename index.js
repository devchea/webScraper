const axios = require('axios')
const page_url = 'https://www.titan.fitness/racks/power-racks/'
const cheerio = require('cheerio')

const getStockStatus = async() => {
    try {
        const { data } = await axios.get(page_url)
        const $ = cheerio.load(data)
        const title = $('#product-search-results > div.PLP-tiles > div.row.product-grid')
        console.log('---------------------------------------------------------------')
        console.log(title[0]);
    } catch (error) {
        console.error(error)
    }
}

getStockStatus()