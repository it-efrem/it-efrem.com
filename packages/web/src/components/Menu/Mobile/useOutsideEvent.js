import React, {useEffect, useRef, useState} from "react";

// ToDo: go to npm

export function useEventOutside(initialState, eventType = 'click') {
    const element_ref = useRef();
    const observableIsOpen = useRef(initialState);
    const [isOpen, setIsOpen] = useState(initialState);

    const changeValue = (newValue) => {
        observableIsOpen.current = newValue;
        setIsOpen(newValue);
    }

    const handler = (e) => {
        const isChild = element_ref.current.contains(e.target);

        if (!isChild) {
            changeValue(false);
        }
    }

    useEffect(() => {
        if (observableIsOpen.current) {
            document.addEventListener(eventType, handler);
            return () => document.removeEventListener(eventType, handler);
        }
    }, [observableIsOpen.current]);

    return [element_ref, isOpen, changeValue];
}