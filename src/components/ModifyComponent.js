import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {deleteOne, getOne, putOne} from "../api/postApi";

const initState = {
    title: '',
    content: ''
};

function ModifyComponent(props) {

    const [postDto, setPostDto] = useState({...initState});
    const navigate = useNavigate();

    useEffect(() => {
        getOne(props.id).then(response => {
            setPostDto(response.data)
        })
    }, [props.id]);

    const handleChangePostDto = (e) => {
        console.log(e.target.name, e.target.value);
        postDto[e.target.name] = e.target.value;
        setPostDto({...postDto});
    }

    const handleClickModify = () => {
        // 프론트엔드 단의 유효성 검사
        if (!postDto.title.trim() || !postDto.content.trim()) {
            alert('제목과 내용을 모두 입력하세요.');
            return;
        }
        putOne(postDto).then(response => {
            if (response.status !== 200) {
                alert('수정 에러');
                return;
            }
            setPostDto({...initState});
            alert('정상 수정 되었습니다.');
            navigate(`/read/${props.id}`);
        }).catch(error => {
            // 백엔드 단의 유효성 검사
            if (error.response.status === 400) {
                alert('제목과 내용을 모두 입력하세요.');
            } else {
                alert('알 수 없는 에러');
            }
        });
    }

    const handleClickDelete = () => {
        deleteOne(props.id).then(response => {
            if (response.status !== 200) {
                alert('삭제 에러');
                return;
            }
                setPostDto({...initState});
                alert('정상 삭제 되었습니다.');
                navigate(`/`);
        })
    }

    return (
        <div>
            <h3>Modify Component</h3>
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
                onClick={handleClickModify}
            >
                수정
            </button>
            <button onClick={handleClickDelete}>삭제</button>
            <br/>
            <button onClick={() => navigate(`/read/${props.id}`)}>뒤로</button>
        </div>
    );
}

export default ModifyComponent;