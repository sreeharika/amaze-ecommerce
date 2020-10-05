import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESSS } from "../constants/ProductConstants";

function productListReducer(state = { products: [] }, action){

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESSS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error:action.payload }
        default:
            return state;

    }
}

export{ productListReducer }