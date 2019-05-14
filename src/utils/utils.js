/*
 * @Author: shenxsh
 * @Date: 2019-05-13 16:30:24
 * @LastEditTime: 2019-05-14 09:12:33
 * @LastEditors: Do not edit
 * @Description: 格式化时间
 */
export default {
  formateDate(time) {
    if (!time) return "";
    let date = new Date(time);
    return (
      date.getFullYear() +
      "-" +
      this.formatting(date.getMonth() + 1) +
      "-" +
      this.formatting(date.getDate()) +
      " " +
      this.formatting(date.getHours()) +
      ":" +
      this.formatting(date.getMinutes()) +
      ":" +
      this.formatting(date.getSeconds())
    );
  },
  formatting(time) {
    return time < 10 ? "0" + time : time;
  }
};
