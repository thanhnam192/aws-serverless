const moment = require('moment');

const greetings = {
    'en': 'hello',
    'vn': 'xin chao',
    'fr': 'Franco'
};


exports.handler = async (event) => {
    const name = event.pathParameters.name;
    let {lang,...info} = event.queryStringParameters || {};

    const greeting = greetings[lang] ? greetings[lang] : greetings['en'];
    const message = `${greeting} ${name}`;
    const response = {
        message,
        info,
        timetamps: moment().unix(1318781876)
    };

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(response)
    };

}