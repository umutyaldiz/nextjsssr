import ProgressBar from "@/components/ProgressBar";
import HeaderCategory from "@/components/Header/HeaderCategory";

const LayoutCategory = ({ children }) => {
    return (
        <div className="master sports">
            <HeaderCategory />
            {children}
        </div>
    )
}

export default LayoutCategory;