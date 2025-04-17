export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen ">
          <main className="flex-1 pt-[20px]  bg-white h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
