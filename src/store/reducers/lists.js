export default function(store = [], action){
    switch (action.type){
        case'FIRST_ITEM_CHAGE_TO_INPUT':
            store[action.payload.itemInfo[0]][action.payload.itemInfo[1]] = action.payload.itemValue;
            store[action.payload.itemInfo[0]].push('');
            return [...store];
        case'LAST_ITEM_CHAGE_TO_INPUT':
            store[action.payload.itemInfo[0]][action.payload.itemInfo[1]] = action.payload.itemValue;
            store[action.payload.itemInfo[0]].push('');
            return [...store];
        case'ITEM_CHAGE_TO_INPUT':
            store[action.payload.itemInfo[0]][action.payload.itemInfo[1]] = action.payload.itemValue;
            return [...store];
        case'FIRST_ITEM_CHAGE_TO_TEXT':
            store[action.payload.itemInfo[0]] = [''];
            return [...store];
            ;
        case'MIDLLE_ITEM_CHAGE_TO_TEXT':
            store[action.payload.itemInfo[0]].splice(action.payload.itemInfo[1], 1);
            return [...store];
        case'ITEM_CHAGE_TO_ITEM':
            store[action.payload.itemInfo[0]][action.payload.itemInfo[1]] = action.payload.itemValue;
            return [...store];
            ;
        default:
            return store;
    }
}
