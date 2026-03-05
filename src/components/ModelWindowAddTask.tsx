import React, {useEffect, useRef} from 'react';

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModelWindowAddTask:React.FC<Props> = ({setIsOpen}) => {
    const refModelWindow = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (refModelWindow.current && !refModelWindow.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);


    return (
        <div ref={refModelWindow}
             onClick={(e) => e.stopPropagation()}
             className="model-window">
            <form action="#">
            {/*
            input  -   title
            textarea - description
            btn - calender/date
            btn cancel
            btn add
            */}
            </form>
        </div>
    );
};

export default ModelWindowAddTask;
