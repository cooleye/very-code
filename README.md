# very-code 

## useage

1. install


```
npm i very-code -S
```

2. 引入库
```
import veryCode from 'very-code'
```
3. 在页面上创建一个div,添加id，例如：
```
<div id="vc"></div>
```

4. 生成验证码
```
let code = veryCode('vc')
```
5. 可选参数：
```
/**
 * @param {*} id 容器的id
 * @param {*} option 可选
 * fontSize: 设置字体大小，默认24px
 * font: 设置字体，默认 ：serif
 * x: 设置文本绘制的起始位置，默认 15px
 * y: 25,
 * num: 默认4
 * lineNum: 设置线段个数 默认10
 */