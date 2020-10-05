import axios from 'axios';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESSS, PRODUCT_LIST_FAIL } = require("../constants/ProductConstants")

// import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESSS } from '../constants/ProductConstants';

const listProducts = () => async (dispatch) => {
try{
    dispatch({type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({type: PRODUCT_LIST_SUCCESSS, payload:data })
}
catch(error){
    dispatch({type: PRODUCT_LIST_FAIL, payload:error.message });

}


}
export { listProducts }