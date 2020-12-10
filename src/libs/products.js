import API from "./index";

export async function getAllBooks() {
    const resp = await API.get('volumes', {params: {q: 'flowers', projection:'lite', filter: 'paid-ebooks'}})
    return resp.data.items
}