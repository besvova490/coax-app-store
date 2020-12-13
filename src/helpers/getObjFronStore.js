export default function getObjFromStore (itemId, objectList) {
    return objectList.find(item => item.id === itemId)
}