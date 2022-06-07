import { useEffect, useState } from "react";

const useIsScreenType = (width: number) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

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
    
    return screenSize <= width;
}

export const useIsMobile = () => useIsScreenType(768)
export const useIsLargeScreen = () => useIsScreenType(1150)

