import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api/v1/post`;

export const getList = async () => {
    const result = await axios.get(`${prefix}`);
    return {
        status: result.status,
        data: result.data
    }
}

export const getOne = async (id) => {
    const result = await axios.get(`${prefix}/${id}`);
    return {
        status: result.status,
        data: result.data
    };
}

export const postAdd = async (postDto) => {
    const result = await axios.post(`${prefix}`, postDto);
    return {
        status: result.status,
    };
}

export const putOne = async (postDto) => {
    const result = await axios.put(`${prefix}/${postDto.id}`, postDto);
    return {
        status: result.status
    };
}

export const deleteOne = async (id) => {
    const result = await axios.delete(`${prefix}/${id}`);
    return {
        status: result.status
    };
}