import React from 'react';
import ModifyComponent from "../components/ModifyComponent";
import {useParams} from "react-router-dom";

function ModifyPage(props) {

    const {id} = useParams();

    return (
        <div>
            Modify Page
            <ModifyComponent id={id}/>
        </div>
    );
}

export default ModifyPage;