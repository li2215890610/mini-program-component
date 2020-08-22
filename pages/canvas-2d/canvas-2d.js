import hexToRgb from '../../utils/hexToRgb';

const CANVAS_WIDTH = 375;
//左侧间隙
const LEFT_INTERVAL = 10; 
//tag 居中
const TAG_CENTER_X = 7

const drawEllipse = ({
  ctx,
  pointX,
  pointY,
  width,
  height,
  radius,
  color,
  type
}) => {
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
}

const drawTitle = ({
  ctx,
  text,
  pointX,
  pointY,
  width
}) => {

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
}

const drawProductImage = ({ productImage, ctx }) => {
  const productImageWidth = 335;
  const productImageHeight = 335;
  const productImageX = 188.5;
  const productImageY = 188.5;
  ctx.drawImage(
    productImage,
    productImageX - productImageWidth / 2,
    productImageY - productImageHeight / 2,
    productImageWidth,
    productImageHeight
  );
}

const drawAppQrImage = ({ ctx, appQr }) => {
  // // 绘制小程序码
  const qrWidth = 100;
  const qrHeight = 100;
  //20为内边距
  const qrX = CANVAS_WIDTH - qrWidth - 20;
  const qrY = 515;
  ctx.drawImage(
    appQr,
    qrX,
    qrY,
    qrWidth,
    qrHeight
  )
}

const drawPriceUnit = ({ ctx, mainColor, paddingLeft }) => {
  ctx.font = "13px oblique";
  const priceUnit = '￥';
  ctx.fillStyle = mainColor;
  ctx.fillText(priceUnit, paddingLeft, 390);
  return ctx.measureText(priceUnit).width + paddingLeft;
}

const drawPrice = ({ ctx,  priceUnitEndX,  mainColor, productDetail }) => {

  ctx.font = "24px bold";
  let priceText = "";
  if (productDetail.tuan_activity && productDetail.tuan_activity.id) {
    priceText = `${productDetail.tuan_activity.price / 100}`;
  } else {
    priceText = `${productDetail.price / 100}`;
  }
  ctx.fillStyle = mainColor;
  ctx.fillText(priceText, priceUnitEndX , 392);

  return ctx.measureText(priceText).width + priceUnitEndX;
}

const drawOriginPrice = ({ originPrice, priceEndX, ctx }) => {
  let computeOriginPriceWidth = 0;

  if (!originPrice) {
    return priceEndX + LEFT_INTERVAL
  }

  // 原价
  ctx.font = "13px oblique";
  const originPriceText = `￥${(originPrice / 100)}`;
  ctx.fillStyle = '#999999';
  ctx.fillText(originPriceText, priceEndX + LEFT_INTERVAL, 391);
  computeOriginPriceWidth += ctx.measureText(originPriceText).width;
  
  // 原价划线
  ctx.beginPath()
  ctx.strokeStyle = '#999999';
  ctx.moveTo(priceEndX + LEFT_INTERVAL, 387)
  ctx.lineTo(priceEndX + LEFT_INTERVAL + computeOriginPriceWidth, 387)
  ctx.stroke()

  return priceEndX + LEFT_INTERVAL + computeOriginPriceWidth
}

const drawActivityTag = ({ ctx, originPriceEndX, rgb, mainColor, productDetail }) => {

  let activityTagEndX = 0;

  if (!productDetail.tuan_activity || !productDetail.tuan_activity.id) {
    return activityTagEndX;
  }

  activityTagEndX = originPriceEndX + LEFT_INTERVAL;
  ctx.font = "11px oblique";
  const activityTagText = `拼团`;
  ctx.fillStyle = mainColor;
  ctx.fillText(activityTagText, activityTagEndX + TAG_CENTER_X, 390);

  drawEllipse({
    ctx,
    pointX: activityTagEndX,
    pointY: 375,
    width: 36,
    height: 20,
    radius: 8,
    color: `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`,
    type: 'fill'
  })

  return activityTagEndX + 36
}

const drawBuyLimitTag = ({ ctx, activityTagEndX, rgb, mainColor, productDetail }) => {

  if (!productDetail.buy_limit || !productDetail.buy_limit.member_buy) {
    return false
  }

  ctx.font = "11px oblique";
  const memberTagText = `会员`;
  ctx.fillStyle = mainColor;
  ctx.fillText(memberTagText, activityTagEndX + LEFT_INTERVAL + TAG_CENTER_X, 390);
  drawEllipse({
    ctx,
    pointX: activityTagEndX + LEFT_INTERVAL,
    pointY: 375,
    width: 36,
    height: 20,
    radius: 8,
    color: `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`,
    type: 'fill'
  })
}

const drawPosters = ({
  mainColor,
  appQr,
  productImage,
  productDetail,
  fxProfile,
  storeName,
  ctx,
}) => {

  // 绘制背景
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 600, 900);

  // 绘制主图
  drawProductImage({ productImage, ctx })

  const paddingLeft = 20;

  //现价 ￥
  const priceUnitEndX = drawPriceUnit({ ctx, mainColor, paddingLeft })

  //现价
  let priceEndX = drawPrice({ ctx,  priceUnitEndX,  mainColor, productDetail });

  //原价
  let originPriceEndX = drawOriginPrice({ originPrice: productDetail.origin_price, priceEndX, ctx })

  const rgb = hexToRgb(mainColor);

  //判断拼团 砍价 预售 后续添加目前支持拼团
  const activityTagEndX = drawActivityTag({ ctx, originPriceEndX, rgb, mainColor, productDetail })

  drawBuyLimitTag({ ctx, activityTagEndX, rgb, mainColor, productDetail })

  if (productDetail.product_name) {
    // 绘制商品名
    drawTitle({
      ctx,
      text: productDetail.product_name,
      pointX: 20,
      pointY: 400,
      width: 310
    })
  }

  //绘制推荐人
  if (fxProfile.nickname) {
    const name = fxProfile.nickname;
    ctx.restore();
    ctx.fillStyle = '#999999';
    ctx.font = "11px oblique";
    ctx.fillText(`${name}为您推荐`, 20, 548);
  }

  // 绘制店铺名称
  ctx.fillStyle = '#666666';
  ctx.font = "13px oblique";
  ctx.fillText(storeName, 20, 565);

  // 绘制“长按识别小程序码访问”
  ctx.fillStyle = '#CCCCCC';
  ctx.font = "11px oblique";
  ctx.fillText("长按识别小程序码访问", 20, 580);

  drawAppQrImage({ appQr, ctx })
}

const canvasScale = ({ canvas, ctx, selectorCanvasDom})=>{
  const dpr = wx.getSystemInfoSync().pixelRatio
  canvas.width = selectorCanvasDom[0].width * dpr
  canvas.height = selectorCanvasDom[0].height * dpr
  ctx.scale(dpr, dpr)
}

const loadImg = ({ srcArr, canvas, cb }) => {
  Promise.all(srcArr.map((src) => {
    return new Promise((resolve) => {
      const image = canvas.createImage();
      image.src = src;
      image.onload = () => {
        resolve(image)
      }
    })
  })).then(cb);
}

const getPostersCanvas = () => {
  return new Promise((resolve)=>{
    wx.createSelectorQuery().select('#product-qr-canvas')
    .fields({
      node: true,
      size: true
    })
    .exec((res) => {
      const canvas = res[0].node;
      const ctx = canvas.getContext('2d');
      resolve({ canvas, ctx, selectorCanvasDom:res })
    });
  })
}

const saveImageToPhotosAlbum = (filePath) => {
  wx.saveImageToPhotosAlbum({
    filePath,
  })
    .then(res => {
      toast.show({
        title: "已保存到手机相册"
      });
    })
    .catch(err => {
      switch (err.errMsg) {
        case "saveImageToPhotosAlbum:fail auth deny":
          modal.show({
            content:
              "请您授权当前小程序“保存到相册”权限，以便将海报保存到您的手机相册中",
            confirmText: "去开启",
            onConfirm: () => {
              wx.openSetting();
            }
          });
          break;
        default:
          break;
      }
    });
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "product_name": "144Hz屏幕，量子蜂巢强劲散热。搭载144Hz屏幕，游戏不畏卡顿，支持Sync同步技术，画面也不易撕裂，流畅画面让人忘我投入。机身底部密集量子蜂巢，增强气流流动，散热效果也较好。",
      "price": 99,
      "pic": "http://s.jinjuxiaodian.com/source/593b78b8f8f9d516ca03a8cb/c7c2f2b0-dafb-11ea-8666-73bd5030379c.jpg",
      "origin_price": 29999,
      "tuan_activity":{
        id:12,
        price: 9
      },
      "buy_limit":{
        "member_buy": 1
      }
      
    }, {
      nickname: "生活教会我长大"
    }, {
      name: "金桔小店时尚模板"
    }],
    canvasWidth: CANVAS_WIDTH
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   **/
  onReady: function () {
    wx.showLoading({
      title: '正在加载',
    })
    const [productDetailState, fxProfileState, storeProfileState] = this.data.list;

    let url = ['https://s1.jinjuxiaodian.com/1597289602490-07830861455371068.png', productDetailState.pic];

    this.fetchImages(url).then((image) => {
      getPostersCanvas().then(({ canvas, ctx, selectorCanvasDom}) => {
        canvasScale({ ctx, canvas, selectorCanvasDom})
        loadImg({
          srcArr: image.map((e)=> e.path), canvas, cb: ([appQr, productImage]) => {
            drawPosters({
              mainColor: "#cf3a3b",
              productImage,
              appQr,
              fxProfile: fxProfileState,
              ctx,
              productDetail: productDetailState,
              storeName: storeProfileState.name
            })
            wx.hideLoading()
          }
        })
      })
     
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

  saveImage: function (params) {
    getPostersCanvas().then(({ canvas:newCanvas})=>{
      wx.canvasToTempFilePath({
        canvas:newCanvas,
        success: (res) => {
          saveImageToPhotosAlbum(res.tempFilePath)
        },
      })
    })
  }
})