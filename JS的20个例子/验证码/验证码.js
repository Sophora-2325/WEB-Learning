window.addEventListener('DOMContentLoaded', function() {
    // 获取页面元素
    const checkbox = document.getElementById('checkbox');
    const linkbt = document.getElementById('linkbt');
    const inputCode = document.getElementById('inputCode');
    const textShow = document.getElementById('text_show');
    const button1 = document.getElementById('Button1');

    // 生成随机验证码的函数
    function createCode() {
        let code = '';
        const codeLength = 6;
        const random = ['0','1','2','3','4','5','6','7','8','9',
                       'a','b','c','d','e','f','g','h','i','j',
                       'k','l','m','n','o','p','q','r','s','t',
                       'u','v','w','x','y','z'];
        
        for(let i = 0; i < codeLength; i++) {
            const index = Math.floor(Math.random() * 36);
            code += random[index];
        }
        
        checkbox.innerHTML = code;
        return code;
    }

    // 初始生成验证码
    let validCode = createCode();

    // 点击换一张时重新生成验证码
    linkbt.addEventListener('click', function() {
        validCode = createCode();
    });

    // 验证输入
    button1.addEventListener('click', function() {
        const inputVal = inputCode.value.toLowerCase();
        if(inputVal === '') {
            textShow.innerHTML = '请输入验证码！';
            return;
        }
        if(inputVal === validCode.toLowerCase()) {
            textShow.innerHTML = '验证码正确！';
        } else {
            textShow.innerHTML = '验证码错误！';
            validCode = createCode();
        }
    });
});