"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, firebaseReady } from '@/lib/firebase';
import Brand from '@/components/Brand';

// Guards /admin/* on the client. Real protection of the data is in firestore.rules.
export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === '/admin/login';
  const [user, setUser] = useState(undefined); // undefined = still checking

  useEffect(() => {
    if (!firebaseReady) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (user === null && !isLogin) router.replace('/admin/login');
    if (user && isLogin) router.replace('/admin');
  }, [user, isLogin, router]);

  if (!firebaseReady) {
    return (
      <main className="mx-auto max-w-xl px-5 py-20">
        <h1 className="text-3xl">Chưa cấu hình Firebase</h1>
        <p className="mt-4">
          Tạo file <code className="rounded-sm bg-mist px-1.5 py-0.5">.env.local</code> theo mẫu{' '}
          <code className="rounded-sm bg-mist px-1.5 py-0.5">.env.example</code> ở thư mục gốc dự án, rồi khởi động lại{' '}
          <code className="rounded-sm bg-mist px-1.5 py-0.5">npm run dev</code>.
        </p>
      </main>
    );
  }

  if (isLogin) return children;

  if (!user) {
    return (
      <p role="status" className="px-5 py-20 text-center text-muted">
        Đang kiểm tra đăng nhập…
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <header className="border-b border-navy-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/admin" className="rounded-sm">
            <Brand />
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-sm text-muted">{user.email}</span>
            <Link href="/" className="text-link inline-flex min-h-11 items-center">Xem website</Link>
            <button type="button" onClick={() => signOut(auth)} className="btn btn-ghost-dark btn-sm">
              Đăng xuất
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">{children}</main>
    </div>
  );
}
