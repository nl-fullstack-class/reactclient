import React, {useEffect, useState} from 'react';
import {getList} from "../api/postApi";
import {useNavigate} from "react-router-dom";

const initState = [];

function ListComponent(props) {

    const [serverData, setServerData] = useState(initState);
    const navigate = useNavigate();

    useEffect(() => {
        getList().then(response => {
            console.log(response);
            setServerData(response.data);
        });
    }, []);

    return (
        <div>
            <h3>List Component</h3>
            <button onClick={() => navigate(`/add`)}>등록</button>
            {serverData.map(post => (
                <div
                    key={post.id}
                    onClick={() => navigate(`/read/${post.id}`)}
                >
                    <div>{post.title}</div>
                </div>
            ))}
        </div>
    );
}

export default ListComponent;