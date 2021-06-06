export const initialState={
    basket:[],
};

//reduceer is used to dispatch an action to the datalayer
const reducer=(state,action)=>{
    console.log(action.item);
    switch(action.type){
        case 'ADD_TO_CART':
            console.log("reducer cart")
            return{
                ...state,
                basket: [...state.basket,action.item],
            };

        case "REMOVE_ITEM":
            console.log("remove item reducer")
            return{
                ...state,
                basket:state.basket.filter(baske=>baske.id !==action.item.id)
            }
        default:
           
            return state;

    }
}

export default reducer;