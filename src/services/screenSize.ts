import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setScreenSize(window.innerWidth);
            })
        }
    }, []);
    
    return screenSize <= 768;
}

export default useIsMobile