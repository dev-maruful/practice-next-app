import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Hero",
  description: "This is my first next application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">Home</a>
        </nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
