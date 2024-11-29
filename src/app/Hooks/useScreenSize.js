"use client";
import { useState, useEffect } from "react";

function useScreenSize() {
    const[windowDimension, setWindowSize] = useState({
        winWidth: null,
        winHeight: null
    });

    useEffect(()=>{
        function detectSize(){
            setWindowSize({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            })
        }
        window.addEventListener('resize', detectSize);
        detectSize();
        return() => window.removeEventListener('resize', detectSize);
    }, []);

  return windowDimension;
}

export default useScreenSize
