export default function serializerApiData(apiData) {
    return {
        id : apiData.id,
        title: apiData.volumeInfo.title,
        author: apiData.volumeInfo.authors ? apiData.volumeInfo.authors.join(', ') : 'Stefan Szymanski',
        publisher: apiData.volumeInfo.publisher,
        publishedDate: apiData.volumeInfo.publishedDate,
        description: apiData.volumeInfo.description || 'Now description',
        categories: apiData.volumeInfo.categories.join(', '),
        totalPages: apiData.volumeInfo.pageCount || '372',
        imageUrl: apiData.volumeInfo.imageLinks.thumbnail,
        price: apiData.saleInfo.listPrice.amount,
        quantity: 0,

    }
}