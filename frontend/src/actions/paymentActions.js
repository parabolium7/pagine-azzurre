import Axios from 'axios'
import { PAYMENT_REQUEST, PAYMENT_SUCCESS, PAYMENT_FAIL } from '../constants/paymentConstants'

export const payVals = (account, item) => async (dispatch, getState) => {
  dispatch({ type: PAYMENT_REQUEST, payload: { account, item } })
  const {
    userSignin: { userInfo },
  } = getState()
  console.log(userInfo)
  try {
    const { data } = await Axios.post('/api/payment', {  account, item  }, {headers: { Authorization: `Bearer ${userInfo.token}` } })
    console.log("Data", data)
    if(data) dispatch({ type: PAYMENT_SUCCESS, payload: data })
  } catch(error) {
    dispatch({
      type: PAYMENT_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}