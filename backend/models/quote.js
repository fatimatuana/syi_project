const axios = require('axios');

// fetch today's quote from the zenquotes API
async function getTodaysQuote(){
    let res = await axios.get('https://zenquotes.io/api/today');
    if(res.status === 429) {
        // throw new Error('Rate limit exceeded. Please try again later.');
        let obj = data.map(quote => ({
            quote: "Even in the grave, all is not lost.",
            author: "Edgar Allan Poe"
        }));
        return obj;
    }
    if (!res.status === 200) {
        throw new Error('Network response was not ok');
    }
    let data = res.data;
    let obj = data.map(quote => ({
        quote: quote.q,
        author: quote.a
    }));
    return obj;
}

module.exports = { getTodaysQuote }