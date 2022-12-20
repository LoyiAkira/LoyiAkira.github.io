//导航栏
var items_i = document.getElementsByClassName('items_i');
var nav_box = document.getElementsByClassName('nav_box');
var nav_content = document.getElementsByClassName('nav_content');
function items_1()
{
    nav_box[0].style.display = 'block';
    nav_content[0].style.height = 100 + 'px';
    items_i[0].style.rotate = '180deg';
    items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
} 
function items_2()
{
    nav_content[0].style.height = 50 + 'px';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
} 
function items_3()
{
    nav_box[1].style.display = 'block';
    nav_content[0].style.height = 100 + 'px';
    items_i[1].style.rotate = '180deg';
    nav_box[0].style.display = 'none';
    items_i[0].style.rotate = '0deg';
    nav_box[2].style.display = 'none';
    items_i[2].style.rotate = '0deg';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';

	
} 
function items_4()
{
    nav_box[1].style.display = 'none';
    nav_content[0].style.height = 50 + 'px';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
} 
function items_5()
{
    nav_box[2].style.display = 'block';
    nav_content[0].style.height = 100 + 'px';
    items_i[2].style.rotate = '180deg'
    nav_box[1].style.display = 'none';
    items_i[1].style.rotate = '0deg';
    nav_box[3].style.display = 'none';
    items_i[3].style.rotate = '0deg';
    items_i[0].style.rotate = '0deg';
    nav_box[0].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';

} 
function items_6()
{
    nav_box[2].style.display = 'none';
    nav_content[0].style.height = 50 + 'px';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
} 
function items_7()
{
    nav_box[3].style.display = 'block';
    nav_content[0].style.height = 100 + 'px';
    items_i[3].style.rotate = '180deg';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';

} 
function items_8()
{
    nav_box[3].style.display = 'none';
    nav_content[0].style.height = 50 + 'px';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
} 
function items_9()
{
    nav_box[4].style.display = 'block';
    nav_content[0].style.height = 100 + 'px';
    items_i[4].style.rotate = '180deg';
    nav_box[3].style.display = 'none';
    items_i[3].style.rotate = '0deg';
    items_i[0].style.rotate = '0deg';
    nav_box[0].style.display = 'none';
    items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
} 
function items_10()
{
    nav_box[4].style.display = 'none';
    nav_content[0].style.height = 50 + 'px';
	items_i[0].style.rotate = '0deg';
	nav_box[0].style.display = 'none';
	items_i[1].style.rotate = '0deg';
	nav_box[1].style.display = 'none';
	items_i[2].style.rotate = '0deg';
	nav_box[2].style.display = 'none';
	items_i[3].style.rotate = '0deg';
	nav_box[3].style.display = 'none';
	items_i[4].style.rotate = '0deg';
	nav_box[4].style.display = 'none';
}

//换肤
var skin=document.getElementsByClassName('skin');
var skin_init=[0,0,0];

function skin_1()
{
    var head=document.getElementsByClassName('head');
    var log=document.getElementById('log');
    var nav=document.getElementById('nav');
    var banner=document.getElementById('banner');
    var banner_tool=document.getElementsByClassName('banner-tool');
    var div_t1=document.getElementsByClassName('div_t1');
    var div_t2=document.getElementsByClassName('div_t2');
    var footer=document.getElementsByClassName('footer');
    var bod=document.getElementsByTagName('body');
    if(skin_init[0]==0&&skin_init[1]==0&&skin_init[2]==0)
    {
         skin[0].value="换肤<原>";
         skin_init[0]=1;
         bod[0].style.backgroundColor='rgb(233, 173, 205)';
         log.style.backgroundColor='rgb(233, 173, 205)';
         nav.style.backgroundColor='rgb(233, 173, 205)';
    }
    else 
    {
        skin[0].value="换肤<红>";
        skin_init[0]=0;
        bod[0].style.backgroundColor='white';
        log.style.backgroundColor='white';
        nav.style.backgroundColor='white';
    }
}

function skin_2()
{
    var head=document.getElementsByClassName('head');
    var log=document.getElementById('log');
    var nav=document.getElementById('nav');
    var banner=document.getElementById('banner');
    var banner_tool=document.getElementsByClassName('banner-tool');
    var div_t1=document.getElementsByClassName('div_t1');
    var div_t2=document.getElementsByClassName('div_t2');
    var footer=document.getElementsByClassName('footer');
    var bod=document.getElementsByTagName('body');
    if(skin_init[0]==0&&skin_init[1]==0&&skin_init[2]==0)
    {
         skin[1].value="换肤<原>";
         skin_init[1]=1;
         bod[0].style.backgroundColor='rgb(185, 239, 255)';
         log.style.backgroundColor='rgb(185, 239, 255)';
         nav.style.backgroundColor='rgb(185, 239, 255)';
    }
    else
    {
        skin[1].value="换肤<蓝>";
        skin_init[1]=0;
        bod[0].style.backgroundColor='white';
        log.style.backgroundColor='white';
        nav.style.backgroundColor='white';
    }
}

function skin_3()
{
    var head=document.getElementsByClassName('head');
    var log=document.getElementById('log');
    var nav=document.getElementById('nav');
    var banner=document.getElementById('banner');
    var banner_tool=document.getElementsByClassName('banner-tool');
    var div_t1=document.getElementsByClassName('div_t1');
    var div_t2=document.getElementsByClassName('div_t2');
    var footer=document.getElementsByClassName('footer');
    var bod=document.getElementsByTagName('body');
    if(skin_init[0]==0&&skin_init[1]==0&&skin_init[2]==0)
    {
         skin[2].value="换肤<原>";
         skin_init[2]=1;
         bod[0].style.backgroundColor='rgb(205, 255, 173)';
         log.style.backgroundColor='rgb(205, 255, 173)';
         nav.style.backgroundColor='rgb(205, 255, 173)';
    }
    else
    {
        skin[2].value="换肤<绿>";
        skin_init[2]=0;
        bod[0].style.backgroundColor='white';
        log.style.backgroundColor='white';
        nav.style.backgroundColor='white';
    }
}

//轮播图-1
// 得到按钮和ul，ul整体进行运动
var leftbtn = document.getElementById("leftbtn");
var rightbtn = document.getElementById("rightbtn");
var list = document.getElementsByClassName("list");
var idx = 0;
var lock = true;

// 右边按钮监听
function rbtn(){
    // 判断锁的状态
    if (!lock) return; 
    lock = false;
    list[0].style.transition = 'left .8s ease-out 0s';
    idx ++;
    if (idx > 4) {
        // 设置一个延时器，延时器的功能就是将ul瞬间拉回0的位置，延时器的目的就是让过渡动画结束之后
        setTimeout(function() {
            // 取消掉过渡，因为要的是瞬间移动，不是“咕噜”回去
            list[0].style.transition = 'none';
            list[0].style.left = 0;
            idx = 0;
        }, 500);
    }
    list[0].style.left = -idx * 630 + 'px';
    setTimeout(function() {
        lock = true; 
    }, 500);
}

//轮播图自动播放
var box = document.getElementsByClassName('carousel');
var auto = setInterval(rbtn, 3000); //自动放映

// 左边按钮监听
function lbtn(){
    if (!lock) return;
    lock = false;
    // 判断是不是第0张，如果是，就要瞬间用假的替换真的
    if (idx == 0) {
        // 取消掉过渡，因为要的是瞬间移动，不是“咕噜”过去
        list[0].style.transition = 'none';
        // 直接瞬间移动到最后的假图片上
        list[0].style.left = -5 * 630 + 'px';
        // 设置一个延时器，这个延时器的延时时间可以是0毫秒，虽然是0毫秒，但是可以让我们过渡先是瞬间取消，然后再加上
        setTimeout(function() {
            // 加过渡
            list[0].style.transition = 'left .5s ease 0s';
            // idx改为真正的最后一张
            idx = 4;
            list[0].style.left = -idx * 630 + 'px';
        }, 0);
    } else {
        idx --;
        list[0].style.left = -idx * 630 + 'px';
    }
    setTimeout(function() {
        lock = true; 
    }, 500);
}


// 轮播图-2(以两张图片为主体)
// 得到按钮和ul，ul整体进行运动
var leftbtn_2 = document.getElementById("leftbtn_2");
var rightbtn_2 = document.getElementById("rightbtn_2");
var list_2 = document.getElementsByClassName("list_2");
var idx_2 = 0;
var lock_2 = true;

// 右边按钮监听
function rbtn_2(){
    // 判断锁的状态
    if (!lock_2) return; 
    lock_2 = false;
    list_2[0].style.transition = 'left .5s ease 0s';
    idx_2 ++;
    if (idx_2 > 7) {
        // 设置一个延时器，延时器的功能就是将ul瞬间拉回0的位置，延时器的目的就是让过渡动画结束之后
        setTimeout(function() {
            // 取消掉过渡，因为要的是瞬间移动，不是“咕噜”回去
            list_2[0].style.transition = 'none';
            list_2[0].style.left = 0;
            idx_2 = 0;
        }, 500);
    }
    list_2[0].style.left = -idx_2 * 339 + 'px';

    // 函数节流
    setTimeout(function() {
        lock_2 = true; 
    }, 500);
}

//轮播图自动播放
var box_2 = document.getElementsByClassName('lunbo_2');
var auto_2 = setInterval(rbtn_2, 3000); //自动放映

// 左边按钮监听
function lbtn_2(){
    if (!lock_2) return;

    lock_2 = false;

    // 判断是不是第0张，如果是，就要瞬间用假的替换真的
    if (idx_2 == 0) {
        // 取消掉过渡，因为要的是瞬间移动，不是“咕噜”过去
        list_2[0].style.transition = 'none';
        // 直接瞬间移动到最后的假图片上
        list_2[0].style.left = -8 * 339 + 'px';
        // 设置一个延时器，这个延时器的延时时间可以是0毫秒，虽然是0毫秒，但是可以让我们过渡先是瞬间取消，然后再加上
        setTimeout(function() {
            // 加过渡
            list_2[0].style.transition = 'left .5s ease 0s';
            // idx改为真正的最后一张
            idx_2 = 7;
            list_2[0].style.left = -idx_2 * 339 + 'px';
        }, 0);
    } else {
        idx_2 --;
        list_2[0].style.left = -idx_2 * 339 + 'px';
    }

    setTimeout(function() {
        lock_2 = true; 
    }, 500);
}

//表单登录
function log_on(){
    var name = document.forms['myForm_log']['name'].value;
    var password = document.forms['myForm_log']['password'].value;
    var atpos=name.indexOf("@");
	var dotpos=name.lastIndexOf(".");

    if(name.length != 11){
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=e_mail.length)
        {
            alert('邮箱/手机号输入有误！');
            return false;
        }
    }

    else if(password.length < 6 || password.length > 15){
        alert('密码格式输入有误！');
        return false;
    }

    else{
        alert('登录成功！')
        return true;
    }
}

//表单注册
function register(){
    var e_mail = document.forms['myForm_register']['e-mail'].value;
    var password = document.forms['myForm_register']['password'].value;
    var password_check = document.forms['myForm_register']['password_check'].value;
    var name = document.forms['myForm_register']['name'].value;
    var phone = document.forms['myForm_register']['phone'].value;
    var atpos=e_mail.indexOf("@");
	var dotpos=e_mail.lastIndexOf(".");
    
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e_mail.length){
		alert("请输入有效的 e-mail 地址！");
  		return false;
	}

    else if(phone.length != 11){
        alert('请输入正确的手机号！');
        return false;
    }

    else if(password.length < 6 || password.length > 15){
        alert('密码长度需要控制在7-14位！');
        return false;
    }

    else if(!((/^[a-z]{1,}[A-Z]{1,}[0-9]{1,}$/.test(password))||(/^[a-z]{1,}[0-9]{1,}[A-Z]{1,}$/.test(password))||(/^[A-Z]{1,}[0-9]{1,}[a-z]{1,}$/.test(password))||(/^[A-Z]{1,}[a-z]{1,}[0-9]{1,}$/.test(password))||(/^[0-9]{1,}[a-z]{1,}[A-Z]{1,}$/.test(password))||(/^[0-9]{1,}[A-Z]{1,}[a-z]{1,}$/.test(password)))){
        alert('密码格式错误！（请输入至少一位大、小写字母、数字）');
        return false;
    }

    else if(password != password_check){
        alert('两次密码输入不一致！请检查！');
        return false;
    }

    else if(name.length > 12){
        alert('昵称长度请保持在12位以内！');
        return false;
    }

    else{
        alert('注册成功！');
        return true;
    }
}

//在线评论区
var submit = document.getElementsByClassName('comment_submit');
var text = document.getElementsByClassName('comment_text');
var comment_box = document.getElementsByClassName('comment_box');
var text_value;
function c_submit()
{
    text_value = text[0].value;
    if(text_value)
    {
        var t = document.createElement('p');
        var rect = document.createElement('div');
        t.innerText = text_value;
        comment_box[0].appendChild(rect);
        rect.appendChild(t);
        text[0].value = null;
    }
}
