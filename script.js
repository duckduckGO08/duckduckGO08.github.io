function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === '19950331') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('密码错误，请重试！');
    }
}

// 防止直接查看图片
document.addEventListener('contextmenu', event => event.preventDefault()); 