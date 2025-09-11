import React from "react";
function useWindowWidth() {
    const [width, setWidth] = React.useState(null);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { width, setWidth };
}

export default useWindowWidth;