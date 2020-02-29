import axios from 'axios'
let req = axios.create({
  baseURL: 'http://192.168.43.51:3000',
  timeout: 10000
})
export function getSellers () {
  return req.get('/api/seller')
}
export function getGoods(){
  return req.get('/api/goods');
}
