/*
 * @Author: shenxsh
 * @Date: 2019-05-13 17:10:17
 * @LastEditTime: 2019-05-13 17:28:05
 * @LastEditors: Do not edit
 * @Description: 封装jsonp解决跨域
 */
import Jsonp from 'jsonp'
export default class Axios {
    static Jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === "success") {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }
}