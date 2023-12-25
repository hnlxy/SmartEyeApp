
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ffbb98","titleText":"智眼守护","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"weex","flex-direction":"column"},"renderer":"auto","appname":"SmartEyeApp","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.98","entryPagePath":"pages/tabbar/tabbar-1/tabbar-1","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#919ea3","selectedColor":"#ffffff","borderStyle":"white","blurEffect":"none","fontSize":"10px","iconWidth":"45px","spacing":"3px","height":"80px","backgroundColor":"#ffbb98","iconfontSrc":"static/fonts/iconfont1.ttf","list":[{"pagePath":"pages/tabbar/tabbar-1/tabbar-1","text":"","iconPath":"/static/img/tabbar/index.png","selectedIconPath":"/static/img/tabbar/index(selected).png"},{"pagePath":"pages/tabbar/tabbar-2/tabbar-2","text":"","iconPath":"/static/img/tabbar/arrange.png","selectedIconPath":"/static/img/tabbar/arrange(selected).png"},{"pagePath":"pages/tabbar/tabbar-3/tabbar-3","iconPath":"/static/img/tabbar/appliance.png","selectedIconPath":"/static/img/tabbar/appliance(selected).png"},{"pagePath":"pages/tabbar/tabbar-4/tabbar-4","text":"","iconPath":"/static/img/tabbar/contact.png","selectedIconPath":"/static/img/tabbar/contact(selected).png"},{"pagePath":"pages/tabbar/tabbar-5/tabbar-5","text":"","iconPath":"/static/img/tabbar/user.png","selectedIconPath":"/static/img/tabbar/user(selected).png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/tabbar/tabbar-1/tabbar-1","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/user/login-or-register","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-2/tabbar-2","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"统计","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-3/tabbar-3","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"菜单","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-4/tabbar-4","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"通讯录","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/tabbar-5","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"个人中心","type":"default"},"isNVue":false}},{"path":"pages/tabbar-3-detial/tabbar-3-report/tabbar-3-report","meta":{"navigationBar":{"titleText":"健康报告","type":"default"},"isNVue":false}},{"path":"pages/tabbar-3-detial/tabbar-3-record/tabbar-3-record","meta":{"navigationBar":{"titleText":"视频电话","type":"default"},"isNVue":false}},{"path":"pages/tabbar-3-detial/tabbar-3-teach/tabbar-3-teach","meta":{"navigationBar":{"titleText":"教学管理","type":"default"},"isNVue":false}},{"path":"pages/tabbar-3-detial/tabbar-3-see/tabbar-3-see","meta":{"navigationBar":{"titleText":"家庭监护","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-1/messages","meta":{"navigationBar":{"titleText":"消息通知","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-1/status","meta":{"navigationBar":{"titleText":"状态","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/bind_uid","meta":{"navigationBar":{"titleText":"绑定UID","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/address","meta":{"navigationBar":{"titleText":"地址","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/help","meta":{"navigationBar":{"titleText":"帮助中心","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/setting/language","meta":{"navigationBar":{"titleText":"设置语言","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/setting/support","meta":{"navigationBar":{"titleText":"支持","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/setting/change_PIN","meta":{"navigationBar":{"titleText":"修改PIN","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/setting/about_us","meta":{"navigationBar":{"titleText":"关于我们","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-3/verify_code","meta":{"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-1/video_replay","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/tabbar/tabbar-5/setting","meta":{"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/chat/chats","meta":{"navigationBar":{"titleText":"聊天","type":"default"},"isNVue":false}},{"path":"pages/user/register","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"注册","type":"default"},"isNVue":false}},{"path":"pages/user/login","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"登录","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  