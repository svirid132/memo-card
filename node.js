const fetch = require('node-fetch'); 

async function server() {
    try {
        const response = await fetch('123');
        const result = await response.json();
        console.log('Успех:', JSON.stringify(result));
      } catch (error) {
        console.error('Ошибка:', error);
      }
}

server();