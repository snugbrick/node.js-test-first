function say(value) {
    console.log(value)//打印函数
}
function excute(func, value) {
    func(value)
}
excute(say, "hi world")
