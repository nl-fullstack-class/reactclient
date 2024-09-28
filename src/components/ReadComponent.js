import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getOne} from "../api/postApi";

const initState = {
    id: null,
    title: null,
    content: null
};

function ReadComponent(props) {

    const [serverData, setServerData] = useState(initState);
    const navigate = useNavigate();

    useEffect(() => {
        getOne(props.id).then(response => {
            console.log(response);
            setServerData(response.data);
        });
    }, [props.id]);

    return (
        <div>
            <h3>Read Component</h3>
            <div>제목: {serverData.title}</div>
            <div>내용: {serverData.content}</div>
            <br/>
            <button onClick={() => navigate(`/`)}>리스트로</button>
            <button onClick={() => navigate(`/modify/${serverData.id}`)}>수정</button>
        </div>
    );
}

export default ReadComponent;