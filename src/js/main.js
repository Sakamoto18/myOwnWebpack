	//导入jQuery包
    import $ from 'jquery'//这里需要安装库类
    import "../css/index.css"
    // 设置偶数行背景色，索引从0开始，0是偶数
    $('li:even').css('backgroundColor','lightblue');
    // 设置奇数行背景色
    $('li:odd').css('backgroundColor','pink');
