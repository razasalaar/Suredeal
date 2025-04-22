"use client";
import "../../globals.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MobileBar from "./components/MobileBar";
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid  md:grid-cols-[200px_1fr] grid-cols-[1fr] h-screen">
          <div className="max-md:hidden">
            <Sidebar />
          </div>
          <main className="bg-slate-100 md:p-4 overflow-y-auto flex flex-col">
            <Navbar /> <MobileBar />
            <section className="flex-1 bg-slate-100 md:p-4 md:rounded">
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
