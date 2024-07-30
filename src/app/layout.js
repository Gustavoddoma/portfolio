import "./globals.css";
import Footer from "@/components/sections/footer/footer";
import Header from "@/components/sections/header/header";

export const metadata = {
  title: "Portfolio - Home",
  description: "Portfolio website for showcasing projects and blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "lg:px-[12vh] bg-zinc-50 h-screen flex flex-col dark:bg-black dark:text-zinc-400 text-zinc-600"
        }
      >
        <Header />
        <main
          className={
            "flex-grow bg-white dark:bg-zinc-900 lg:px-36 pb-16 pt-6 px-4 md:px-20"
          }
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
