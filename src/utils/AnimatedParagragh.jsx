import React, { useEffect, useMemo, useRef, useState } from 'react'

function AnimatedParagragh() {
    const [movingText, setMovingText] = useState("")
    // console.log("renderd");
    let text = "Travel, enjoy and live a new and full life".split("")

    useEffect(() => {
    let index = 0;
    setMovingText("");
    const interval = setInterval(() => {
        if (index >= text.length-1) {
            // console.log("out of bound ", text[index]);
            clearInterval(interval);
        }
        
        setMovingText((prev) => prev += text[index-1]);
        index++;
    }, 100);
    
    return () => clearInterval(interval);
}, []);

    return (
        <h2 id="trael-text">
            {movingText}
        </h2>
    )
}

export default AnimatedParagragh