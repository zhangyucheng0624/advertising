import axios from 'axios'
export default function  ajax(url,method='GET',data={}) {
  return new Promise((resolve,reject) => {
    let promise;
    if (method === 'GET') {
      promise = axios.get(url,{params:data});
    }else {
      promise = axios.post(url,data)
    }
    promise.then(
      response =>{
        resolve(response.data);
      },
      error => {
        console.log('请求异常'+error.message)
      }
    )
  }).catch((e) => {})
}
