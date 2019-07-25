import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

function useDarkMode() {

    const [someValue, setSomeValue] = useLocalStorage('key')

    useEffect(() => {
        someValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode;