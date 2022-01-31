import { DELETE_CASHIERS, GET_CASHIERS_REQ } from "../actions/types";

const initialState = {
    cashiers: []
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CASHIERS_REQ:
            return { ...state, cashiers: action.payload };

        case DELETE_CASHIERS:
            return {...state,cashier:state.cashiers.filter(x => x.id !== action.payload) }

        default:
            return state;

    }
}