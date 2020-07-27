const utils = require('../utils/utils')
const cheerio = require('cheerio')
const imdbURL = "https://www.imdb.com/"

const topRatedMovies = async (req, res) => {
    const urlTopRatedMovies = `${imdbURL}/chart/top/`

    let html = await utils.getHTML(urlTopRatedMovies)
    const $ = cheerio.load(html)

    let resp = []

    $('tbody.lister-list > tr').each( (index, el) => {
        var title = $(el).find('td.titleColumn > a').text()
        var rating = $(el).find('td.ratingColumn > strong').text()
        var year = $(el).find('td.titleColumn > span.secondaryInfo').text()
        
        resp.push({title: title,year:year, rating:rating})
    })

    return res.status(200).json(resp)
}

module.exports = {topRatedMovies}