
const cheerio = require('cheerio');
const utils = require('../utils/utils')
const urlMercadoLivre = "https://lista.mercadolivre.com.br/"

const search = async (req, res) => {

    const {search, limit} = req.body
    const urlPesquisa = `${urlMercadoLivre}${search}#D[A:${search}]`
    
    let html = await utils.getHTML(urlPesquisa)
    const $ = cheerio.load(html)

    let result = [] //array que será enviado na resposta

    //primeiramente precisamos saber se estamos em uma página tipo grid ou lista
    let gridListLength = $(".item__info-link").length
    
    if(gridListLength > 0){
        //percorrer itens pegando seus dados
        $(".item__info-link").each(
            (index, el) => {
                const name = $(el).find('.main-title').text().trim()
                const price = $(el).find('.price__fraction').text().trim()
                const store = $(el).find('.item__brand-title-tos').text().trim().replace('por ', '')
                const link = $(el).attr('href')
                const state = $(el).find('.item__condition').text().trim()

                result.push({name : name, link: link, price: price, store:store, state: state})
            }
        )
    }else {
        //caso o gridListLength seja igual a zero, provavelmente estamos em uma pagina tipo lista
        //percorrendo uma página tipo lista
        $(".results-item").each(
            (index, el) => {
                const name = $(el).find('.item__title').text().trim()
                const price_fraction = $(el).find('.price__fraction').text().trim()
                const price_decimals = $(el).find('.price__decimals').text().trim()
                const price = `${price_fraction},${price_decimals}`
                const store = $(el).find('.item__brand-title-tos').text().trim().replace('por ', '')
                const link = $(el).find('a.item__js-link').attr('href')
                const state = $(el).find('.item__condition').text().trim()

                result.push({name : name, link: link, price: price, store:store, state: state})
            }
        )
    }
    

    return res.status(200).json(result)
}

module.exports = {search}