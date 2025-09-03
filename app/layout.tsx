import Header from "./Header"; // Import Header component
import Footer from "./footer";
import "./globals.css"; // Import global styles
import ChatBox from './ChatBox'

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
      <ChatBox />
       <Footer />
      
      </body>
    </html>
  );
}
