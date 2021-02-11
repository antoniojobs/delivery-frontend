export default function buscaCep(numeroCep) {
  const URL = `https://viacep.com.br/ws/${numeroCep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resposta = fetch(URL, options)
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.table(data);
      return data;
    });
  return resposta;
}
