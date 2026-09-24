/* 成語猜猜猜 — Firebase 設定
   到 Firebase 主控台 → 專案設定 → 一般 → 你的應用程式（網頁），
   把 firebaseConfig 的內容貼進下面的大括號裡。
   這些值本來就會公開在前端，放在公開 repo 沒問題；
   真正的資料保護靠 Firestore 規則（users/{uid} 只允許本人讀寫）。 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCfSHS0oAG2uvYRMsCosEbGYae2xMoS1Zk",
  authDomain: "idiomguess-f99ac.firebaseapp.com",
  projectId: "idiomguess-f99ac",
  storageBucket: "idiomguess-f99ac.firebasestorage.app",
  messagingSenderId: "404663146349",
  appId: "1:404663146349:web:91b871d010ca6c83c66c64",
  measurementId: "G-Q510L5NW63"
};
