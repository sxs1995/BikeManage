/*
 * @Author: shenxsh
 * @Date: 2019-05-13 16:30:24
 * @LastEditTime: 2019-05-13 17:41:49
 * @LastEditors: Do not edit
 * @Description: 格式化时间
 */
export default {
    formateDate(time) {
        if (!time) return "";
        let date = new Date(time);
        let minute = (date.getMonth() + 1) < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + "-" + minute + "-" + day + ' '
            + date.getHours() + ":" + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    }
};
