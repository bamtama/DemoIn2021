class MDatetime {
  msgDate?: string;
  msgTime?: string;
  timeHandler?: number | null;
  constructor () {
    this.handleDateTime()
  }
  protected _padStart (num: number, len: number = 2, str: string = '0') {
    if (num < 10) {
      return (new Array(len - 1).fill(str)).toString() + num
    } else {
      return num.toString()
    }
  }
  handleDateTime () {
    let date = new Date()
    let [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    this.msgDate = `${year}年 ${month}月 ${day}日`
    this.refreshTime()
  }
  refreshTime () {
    if (this.timeHandler) {
      clearTimeout(this.timeHandler)
      this.timeHandler = null
    }
    let date = new Date()
    let [h, m, s] = [date.getHours(), date.getMinutes() + 1, date.getSeconds()]
    this.msgTime = `${MDatetime._padStart(h)}:${MDatetime._padStart(m)}:${MDatetime._padStart(s)}`
    this.timeHandler = setTimeout(this.refreshTime, 1000)
  }
  getDate () {
    return this.msgDate || ''
  }
  getTime () {
    return this.msgTime || ''
  }
}