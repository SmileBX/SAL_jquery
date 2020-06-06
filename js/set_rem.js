//先初始化屏幕尺寸

let designSize = 1920; // 设计图尺寸
let html = document.documentElement;
let wW = html.clientWidth;// 窗口宽度
let rem = wW * 100 / designSize;
document.documentElement.style.fontSize = rem + 'px';



$(window).resize(function ()// 绑定到窗口的这个事件中
{

    let designSize = 1920; // 设计图尺寸

    let html = document.documentElement;

    let wW = html.clientWidth;// 窗口宽度
    let rem = wW * 100 / designSize;

    document.documentElement.style.fontSize = rem + 'px';
});

// $(function () {
//     if (window.innerWidth > 1080)
//     return;
//     let designSize = 750; // 设计图尺寸

//     let html = document.documentElement;

//     let wW = html.clientWidth;// 窗口宽度
//     let rem = wW * 100 / designSize;

//     document.documentElement.style.fontSize = rem + 'px';
    
// })