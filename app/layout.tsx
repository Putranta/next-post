import "./globals.css";
import MainLayout from "./layouts/mainLayout";
export const metadata = {
  title: "My App",
  description: "A Next.js Application with Layouts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
