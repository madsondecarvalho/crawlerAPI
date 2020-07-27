const utils = require('../utils/utils')
const cheerio = require('cheerio')
const imdbURL = "https://www.imdb.com/"

const topRatedMovies = async (req, res) => {
    const sortedBy = req.query.sorted_by
    let urlTopRatedMovies

    if(sortedBy != undefined){   
        urlTopRatedMovies = `${imdbURL}/chart/top/?sort=${sortedBy}`
    }else{
        urlTopRatedMovies = `${imdbURL}/chart/top/`
    }

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