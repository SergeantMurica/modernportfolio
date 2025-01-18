import { useEffect, useState } from 'react';

const useIsMobile = (threshold = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < threshold);
    };

    useEffect(() => {
        checkIsMobile(); // Check screen size on component mount
        window.addEventListener('resize', checkIsMobile);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [threshold]);

    return isMobile;
};

export default useIsMobile;