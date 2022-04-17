import { useEffect, useState } from "react";

const isMobile = () => {
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

export default isMobile