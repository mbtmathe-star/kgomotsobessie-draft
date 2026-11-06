import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import NewBranchPopup from "@/components/NewBranchPopup";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-36">{children}</main>
      <Footer />
      <FloatingButtons />
      <NewBranchPopup />
    </div>
  );
};

export default Layout;
