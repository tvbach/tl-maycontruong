"use client";

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import '../globals.css';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Don't show admin layout for login page
  if (pathname === '/admin/login') {
    return children;
  }

  const adminNavItems = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Sản phẩm', href: '/admin/products', icon: '📦' },
    { name: 'Banner', href: '/admin/banners', icon: '🖼️' },
    { name: 'Đơn hàng', href: '/admin/orders', icon: '📋' },
    { name: 'Người dùng', href: '/admin/users', icon: '👥' },
    { name: 'Cài đặt', href: '/admin/settings', icon: '⚙️' },
  ];

  const isActiveLink = (href) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <html lang="en" suppressHydrationWarning>

      <div className="min-h-screen bg-gray-100">
        {/* Admin Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-600 hover:text-gray-900 mr-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 px-3 py-2 rounded-md"
              >
                Về trang chủ
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <span className="text-sm text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </header>
        <body
          suppressHydrationWarning
        >
          <div className="flex">
            {/* Sidebar */}
            <aside
              className={`${isSidebarOpen ? 'w-64' : 'w-16'
                } bg-white shadow-sm border-r border-gray-200 transition-all duration-300 ease-in-out`}
            >
              <nav className="mt-4">
                <ul className="space-y-1 px-3">
                  {adminNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`${isActiveLink(item.href)
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        {isSidebarOpen && (
                          <span className="truncate">{item.name}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </body>
      </div>
    </html>
  );
}
