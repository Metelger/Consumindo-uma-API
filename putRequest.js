import fetch from "node-fetch";
import dotenv from 'dotenv';

dotenv.config()

const apiUrl = process.env.API_URL;
const token = process.env.BEARER_TOKEN;
const contactId = process.env.CONTACT_ID;

async function updatingContact(url, payload) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        const data = {
            statusCode: response.status,
            responseText: await response.text()
        }
        console.log(data)
        return data
    } catch(error){
        console.log(error)
    }
}

const payload = {
    "tags": [
        {
            "label": "TESTE ZÉ 1234"
        }
    ]
}
console.log(apiUrl, contactId, payload)
updatingContact(`${apiUrl}/contacts/${contactId}`, payload)