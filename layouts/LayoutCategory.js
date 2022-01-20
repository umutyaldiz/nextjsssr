import NextNProgress from "nextjs-progressbar";
import HeaderCategory from "@/components/Header/HeaderCategory";
import Footer from "@/components/Footer";

const LayoutCategory = ({ children }) => {
  return (
    <div className="master sports">
      <NextNProgress height={2} color="#ffffff" />
      <HeaderCategory />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutCategory;
