"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Brand from '@/components/Brand';

const MESSAGES = {
  'auth/invalid-credential': 'Email hoặc mật khẩu không đúng.',
  'auth/invalid-email': 'Email chưa đúng định dạng.',
  'auth/user-disabled': 'Tài khoản này đã bị khóa.',
  'auth/too-many-requests': 'Đăng nhập sai quá nhiều lần. Chờ vài phút rồi thử lại.',
  'auth/network-request-failed': 'Không kết nối được. Kiểm tra mạng rồi thử lại.',
};

const field =
  'mt-2 block w-full min-h-12 rounded-sm border border-navy-400 bg-white px-4 py-3 text-base text-navy-950 focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace('/admin');
    } catch (err) {
      setError(MESSAGES[err?.code] || 'Chưa đăng nhập được. Thử lại sau.');
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-5 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Brand />
        </div>
        <div className="mt-8 rounded-md border border-navy-100 bg-white p-6 sm:p-8">
          <h1 className="text-2xl">Đăng nhập quản trị</h1>
          <p className="mt-2 text-muted">Dùng tài khoản đã tạo trong Firebase Authentication.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-6">
            {error && (
              <p role="alert" className="rounded-sm border-2 border-danger bg-red-50 px-4 py-3 font-medium text-danger">
                {error}
              </p>
            )}
            <div>
              <label htmlFor="a-email" className="font-semibold text-navy-800">Email</label>
              <input id="a-email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
            </div>
            <div>
              <label htmlFor="a-pass" className="font-semibold text-navy-800">Mật khẩu</label>
              <input id="a-pass" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className={field} />
            </div>
            <button type="submit" disabled={loading} aria-busy={loading} className="btn btn-navy w-full disabled:cursor-wait disabled:opacity-70">
              {loading ? 'Đang đăng nhập…' : 'Đăng nhập'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
