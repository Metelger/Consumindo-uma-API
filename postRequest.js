import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

//Utilizando variáveis alocadas no .env
const urlApi = process.env.API_URL;
const token = process.env.BEARER_TOKEN;
const payload = {
    'contactId': process.env.CONTACT_ID,
    'text': "Roronoa Zoro"
}

async function sendMessage(url, payload) {
    try{ const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        //transformando os dados do nosso payload em json
        body: JSON.stringify(payload)
    })
    console.log(payload)
    const statusResponse = response.status;
    const responseText = await response.text();
    const data = {
        status: statusResponse,
        text: responseText
    }
    console.log(data)
    return statusResponse
} catch(error){
        console.error(error);
    }
}
//Chamando a função e declarando seus atributos
sendMessage(`${urlApi}/messages`, payload)