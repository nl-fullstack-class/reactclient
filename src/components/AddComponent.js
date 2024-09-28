import React, {useState} from 'react';
import {postAdd} from "../api/postApi";
import {useNavigate} from "react-router-dom";

const initState = {
    title: '',
    content: ''
};

function AddComponent(props) {

    const [postDto, setPostDto] = useState({...initState});
    const navigate = useNavigate();

    const handleChangePostDto = (e) => {
        console.log(e.target.name, e.target.value);
        postDto[e.target.name] = e.target.value;
        setPostDto({...postDto});
    }

    const handleClickAdd = () => {
        // 프론트엔드 단의 유효성 검사
        if (!postDto.title.trim() || !postDto.content.trim()) {
            alert('제목과 내용을 모두 입력하세요.');
            return;
        }
        postAdd(postDto).then(response => {
            if (response.status !== 201) {
                alert('등록 에러');
                return;
            }
            setPostDto({...initState});
            alert('정상 등록 되었습니다.');
            navigate(`/`);
        }).catch(error => {
            // 백엔드 단의 유효성 검사
            if (error.response.status === 400) {
                alert('제목과 내용을 모두 입력하세요.');
            } else {
                alert('알 수 없는 에러');
            }
        });
    }

    return (
        <div>
            <h3>Add Component</h3>
            제목
            <input
                name="title"
                type="text"
                value={postDto.title}
                onChange={handleChangePostDto}
            >
            </input>
            <br/>
            내용
            <input
                name="content"
                type="text"
                value={postDto.content}
                onChange={handleChangePostDto}
            >
            </input>
            <br/>
            <button
                type="button"
                onClick={handleClickAdd}
            >
                등록
            </button>
            <button onClick={() => navigate(`/`)}>리스트로</button>
        </div>
    );
}

export default AddComponent;