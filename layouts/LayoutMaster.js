import NextNProgress from "nextjs-progressbar";
import HeaderMaster from "@/components/Header/HeaderMaster";
import Footer from "@/components/Footer";

const LayoutMaster = ({ children }) => {
  return (
    <div className="master">
      <NextNProgress height={2} color="#cc0000" />
      <HeaderMaster />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutMaster;
