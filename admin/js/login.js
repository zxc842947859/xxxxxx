$(function () {
    $('.login_form').on('submit', function (e) {
        e.preventDefault();
        const username = $('.input_txt').val(),
            password = $('.input_pass').val();
        if (username.length == 0 || password.length == 0) {
            // alert('请输入用户名或密码!')
            $('#myModal').modal()
        }
        $.ajax({
            type: 'post',
            url: 'http://192.168.19.68:8080/api/v1/admin/user/login',
            data: { username, password },
            success: function (backData) {
                console.log(backData);
                if (backData.code === 200) {
                    localStorage.setItem('token', backData.token);
                    $('.modal-body>p').text(backData.msg);
                    $('#myModal').modal()
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        location.href = 'index.html'
                    })
                } else {
                    $('.modal-body>p').text(backData.msg);
                    $('#myModal').modal()
                }
            }
        })
    })
})