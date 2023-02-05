import fetch from "node-fetch";
import dotenv from "dotenv";

//realizando a configuração para acessar as variáveis inseridas no .env
dotenv.config();
const apiUrl = process.env.API_URL;
const bearerToken = process.env.BEARER_TOKEN;

  async function makeGetRequest(url) {
    //Aqui, realizamos uma tentativa de autorização. Se der certo, realizamos a requisição e retornamos o response. Se der errado, caimos no catch, que irá retornar o erro ocorrido.
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
      //Retornando o json do response
      const data = await response.json();

      //Retornando o status da requisição
      const statusResponse = response.status;
      const result = {
        responseData: data,
        responseStatus: statusResponse
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  }

makeGetRequest(`${apiUrl}/users`)
  .then(result => {
    console.log(result.responseData);
    console.log(result.responseStatus);
    //Caso queira retornar apenas um dado específico do response, pode realizar um map apontando o campo que deseja

    /*const names = result.responseData.data.map(user => user.name);
    console.log(names);*/
  });