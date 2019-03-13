var host = 'http://www.token5china.com:18080/'
// var host = 'https://litemall.token5china.com/';

//在线更新
var upVersion = host+'';

//首页数据
var homeList = host+'wx/home/index';

//分类 下面的list数据
var goodslist = host+'wx/goods/list';

//商品详情
var goodInfo = host+'wx/goods/detail';

//商品详情 -- 大家都在看
var goodInfoSee = host+'wx/goods/related';

//注册
var reg = host+'wx/auth/register';

//登陆
var login = host+'wx/auth/login';

//忘记密码
var forget = host+'wx/auth/reset';

//发送验证码
var sendYzmData = host+'wx/aug/sendCode';

//绑定手机号
var bindMobile =host+'wx/aug/bindMobile';

//获取身份与余额
var identity =host+'wx/aug/getIdentity';


/*加入购物车*/
var carAdd =host+'wx/cart/add';

//购物车删除
var carDel = host+'wx/cart/delete';

/*获取购物车 list*/
var carList =host+'wx/cart/index';

/*更改购物车 checked状态*/
var checked =host+'wx/cart/checked';

/*更改购物车 +-数量*/
var carNum = host+'wx/cart/update';

/*立刻购买*/
var carBuy = host+'wx/cart/fastadd';

//购买前 
var buying = host+'wx/cart/checkout';

//购买前  提交订单
var buy = host+'wx/order/submit';

//支付
var buyWx = host+'wx/apppay/prepay';

//获取地址 list
var addressList = host+'wx/address/list';

//地址 添加或更新
var addressAdd = host+'wx/address/save';

//地址 详情
var addressSee = host+'wx/address/detail';

//地址 删除
var addressDel = host+'wx/address/delete';

//成为魔晶大佬
var dalaoReg = host+'wx/aug/applyAI';

//转账申请
var zhuan = host+'wx/aug/transfer';

//转账记录
var zhuanList = host+'wx/aug/getTransferList';

//提现申请
var tixian = host+'wx/aug/withdraw';

//提现记录
var tixianList = host+'wx/aug/getWithdrawList';

//魔晶转账
var moZhuan = host+'wx/aug/transferMJ';

//魔晶转账记录
var moZhuanList = host+'wx/aug/getTransferMJList';

//佣金记录
var yongList = host+'wx/aug/getAccountChangeList';

//订单list
var orderList = host+'wx/order/list';

//订单 详情 info
var orderInfo = host+'wx/order/detail';

//订单  取消（未付款）
var orderQuxiao = host+'wx/order/cancel';

