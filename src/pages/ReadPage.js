import React from 'react';
import ReadComponent from "../components/ReadComponent";
import {useParams} from "react-router-dom";

function ReadPage(props) {

    const {id} = useParams();

    return (
        <div>
            Read Page
            <ReadComponent id={id}/>
        </div>
    );
}

export default ReadPage;