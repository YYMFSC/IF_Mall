Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '',
        loading: true,
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id;
        console.log(id)
        const _this = this;
        //     this.setData({
        //       movie:{
        //         id: 1,
        // img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0404%252F11cdc498j00qr0xof002pd000hs00npp.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620489786&t=70d06d16adb851dcdcfc468937fc1341",
        // neirong: "打打杀杀打算 爱仕达&nbsp; &nbsp;啊实打实&nbsp; &nbsp;< img src=\"/uploadfile/attached/image/20210502/20210502154546_7189.jpg\" width=\"111\" height=\"111\" title=\"111\" align=\"left\" alt=\"111\" /><span class=\"mini-textbox-border mini-corner-all\"></span>",
        // price: "1111 ",
        // title: "新品旗袍",
        // uid: 111
        //       },
        //       loading:false
        //     })

        // 请求数据
        wx.request({
            url: 'http://localhost:58843/Controllers/mateHandler.ashx?method=GetById',
            data: {
                id: id
            },
            header: {
                'content-type': 'json'
            },
            success: function (res) {
                //console.log(res.data.objectClass.neirong);
                //var str = res.data.objectClass.neirong;
                var b = /<img [^>]*src=['"]([^'"]+)[^>]*>/g;
                var s = res.data.objectClass.neirong.match(b); // 取到所有img标签 放到数组 s里面
                
                for (var i = 0; i < s.length; i++) {
                    var srcImg = s[i].replace(b, '$1'); //取src面的内容
                    if (srcImg.slice(0, 4) == 'http' || srcImg.slice(0, 5) == 'https') {
                        //若src前4位置或者前5位是http、https则不做任何修改
                        console.log('不做任何修改');
                    } else {
                        //修改富文本字符串内容 img标签src 相对路径改为绝对路径
                        res.data.objectClass.neirong=res.data.objectClass.neirong.replace(new RegExp(srcImg, 'g'), 'http://localhost:58843' + srcImg);
                        console.log(res.data.objectClass.neirong);
                    }
                }
                _this.setData({
                    movie: res.data.objectClass,
                    loading: false
                })
            }
        })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
            // 修改导航栏标题
            wx.setNavigationBarTitle({
                title: this.data.title
            })
        }
})