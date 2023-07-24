import http from '../config/axios/index'

function getList() {
    return new Promise((resolve,reject) => {
        http("post", '/article/home/index').then(res => {
            resolve(res)
        }, error => {
            reject(error)
        })
    })
}

export {
    getList
}
