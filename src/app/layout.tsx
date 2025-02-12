// src/app/layout.tsx
import { Providers } from './providers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black flex justify-center min-h-screen">
        <div className="w-[430px] max-w-[430px] bg-black">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}