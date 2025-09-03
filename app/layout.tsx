import Header from "./Header"; // Import Header component
import Footer from "./footer";
import "./globals.css"; // Import global styles

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
  

      {children}
       <Footer />
      </body>
    </html>
  );
}
