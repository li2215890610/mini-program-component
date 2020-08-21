// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "product_name": "144Hz屏幕，量子蜂巢强劲散热。搭载144Hz屏幕，游戏不畏卡顿，支持Sync同步技术，画面也不易撕裂，流畅画面让人忘我投入。机身底部密集量子蜂巢，增强气流流动，散热效果也较好。",
      "price": 599999,
      "pic": "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
      "product_price": 2999,
    }, {
      nickname: "生活教会我长大"
    }, {
      name: "金桔小店时尚模板"
    }],
    canvasWidth: 375
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   **/
  onReady: function () {

    const [productDetailState, fxProfileState, storeProfileState] = this.data.list;
    const {
      canvasWidth
    } = this.data;
    const query = wx.createSelectorQuery()
    query.select('#product-qr-canvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d')
        console.log(canvas,ctx);
        
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)

        let url = ['https://s1.jinjuxiaodian.com/1597289602490-07830861455371068.png', productDetailState.pic];

        this.fetchImages(url).then((res) => {

          const [appQr, productQr] = res;

          // 绘制背景
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, 600, 900);

          // 绘制主图
          const productImageWidth = 335;
          const productImageHeight = 335;
          const productImageX = 187.5;
          const productImageY = 187.5;
          const imageProduct = canvas.createImage();
          imageProduct.onload = () => ctx.drawImage(
            imageProduct,
            productImageX - productImageWidth / 2,
            productImageY - productImageHeight / 2,
            productImageWidth,
            productImageHeight
          );;
          imageProduct.src = productQr.path;


          const paddingLeft = 20;
          //现价 ￥
          ctx.font = "13px oblique";
          const price$text = '￥';
          ctx.fillStyle = '#EC4A3B';
          ctx.fillText(price$text, paddingLeft, 390);
          const price$MetricsWidth = ctx.measureText(price$text).width;


          //现价
          ctx.font = "24px oblique";
          const priceText = `${( productDetailState.product_price / 100 )}`;
          ctx.fillStyle = '#EC4A3B';
          ctx.fillText(priceText, price$MetricsWidth + paddingLeft, 392);
          let computePriceWidth = ctx.measureText(priceText).width

          let computeOriginPriceWidth = 0;
          if (productDetailState.price) {
            // 原价
            ctx.font = "13px oblique";
            const originPriceText = `￥${( productDetailState.price / 100 )}`;
            ctx.fillStyle = '#999999';
            ctx.fillText(originPriceText, computePriceWidth + price$MetricsWidth + paddingLeft + 10, 391);
            computeOriginPriceWidth += ctx.measureText(originPriceText).width;

            // 原价划线
            ctx.beginPath()
            ctx.strokeStyle = '#999999';
            ctx.moveTo(computePriceWidth + price$MetricsWidth + paddingLeft + 10, 387)
            ctx.lineTo(computePriceWidth + price$MetricsWidth + paddingLeft + 10 + computeOriginPriceWidth, 387)
            ctx.stroke()
          }

          let activityTagMetrics = {
            width: 0
          }

          let activityTagWidth = price$MetricsWidth + computePriceWidth + paddingLeft + computeOriginPriceWidth;

          //判断各种Tag
          ctx.font = "11px oblique";
          const activityTagText = `拼团`;
          activityTagMetrics = ctx.measureText(activityTagText);
          activityTagWidth += activityTagMetrics.width;
          ctx.fillStyle = '#DE000A';
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

          ctx.font = "11px oblique";
          const memberTagText = `会员`;
          const memberTagextMetrics = ctx.measureText(memberTagText);
          ctx.fillStyle = '#DE000A';
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
            ctx.fillStyle = '#999999';
            ctx.font = "11px oblique";
            ctx.fillText(`${name}为您推荐`, 20, 548);
          }

          // 绘制店铺名称
          ctx.fillStyle = '#666666';
          ctx.font = "13px oblique";
          ctx.fillText(storeProfileState.name, 20, 565);

          // 绘制“长按识别小程序码访问”
          ctx.fillStyle = '#CCCCCC';
          ctx.font = "11px oblique";
          ctx.fillText("长按识别小程序码访问", 20, 580);

          // // 绘制小程序码
          const qrWidth = 100;
          const qrHeight = 100;
          //20为内边距
          const qrX = canvasWidth - qrWidth - 20;
          const qrY = 515;


          const imageQr = canvas.createImage();
          imageQr.onload = () => ctx.drawImage(
            imageQr,
            qrX,
            qrY,
            qrWidth,
            qrHeight
          );;
          imageQr.src = appQr.path;

          // ctx.draw(false, () => {
          //   wx.canvasToTempFilePath({
          //       destWidth: 750,
          //       destHeight: 1260,
          //       canvasId: "product-qr-canvas"
          //     })
          //     .then(res => {
          //       console.log(res);
          //     })
          //     .catch(err => {
          //       wx.show({
          //         title: "生成分销码失败，请重试"
          //       });
          //     });
          // });
        })
      })
  },

  saveImageToPhotosAlbum: function () {
    wx.canvasToTempFilePath({
        destWidth: 750,
        destHeight: 1260,
        canvasId: "product-qr-canvas",
        success: function (res) {
          console.log(res);
        },
        fail: function (err) {
          console.log(err);
        }
      })
  },
  fetchImages: function (images) {
    const downloadFilePromise = [];
    images.map(url => {
      const download = new Promise((resovle, reject) => {
        wx.downloadFile({
          url: url,
          success: (res) => {
            if (res.statusCode === 200) {
              resovle({
                path: res.tempFilePath
              })
            }
          },
          fail: () => {
            reject()
          }
        })
      })
      downloadFilePromise.push(download)
    })
    return Promise.all(downloadFilePromise);
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

    ctx.fillStyle = "#202020";
    ctx.font = "20px oblique";
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