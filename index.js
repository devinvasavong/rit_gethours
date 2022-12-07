
const cheerio = require('cheerio')
const { time } = require('console')

const getHours = async () => {
    let fetchData = await fetch(`https://www.rit.edu/fa/diningservices/places-to-eat/hours?format=day`)
    let body = await fetchData.text()
    let $ = cheerio.load(body)

    const timeArray = new Object()
    const storeArray = new Object()

    $('.view-content .panel-default .panel-body').each((i, el) => {
        timeArray[i] = $(el).text().trim().split("        ")[1]
    })

    $('.view-content .hours-title ').each((i, el) => {
        storeArray[$(el).text().trim()] = timeArray[i]
    })

    return storeArray
}