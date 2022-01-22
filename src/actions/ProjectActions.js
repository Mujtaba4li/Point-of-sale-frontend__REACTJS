import axios from 'axios'
import { GET_ERRORS } from './types';
export const CreateCashier = (newCashier, history) => async dispath=>{
     await axios.post('http://localhost:8081/cashier', newCashier)
            .then((res) => {
                alert("Cashier Added successfully");
                history.push('/dashboard/view-cashier')


            }).catch((err) => {
                dispath({type:GET_ERRORS,payload:err.response.data})
            })

}