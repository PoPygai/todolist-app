import React from 'react';

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModelWindowAddTask:React.FC<Props> = ({setIsOpen}) => {


    return (
        <div className="model-window">
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
