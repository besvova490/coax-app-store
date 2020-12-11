import API from "./index";

export async function getBooks(params) {
    const resp = await API.get('volumes', {params: {q: 'history', projection:'lite', filter: 'paid-ebooks', maxResults: 10, startIndex: 0, ...params}})
    return resp.data.items
}