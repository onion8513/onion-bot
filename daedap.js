exports.test = function () {
let random = Math.floor(Math.random() * 4)
let dap;
switch(random){
    case 0:
        dap = '넹?'
        break
    case 1:
        dap = '네?'
        break
    case 2:
        dap = `?`
        break
    case 3:
        dap = '부르셨나요?'
        break
}
return dap;
}
