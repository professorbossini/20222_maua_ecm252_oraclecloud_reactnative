//importar a axios
import axios from 'axios'
//criar uma instância axios
const endpointPessoas = '/pessoasecm252/'
const baseURL = "https://g3e99fc358a3389-hgdkill2pw98714z.adb.us-ashburn-1.oraclecloudapps.com/ords/admin"

const base = axios.create({
  baseURL: baseURL
})

//definir função que obtém lista

//definir função que cadastra uma pessoa
const cadastrarPessoa = (pessoa) => {
  return base.post(
    endpointPessoas,
    pessoa,
    {headers: {'Content-Type': 'application/json'}}
  )
}

//exportar essas duas funções
export { cadastrarPessoa }