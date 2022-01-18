import NextNProgress from "nextjs-progressbar";
import HeaderMaster from "@/components/Header/HeaderMaster";

const LayoutMaster = ({ children }) => {
    return (
        <div className="master">
            <NextNProgress height={2} color="#cc0000" />
            <HeaderMaster />
            {children}
        </div>
    )
}

export default LayoutMaster;