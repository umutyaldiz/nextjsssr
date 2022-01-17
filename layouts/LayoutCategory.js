import NextNProgress from "nextjs-progressbar";
import HeaderCategory from "@/components/Header/HeaderCategory";

const LayoutCategory = ({ children }) => {
    return (
        <div className="master sports">
            <NextNProgress height={2} color="#ffffff" />
            <HeaderCategory />
            {children}
        </div>
    )
}

export default LayoutCategory;