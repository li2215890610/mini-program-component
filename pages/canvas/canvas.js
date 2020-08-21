// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "_id": "5f312e5397bc022dbac2f737",
      "product_name": "144Hz屏幕，量子蜂巢强劲散热。搭载144Hz屏幕，游戏不畏卡顿，支持Sync同步技术，画面也不易撕裂，流畅画面让人忘我投入。机身底部密集量子蜂巢，增强气流流动，散热效果也较好。",
      "price": 599999,
      "pic": "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
      "pics": [
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7aa88b0-dafb-11ea-8666-73bd5030379c.jpg",
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c54150e0-dafb-11ea-8666-73bd5030379c.jpg",
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c3839b50-dafb-11ea-aac3-f777df03dbf6.jpg"
      ],
      "detail_pics": [
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7aa88b0-dafb-11ea-8666-73bd5030379c.jpg",
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c54150e0-dafb-11ea-8666-73bd5030379c.jpg",
        "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c3839b50-dafb-11ea-aac3-f777df03dbf6.jpg"
      ],
      "type": null,
      "state": 1,
      "category": [
        "000000000000000000000000",
        "594bca18867c576984eeb8da"
      ],
      "structural_desc": "",
      "desc": "看清楚 这是测试，下单不退款、不发货",
      "product_price": 2999,
      "rich_content": "%3Cp%3E%3C%2Fp%3E",
      "is_fenxiao": 1,
      "fenxiao_share": 0,
      "video": {
        "url": "",
        "thumbnail": ""
      },
      "need_id_card": 0,
      "count_sold": 16,
      "post_fee_text": "￥0.01",
      "tuan": {
        "start_time": 1597299191454,
        "end_time": 1788019200491,
        "need_member_num": 3,
        "discount": 5,
        "total_limit": 100,
        "count": 10,
        "status": 1
      },
      "buy_limit": {
        "quota": null,
        "quota_cycle": null,
        "member_buy": 0
      },
      "buy_count_by_limit": 0,
      "sku": [{
          "_id": "5f312e5397bc022dbac2f739",
          "name": "M 灰色",
          "price": 599,
          "pic": "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
          "detail_pics": [],
          "state": null,
          "count_rest": 9998,
          "count_sold": 2,
          "origin_price": 299,
          "attr_value_str": "0_35,11_9",
          "product_code": "1"
        },
        {
          "_id": "5f312e5397bc022dbac2f738",
          "name": "L 灰色",
          "price": 599,
          "pic": "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
          "detail_pics": [],
          "state": null,
          "count_rest": 9986,
          "count_sold": 14,
          "origin_price": 299,
          "attr_value_str": "0_25,11_9",
          "product_code": "2"
        }
      ],
      "attributes": [
        0,
        11
      ],
      "advance_sale_info": {
        "enabled": 0,
        "type": null,
        "sendout_time_type": null,
        "sendout_time_text": null,
        "earnest_money_start_time": null,
        "earnest_money_end_time": null,
        "tail_money_start_time": null,
        "tail_money_end_time": null,
        "earnest_money_ratio": null
      }
    }, {
      nickname: "生活教会我长大"
    }, {
      name: "金桔小店时尚模板"
    }],
    canvasWidth: 350
  },

  // onReady: function (params) {
  //   const query = wx.createSelectorQuery()
  //   query.select('#product-qr-canvas')
  //     .fields({ node: true, size: true })
  //     .exec((res) => {

  //       const [imageQr, imageProduct, productDetailState, fxProfileState, storeProfileState] = this.data.list;

  //       const canvas = res[0].node
  //       const ctx = canvas.getContext('2d')

  //       ctx.fillStyle = "#FFFFFF";
  //       ctx.fillRect(0, 0, 600, 900);

  //       // 绘制主图
  //       const productImageWidth = 310;
  //       const productImageHeight = 310;
  //       const productImageX = 75;
  //       const productImageY = 75;
  //       wx.getImageInfo({
  //         src: imageProduct.path,
  //         success:  (res)=> {
  //           ctx.drawImage(
  //             res.path,
  //             productImageX - productImageWidth / 2,
  //             productImageY - productImageHeight / 2,
  //             productImageWidth,
  //             productImageHeight
  //           );
  //         }
  //       })

  //       const productTitle = `${productDetailState.product_name.slice( 0, 46 )}${productDetailState.product_name.length > 46 ? "..." : ""}`;

  //       ctx.fillStyle = "red";
  //       ctx.fontSize = 20;
  //       ctx.fillText(productTitle, 20, 100);

  //     })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   **/
  onReady: function () {
    const ctx = wx.createCanvasContext('product-qr-canvas')

    const [productDetailState, fxProfileState, storeProfileState] = this.data.list;
    const {
      canvasWidth
    } = this.data;

    let url = ['https://s1.jinjuxiaodian.com/1597289602490-07830861455371068.png', 'https://s1.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg'];

    this.fetchImages(url).then((res) => {
      const [imageQr, imageProduct, ] = res;

      // 绘制背景
      ctx.setFillStyle("#FFFFFF");
      ctx.fillRect(0, 0, 600, 900);

      // 绘制主图
      const productImageWidth = 310;
      const productImageHeight = 335;
      const productImageX = 175;
      const productImageY = 190;
      ctx.drawImage(
        imageProduct.path,
        productImageX - productImageWidth / 2,
        productImageY - productImageHeight / 2,
        productImageWidth,
        productImageHeight
      );
      
      const paddingLeft = 20;
      //现价 ￥
      ctx.setFontSize(13);
      const price$text = '￥';
      ctx.setFillStyle('#EC4A3B');
      ctx.fillText(price$text, paddingLeft, 390);
      const price$MetricsWidth = ctx.measureText(price$text).width;

      //现价
      ctx.setFontSize(24);
      const priceText = `${( productDetailState.product_price / 100 )}`;
      ctx.setFillStyle('#EC4A3B');
      ctx.fillText(priceText, price$MetricsWidth + paddingLeft, 392);
      let computePriceWidth = ctx.measureText(priceText).width

      let computeOriginPriceWidth = 0;
      if (productDetailState.price) {
        // 原价
        ctx.setFontSize(13);
        const originPriceText = `￥${( productDetailState.price / 100 )}`;
        ctx.setFillStyle('#999999');
        ctx.fillText(originPriceText, computePriceWidth + price$MetricsWidth  + paddingLeft + 10, 391);
        computeOriginPriceWidth += ctx.measureText(originPriceText).width;

        // 原价划线
        ctx.beginPath()
        ctx.setStrokeStyle('#999999')
        ctx.moveTo(computePriceWidth + price$MetricsWidth + paddingLeft + 10, 387)
        ctx.lineTo(computePriceWidth + price$MetricsWidth + paddingLeft + 10 + computeOriginPriceWidth, 387)
        ctx.stroke()
      }

      let activityTagMetrics = {
        width: 0
      }

      let activityTagWidth = price$MetricsWidth + computePriceWidth + paddingLeft + computeOriginPriceWidth;

      //判断拼团 砍价 秒杀 预售
      // if (activityTagMetrics.width === 0) {
        ctx.setFontSize(11);

        const activityTagText = `拼团`;
        activityTagMetrics = ctx.measureText(activityTagText);
        activityTagWidth += activityTagMetrics.width;
        ctx.setFillStyle('#DE000A');
        ctx.fillText(activityTagText, activityTagWidth + 7, 390);
        this.drawEllipse({
          ctx,
          pointX: activityTagWidth,
          pointY: 375,
          width: 36,
          height: 20,
          radius: 8,
          color: 'rgba(222,0,10,0.1)',
          type: 'fill'
        })
      // }

      // if () {
      ctx.setFontSize(11);
      const memberTagText = `会员`;
      const memberTagextMetrics = ctx.measureText(memberTagText);
      ctx.setFillStyle('#DE000A');
      ctx.fillText(memberTagText, activityTagWidth + memberTagextMetrics.width + 27, 390);
      this.drawEllipse({
        ctx,
        pointX: activityTagWidth + memberTagextMetrics.width + 20,
        pointY: 375,
        width: 36,
        height: 20,
        radius: 8,
        color: 'rgba(222,0,10,0.1)',
        type: 'fill'
      })
      // }


      if (productDetailState.product_name) {
        // 绘制商品名
        this.drawTitle({
          ctx,
          text: productDetailState.product_name,
          pointX: 20,
          pointY: 400,
          width: 310
        })
      }

      //绘制推荐人
      if (fxProfileState.nickname) {
        const name = fxProfileState.nickname;
        ctx.restore();
        ctx.setFillStyle('#999999');
        ctx.setFontSize(11);
        ctx.fillText(`${name}为您推荐`, 20, 548);
      }

      // 绘制店铺名称
      ctx.setFillStyle('#666666');
      ctx.setFontSize(13);
      ctx.fillText(storeProfileState.name, 20, 565);

      // 绘制“长按识别小程序码访问”
      ctx.setFillStyle('#CCCCCC');
      ctx.setFontSize(11);
      ctx.fillText("长按识别小程序码访问", 20, 580);

      // // 绘制小程序码
      const qrWidth = 100;
      const qrHeight = 100;
      //20为内边距
      const qrX = canvasWidth - qrWidth - 20;
      const qrY = 515;
      const qrPath = imageQr.path;
      ctx.drawImage(qrPath, qrX, qrY, qrWidth, qrHeight);
      
      ctx.draw(false, () => {
        wx.canvasToTempFilePath({
            destWidth: 750,
            destHeight: 1260,
            canvasId: "product-qr-canvas"
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            wx.show({
              title: "生成分销码失败，请重试"
            });
          });
      });
    })
  },

  fetchImages: function (images) {
    return Promise.all(
      images.map(url =>
        wx.getImageInfo({
          src: url
        })
      )
    );
  },

  drawEllipse: function ({
    ctx,
    pointX,
    pointY,
    width,
    height,
    radius,
    color,
    type
  }) {
    ctx.beginPath();
    ctx.moveTo(pointX, pointY + radius);
    ctx.lineTo(pointX, pointY + height - radius);
    ctx.quadraticCurveTo(pointX, pointY + height, pointX + radius, pointY + height);
    ctx.lineTo(pointX + width - radius, pointY + height);
    ctx.quadraticCurveTo(pointX + width, pointY + height, pointX + width, pointY + height - radius);
    ctx.lineTo(pointX + width, pointY + radius);
    ctx.quadraticCurveTo(pointX + width, pointY, pointX + width - radius, pointY);
    ctx.lineTo(pointX + radius, pointY);
    ctx.quadraticCurveTo(pointX, pointY, pointX, pointY + radius);
    ctx[type + 'Style'] = color
    ctx.closePath();
    ctx[type]();
  },

  drawTitle: function ({
    ctx,
    text,
    pointX,
    pointY,
    width
  }) {

    ctx.setFillStyle("#202020");
    ctx.setFontSize(20);
    ctx.textBaseline = "middle";
    let textArr = text.split("");
    let temp = "";
    let row = [];
    for (let i = 0; i < textArr.length; i++) {

      if (ctx.measureText(temp).width < width && ctx.measureText(temp + (textArr[i])).width <= width) {
        temp += textArr[i];
      } else {
        if (row.length < 2) {
          row.push(temp);
          temp = textArr[i];
        }
      }
    }

    row.push(temp);

    for (var i = 0; i < row.length; i++) {
      let str = row[i];
      if (i === 2) {
        str = str.substring(0, str.length - 1) + '...';
      }
      ctx.fillText(str, pointX, pointY + (i + 1) * 24);
    }
  },

})