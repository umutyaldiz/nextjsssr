import NextNProgress from "nextjs-progressbar";
import Header from "@/components/Header";

const LayoutMaster = ({ children }) => {
    return (
        <div className="master">
            <NextNProgress height={2} color="#cc0000" />
            <Header />
            {children}
        </div>
    )
}

export default LayoutMaster;