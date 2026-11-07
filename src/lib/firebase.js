// Kết nối Firebase. Cấu hình đọc từ .env.local (xem .env.example).
// Cấu hình web của Firebase là công khai theo thiết kế; dữ liệu được bảo vệ bằng firestore.rules.
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Mỗi biến phải viết đầy đủ tên để Next.js nhúng được vào code phía trình duyệt.
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebase (lưu form vào Firestore + trang /admin) chỉ chạy khi bật NEXT_PUBLIC_ENABLE_ADMIN=true.
// Khi tắt, form báo giá gửi qua Tin nhắn (điện thoại) hoặc Email (máy tính).
export const firebaseReady =
  process.env.NEXT_PUBLIC_ENABLE_ADMIN === 'true' && Boolean(config.apiKey && config.projectId && config.appId);

const app = firebaseReady ? (getApps().length ? getApp() : initializeApp(config)) : null;

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

// Tên collection lưu yêu cầu báo giá. Đổi ở đây thì nhớ đổi cả trong firestore.rules.
export const QUOTES = 'yeu_cau_bao_gia';
