import API from "./index";

export async function getBooks(payload) {
    try {
        const resp = await API.get('volumes', {
            params: {
                q: 'subject:medical',
                projection: 'full',
                filter: 'paid-ebooks',
                maxResults: 12,
                startIndex: 0, ...payload
            }
        })
        return resp.data.items
    }catch (error) {
        return error
    }
}

export async function getBookById(payload) {
    try {
        const resp = await API.get(`volumes/${payload.id}`)
        return resp.data
    } catch (error) {
        return error
    }
}