import api from "./api";
import { Post } from "../Interface/DataPost";

export async function getBlog() {
    const response = await api.get<Post[]>("/posts");
    return response.data
}

export async function getBlogById(id: String) {
    const response = await api.get<Post>("/posts/" + id);
    return response.data
}

export async function postBlog( data: Post ) {
    const request = data
    const response = await api.post("/posts", request);
    return response
}

export async function updateBlog( data: Post ) {
    const request = data
    const response = await api.put("/posts/" + data.id, request);
    return response
}

export async function deleteBlog( id: String ) {
    const response = await api.delete("/posts/" + id);
    return response
}