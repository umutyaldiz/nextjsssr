import Router from "next/router";
import { useState } from "react";

const ProgressBar = () => {
    const [status, setStatus] = useState(true);
    const [percent, setpercent] = useState('w-0');

    const progressFunc = {
        start:()=>{
            
        },
        finish:()=>{
            
        }
    }

    Router.events.on("routeChangeStart", () => progressFunc.start());
    Router.events.on("routeChangeComplete", () => progressFunc.finish());
    Router.events.on("routeChangeError", () => progressFunc.finish());

    return (
        <div className={`h-1 ${percent} bg-orange-500 fixed top-0 left-0 z-50 transition-all duration-300`}></div>
    );
}

export default ProgressBar;