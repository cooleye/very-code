/**
 * author:davie kong
 * email:iscooleyw@163.com
 * date:2020-06-15
 * 
 * @param {*} id 容器的id
 * @param {*} option 可选
 * fontSize: 设置字体大小，默认24px
 * font: 设置字体，默认 ：serif
 * x: 设置文本绘制的起始位置，默认 15px
 * y: 25,
 * num: 默认4
 * lineNum: 设置线段个数 默认10
 */

function getVeryCode(id, option = {}) {

    // 颜色数组
    let colorArr = ['red', 'green', 'blue', 'yellow', 'orange', 'black']
    // 随机数源
    let arr =
        "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
    // 验证码个数
    let count = option.num || 4;
    // 字体大小
    let fontSize = option.fontSize || "24px";
    // 字体
    let font = option.font || "serif";
    // 文字起始位置
    let x = option.x || 15;
    let y = option.y || 25;
    // 混淆线段个数
    let lineNum = option.lineNum || 10;

    let code = ''
    for (let i = 0; i < count; i++) {
        let c1 = arr[Math.floor(Math.random() * 62)];
        code += c1;
    }


    let canvas = document.getElementById("canvas");
    if (!canvas) {
        // //创建canvas标签
        canvas = document.createElement("canvas");
        // 设置canvas画布大小
        canvas.setAttribute("width", "100px");
        canvas.setAttribute("height", "30px");
        canvas.setAttribute("id", "canvas");
        // 把canvas添加到dom中
        let container = document.getElementById(id);
        container.appendChild(canvas);
    }
    // // 获取canva上下文对象，可以理解为获取画笔
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 100, 30);


    ctx.font = fontSize + ' ' + font;
    ctx.fillText(code, x, y);

    // 添加混淆的线段

    for (let i = 0; i < lineNum; i++) {
        randLine()
    }

    //绘制混淆线段
    function randLine() {
        let x1 = Math.random() * 100;
        let y1 = Math.random() * 30;
        let x2 = Math.random() * 100;
        let y2 = Math.random() * 30;

        let color = colorArr[Math.floor(Math.random() * 6)]
        ctx.strokeStyle = color;
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }

    return code;
}

export default getVeryCode;
