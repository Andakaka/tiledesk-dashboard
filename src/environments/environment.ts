
// export const environment = {
//   production: false,
//   remoteConfig: true,
//   remoteConfigUrl: './dashboard-config.json',
//   VERSION: require('../../package.json').version,
//   t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-DGF:T-NAT:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:T-DEV:T-NOT:T-RAS:T',
//   widgetUrl: 'http://localhost:4200/launch.js',
//   botcredendialsURL: 'CHANGEIT',
//   SERVER_BASE_URL: 'http://localhost:3000/',
//   CHAT_BASE_URL: 'http://localhost:8080/',
//   testsiteBaseUrl: 'http://localhost:4200/assets/test_widget_page/index.html',
//   wsUrl: 'ws://localhost:3000/',
//   chatEngine: 'mqtt',
//   firebaseAuth: false,
//   uploadEngine: 'native',
//   baseImageUrl: 'CHANGEIT',
//   pushEngine: 'none',
//   logLevel: 'Info',
//   templatesUrl: 'CHANGEIT',
//   appsUrl: 'CHANGEIT',
//   promoBannerUrl: 'CHANGEIT',
//   chatStoragePrefix: "CHANGEIT",
//   firebase: {
//       apiKey: 'CHANGEIT',
//       authDomain: 'CHANGEIT',
//       databaseURL: 'CHANGEIT',
//       projectId: 'CHANGEIT',
//       storageBucket: 'CHANGEIT',
//       messagingSenderId: 'CHANGEIT',
//       appId: 'CHANGEIT',
//       vapidKey: 'CHANGEIT'
//   }
// };


// -------------------------------------------------------------
// FOR TEST ENV PRE - the good one
// 'PAY:F-ANA:F-ACT:F-TRI:T-GRO:F-DEP:F-OPH:F-MTL:T-CAR:F-V1L:T-PSA:F-MTT:T-SUP:T-LBS:T-APP:T-DEV:F-NOT:T-IPS:F-ETK:F-RAS:T-PPB:F-PET:F-MTS:F-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:F-AST:F-MON:F-CNT:F-AUT:T',
// -------------------------------------------------------------
export const environment = {
  production: false,
  t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:T-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:T-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:T-AST:T-MON:T-CNT:T-AUT:T-WUN:T-INT:T-DPA:T-QIN:T-VAU:T',
  // t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:F-ANA:T-ACT:F-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:F-SUP:F-LBS:T-APP:F-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:F-PET:T-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:T-AST:T-MON:T-CNT:F-AUT:T-INT:T-DPA:T-QIN:F-VAU:F', // -MTS:T-WUN:T imagicle
  VERSION: require('../../package.json').version,
  WIDGET_BASE_URL: 'https://widget-pre.tiledesk.com/v5/',
  botcredendialsURL:'https://tiledesk-df-connector-pre.herokuapp.com/botcredendials/', // 'https://dialogflow-proxy-tiledesk.herokuapp.com/botcredendials/',
  rasaBotCredentialsURL: "https://tiledesk-rasa-connector-pre.herokuapp.com/botcredendials/",
  remoteConfig: false, 
  SERVER_BASE_URL: 'https://tiledesk-server-pre.herokuapp.com/',
  CHAT_BASE_URL: 'http://localhost:8100/', // '/chat-ionic5/', //'https://support-pre.tiledesk.com/chat-ionic5/', //https://support-pre.tiledesk.com/chat-ionic5/#/conversation-detail
  wsUrl: 'wss://tiledesk-server-pre.herokuapp.com/',
  reCaptchaSiteKey:"6Lf1khcpAAAAABMNHJfnJm43vVTxFzXM7ADqDAp5",
  // globalRemoteJSSrc: "https://www.google.com/recaptcha/api.js?render=6Lf1khcpAAAAABMNHJfnJm43vVTxFzXM7ADqDAp5", // "https://console.tiledesk.com/v2/dashboard/scripts/segment_script.js", //"https://support-pre.tiledesk.com/script/custom_script.js",
  globalRemoteJSSrc: 'http://localhost:4200/assets/custom_script.js',
  firebaseAuth: false,
  uploadEngine: 'firebase',
  baseImageUrl: 'https://tiledesk-server-pre.herokuapp.com/',
  pushEngine: 'firebase',
  chatEngine: 'firebase',
  logLevel: 'debug',
  communityTemplatesUrl: "https://tiledesk-server-pre.herokuapp.com/modules/templates/public/community",//'https://chatbot-templates-v2-pre.herokuapp.com/chatbots/public/community',
  templatesUrl: "https://tiledesk-server-pre.herokuapp.com/modules/templates/public/templates", //"https://chatbot-templates-v2-pre.herokuapp.com/chatbots/public/templates", //  "https://chatbot-templates.herokuapp.com/chatbots/public/templates/",
  appsUrl: "https://tiledesk-apps.glitch.me/", //"https://cd3ff4b5-5a06-44e3-aff2-3ce2ff1b848b-00-3eppvhwsi6nym.janeway.replit.dev/",//"https://tiledesk-apps-server-temp.giovannitroisi3.repl.co/", // "https://tiledesk-apps-server-temp.giovannitroisi3.repl.co/", // "https://tiledesk-apps.herokuapp.com/",
  cdsBaseUrl: 'https://support-pre.tiledesk.com/cds/',
  whatsappApiUrl: "https://tiledesk-whatsapp-app-pre.giovannitroisi3.repl.co",
  promoBannerUrl: "https://dashbordpromobanner.nicolan74.repl.co/get/dashboard_promo.json", 
  chatStoragePrefix: "chat_sv5",
  ticketingEmail: "tickets.tiledesk.com",
  brandSrc: "assets/brand/brand.json",
  firebase: {
      apiKey: "AIzaSyCoWXHNvP1-qOllCpTshhC6VjPXeRTK0T4",
      authDomain: "chat21-pre-01.firebaseapp.com",
      databaseURL: "https://chat21-pre-01.firebaseio.com",
      projectId: "chat21-pre-01",
      storageBucket: "chat21-pre-01.appspot.com",
      messagingSenderId: "269505353043",
      appId: "1:269505353043:web:b82af070572669e3707da6",
      vapidKey: "BOsgS2ADwspKdWAmiFDZXEYqY1HSYADVfJT3j67wsySh3NxaViJqoabPJH8WM02wb5r8cQIm5TgM0UK047Z1D1c"
  },
 };

// ENV PROD - MQTT _ PANEL.tiledesk
// imagicle PAY:F-ANA:T-ACT:T-TRI:F-GRO:T-DEP:T-OPH:T-MTL:T-DGF:F-NAT:T-CAR:T-V1L:F-PSA:T-MTT:T-DEV:T-MON:T-ETK:T-NOT:T-PET:T-WUN:T-INT:T-VAU:F'
// export const environment = {
//   production: true,
//   t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:F-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:T-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:T-AST:T-MON:T-CNT:T-AUT:T-WUN:T-INT:T-DPA:T-QIN:T-VAU:T',
//   // t2y12PruGU9wUtEGzBJfolMIgK: "PAY:F-ANA:F-ACT:F-TRI:T-GRO:T-DEP:T-OPH:F-MTL:T-CAR:F-V1L:T-PSA:T-MTT:F-SUP:F-LBS:T-APP:T-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:F-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:T-AST:T-MON:T-CNT:F-AUT:T-WUN:T-INT:T-DPA:T", // imagicle
//   VERSION: require('../../package.json').version,
//   botcredendialsURL: 'https://api.tiledesk.com/v3/modules/dialogflow/botcredendials/', //'https://tiledesk-df-connector-prod.herokuapp.com/botcredendials/',
//   rasaBotCredentialsURL: "https://tiledesk-rasa-connector-prod.herokuapp.com/botcredendials/",
//   remoteConfig: false,
//   remoteConfigUrl: "/environments/externalenv.json",
//   WIDGET_BASE_URL: 'https://widget.tiledesk.com/v6/',
//   SERVER_BASE_URL: 'https://api.tiledesk.com/v3/',
//   CHAT_BASE_URL: 'https://panel.tiledesk.com/v3/chat/', // 'http://localhost:8102/', // 'https://console.tiledesk.com/v2/chat5-dev/', // 'http://console.tiledesk.com/v2/chat/', 
//   testsiteBaseUrl: 'https://widget.tiledesk.com/v6/assets/twp/index.html', // 'https://widget.tiledesk.com/v5-dev/assets/twp/index.html',
//   wsUrl: "wss://eu.rtmv3.tiledesk.com/api/", // 'wss://eu.rtmv3.tiledesk.com/'
//   // wsUrlRel: "/ws/",
//   reCaptchaSiteKey:"6Lf1khcpAAAAABMNHJfnJm43vVTxFzXM7ADqDAp5",
//   globalRemoteJSSrc: "https://www.google.com/recaptcha/api.js?render=6Lf1khcpAAAAABMNHJfnJm43vVTxFzXM7ADqDAp5, https://panel.tiledesk.com/v3/scripts/script.js, https://panel.tiledesk.com/v3/scripts/custom_script.js, https://panel.tiledesk.com/v3/scripts/segment_script.js",
//   firebaseAuth: false,
//   uploadEngine: 'native',
//   baseImageUrl: 'https://eu.rtmv3.tiledesk.com/api/',
//   pushEngine: 'firebase',
//   chatEngine: 'mqtt',
//   logLevel: 'info',
//   communityTemplatesUrl: "https://api.tiledesk.com/v3/modules/templates/public/community" , // "https://chatbot-templates-app-v3.herokuapp.com/chatbots/public/community",
//   templatesUrl:  "https://api.tiledesk.com/v3/modules/templates/public/templates" , // "https://chatbot-templates-app-v3.herokuapp.com/chatbots/public/templates",
//   // appsUrl:"https://tiledesk-apps.herokuapp.com/",
//   appsUrl: "https://api.tiledesk.com/v3/modules/apps/",
//   cdsBaseUrl: 'https://panel.tiledesk.com/v3/cds/', //  'https://panel.tiledesk.com/v3/cds/dashboard/', // 'v3/cds',
//   whatsappApiUrl: 'https://api.tiledesk.com/v3/modules/whatsapp',
//   // promoBannerUrl: "https://dashbordpromobanner.tiledesk.repl.co/get/dashboard_promo.json",
//   chatStoragePrefix: "chat_sv6",
//   tiledeskPhoneNumber: "393201352964",
//   ticketingEmail: "email.tiledesk.com",
//   // brandSrc: "assets/brand/brand.json",
//   // brandSrc: "https://api.npoint.io/104d6d063f9913b0671e",
//   firebase: {
//       // apiKey: "AIzaSyDKfdKrlD7AYcbQ-U-xxgV-b3FUQ4xt7NM",
//       // authDomain: "tiledesk-prod-v2.firebaseapp.com",
//       // databaseURL: "https://tiledesk-prod-v2.firebaseio.com",
//       // projectId: "tiledesk-prod-v2",
//       // storageBucket: "tiledesk-prod-v2.appspot.com",
//       // messagingSenderId: "92907897826",
//       // appId: "1:92907897826:web:f255664014a7cc14ee2fbb",
//       // vapidKey: 'BLhTl-rK33_I4Avgk40T6MR9AGtgAfwDJK_sRbyBQHzIfyztLVsvrxILP6I6KgwagQCQIx-t6lgguEsSt0vULjw',
//        // new ---------------------
//       apiKey: "AIzaSyBv6ILBL_U6VfUs_y8kqPYn-b2mYRauq1k",
//       authDomain: "tiledesk-v3-prod-cf4ff.firebaseapp.com",
//       databaseURL: "https://tiledesk-v3-prod-cf4ff-default-rtdb.europe-west1.firebasedatabase.app",
//       projectId: "tiledesk-v3-prod-cf4ff",
//       storageBucket: "tiledesk-v3-prod-cf4ff.appspot.com",
//       messagingSenderId: "522823349790",
//       appId: "1:522823349790:web:0d4ba710f38b586e1fa00f",
//       vapidKey:"BH7R85jN8ovJ36J8BKYmfVZsIRWbUj_WXQMs8U3bDN02upqyqy2TpElVQIGMTUyOE2V7UwE11T_sy5yQHg02bjs"
      
//   },
// };


// Imagicle
// export const environment = { 
//   VERSION: require('../../package.json').version,
//   production: true,
//   remoteConfig: false,
//   t2y12PruGU9wUtEGzBJfolMIgK: "PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:T-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:T-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F-TOW:T-KNB:T-BAN:T-AST:T-MON:T-CNT:T-AUT:T-WUN-T-INT:T-DPA:T",
//   WIDGET_BASE_URL: "http://35.198.150.252/widget/",
//   SERVER_BASE_URL: "http://35.198.150.252/api/",
//   CHAT_BASE_URL: "http://35.198.150.252/chat/",
//   wsUrlRel: "/ws/",
//   chatEngine: "mqtt",
//   uploadEngine: "native",
//   baseImageUrl: "http://35.198.150.252/api/",
//   pushEngine: "none",
//   logLevel: "info",
//   communityTemplatesUrl: "http://35.198.150.252/api/modules/templates/public/community/",
//   templatesUrl: "http://35.198.150.252/api/modules/templates/public/templates/",
//   appsUrl:  "http://35.198.150.252/api/modules/apps/",
//   cdsBaseUrl: "http://35.198.150.252/cds/",
//   firebase: { }
// }

// ENV PROD - * the good one * // // "https://dashbordpromobanner.nicolan74.repl.co/get/dashboard_promo.json", 
// export const environment = {
//   production: true,
//   t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:T-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:T-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F',
//   VERSION: require('../../package.json').version,
//   widgetUrl: 'https://widget.tiledesk.com/v5/launch.js',
//   botcredendialsURL: 'https://tiledesk-df-connector-prod.herokuapp.com/botcredendials/',
//   rasaBotCredentialsURL: "https://tiledesk-rasa-connector-prod.herokuapp.com/botcredendials/",
//   remoteConfig: false, 
//   SERVER_BASE_URL: 'https://api.tiledesk.com/v2/',
//   CHAT_BASE_URL: 'http://localhost:8100/', // 'https://console.tiledesk.com/v2/chat5-dev/', // 'http://console.tiledesk.com/v2/chat/', 
//   testsiteBaseUrl: 'https://widget.tiledesk.com/v5/assets/twp/index.html', // 'https://widget.tiledesk.com/v5-dev/assets/twp/index.html',
//   wsUrl: 'wss://eu.rtm.tiledesk.com/v2/ws/',
//   globalRemoteJSSrc: "https://console.tiledesk.com/v2/dashboard/scripts/segment_script.js" ,//"https://console.tiledesk.com/v2/dashboard/scripts/script.js",
//   firebaseAuth: false,
//   uploadEngine: 'firebase',
//   baseImageUrl: 'https://api.tiledesk.com/v2/',
//   pushEngine: 'firebase',
//   chatEngine: 'firebase',
//   logLevel: 'info',
//   communityTemplatesUrl: 'https://chatbot-templates.herokuapp.com/chatbots/public/community',
//   templatesUrl: "https://chatbot-templates.herokuapp.com/chatbots/public/templates/",
//   appsUrl: "https://tiledesk-apps.herokuapp.com/",
//   promoBannerUrl: "https://dashbordpromobanner.tiledesk.repl.co/get/dashboard_promo.json",
//   chatStoragePrefix: "chat_sv5",
//   ticketingEmail: "tickets.tiledesk.com",
//   firebase: {
//       apiKey: "AIzaSyDKfdKrlD7AYcbQ-U-xxgV-b3FUQ4xt7NM",
//       authDomain: "tiledesk-prod-v2.firebaseapp.com",
//       databaseURL: "https://tiledesk-prod-v2.firebaseio.com",
//       projectId: "tiledesk-prod-v2",
//       storageBucket: "tiledesk-prod-v2.appspot.com",
//       messagingSenderId: "92907897826",
//       appId: "1:92907897826:web:f255664014a7cc14ee2fbb",
//       vapidKey: 'BLhTl-rK33_I4Avgk40T6MR9AGtgAfwDJK_sRbyBQHzIfyztLVsvrxILP6I6KgwagQCQIx-t6lgguEsSt0vULjw'
//   },
// };


// FOR TEST ENV PROD - MQTT
// export const environment = {
//   production: true,
//   t2y12PruGU9wUtEGzBJfolMIgK: 'PAY:T-ANA:T-ACT:T-TRI:T-GRO:T-DEP:T-OPH:T-MTL:T-CAR:T-V1L:T-PSA:T-MTT:T-SUP:T-LBS:T-APP:T-DEV:T-NOT:T-IPS:T-ETK:T-RAS:T-PPB:T-PET:T-MTS:T-TIL:T-DGF:T-NAT:T-HPB:F',
//   VERSION: require('../../package.json').version,
//   widgetUrl: 'https://widget.tiledesk.com/v6/launch.js',
//   botcredendialsURL: 'https://tiledesk-df-connector-prod.herokuapp.com/botcredendials/',
//   rasaBotCredentialsURL: "https://tiledesk-rasa-connector-prod.herokuapp.com/botcredendials/",
//   remoteConfig: false, 
//   SERVER_BASE_URL: 'https://api.tiledesk.com/v3/',
//   CHAT_BASE_URL: 'http://console.tiledesk.com/v2/chat/', // 'http://localhost:8102/', // 'https://console.tiledesk.com/v2/chat5-dev/', // 'http://console.tiledesk.com/v2/chat/', 
//   testsiteBaseUrl: 'https://widget.tiledesk.com/v6/assets/twp/index.html', // 'https://widget.tiledesk.com/v5-dev/assets/twp/index.html',
//   wsUrl: 'wss://eu.rtmv3.tiledesk.com/api/',
//   globalRemoteJSSrc: "https://console.tiledesk.com/v2/dashboard/scripts/segment_script.js" ,//"https://console.tiledesk.com/v2/dashboard/scripts/script.js",
//   firebaseAuth: false,
//   uploadEngine: 'native',
//   baseImageUrl: ' https://eu.rtmv3.tiledesk.com/api/',
//   pushEngine: 'firebase',
//   chatEngine: 'mqtt',
//   logLevel: 'info',
//   // appsUrl: "https://tiledesk-apps.herokuapp.com/",
//   appsUrl: "https://api.tiledesk.com/v3/modules/apps/",
//   promoBannerUrl: "https://dashbordpromobanner.tiledesk.repl.co/get/dashboard_promo.json",
//   chatStoragePrefix: "chat_sv6",
//   firebase: {
//       apiKey: "AIzaSyDKfdKrlD7AYcbQ-U-xxgV-b3FUQ4xt7NM",
//       authDomain: "tiledesk-prod-v2.firebaseapp.com",
//       databaseURL: "https://tiledesk-prod-v2.firebaseio.com",
//       projectId: "tiledesk-prod-v2",
//       storageBucket: "tiledesk-prod-v2.appspot.com",
//       messagingSenderId: "92907897826",
//       appId: "1:92907897826:web:f255664014a7cc14ee2fbb",
//       vapidKey: 'BLhTl-rK33_I4Avgk40T6MR9AGtgAfwDJK_sRbyBQHzIfyztLVsvrxILP6I6KgwagQCQIx-t6lgguEsSt0vULjw'
//   },
// };


