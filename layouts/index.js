import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";

const LayoutMaster = ({ children }) => {
    return (
        <div className="master">
            <Header />
            {children}
        </div>
    )
}

export default LayoutMaster;