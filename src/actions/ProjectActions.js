import axios from 'axios'
import { DELETE_CASHIERS, GET_CASHIERS_REQ, GET_ERRORS } from './types';
export const CreateCashier = (newCashier, history) => async dispath => {
    await axios.post('http://localhost:8081/cashier', newCashier)
        .then((res) => {
            alert("Cashier Added successfully");
            history.push('/dashboard/view-cashier')


        }).catch((err) => {
            dispath({ type: GET_ERRORS, payload: err.response.data })
        })

}
export const GetCashier = () => async dispath => {
    await axios.get('http://localhost:8081/cashier')
        .then((res) => {
            //abi bana hei reducer        
            dispath({ type: GET_CASHIERS_REQ, payload: res.data })


        }
        )
}
export const DeleteCashierByID = (id,history) => async dispath => {
    await axios.get(`http://localhost:8081/cashier${id}`)
        .then((res) => {
            //abi bana hei reducer        
            dispath({ type: DELETE_CASHIERS, payload:id})
            alert("Cashier Added successfully");
            history.push('/dashboard/view-cashier')



        }
        )
}