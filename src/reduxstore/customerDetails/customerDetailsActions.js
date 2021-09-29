export const fetchCustomer = () => {

    //dispatch({ type: actions.FILBEHANDLING_LOADING, data: null })

    const fetchResult = await fetch(`/customer/${id}`, { method: 'GET' })

    const result = await fetchResult.json()

    if (fetchResult.ok) {
        //dispatch({ type: actions.SET_STATE, payload: result })
        return;
    } else {
        //dispatch({ type: actions.ERROR, payload: result.errorMessage })
    }
}

export const postCustomer = (customer) => {

    return async dispatch => {
        //dispatch({ type: actions.LOADING, payload: null })
        
        const fetchResult = await fetch('/customer', {
            method: 'POST',
            body: JSON.stringify(customer)
        })
        
        const result = await fetchResult.json()
        
        if (fetchResult.ok) {
            //dispatch({ type: actions.MESSAGE, payload: result.message })
            return;
        } else {
            //dispatch({ type: actions.ERROR, payload: result.errorMessage })
        }
    }
}

export const deleteCustomer = (id) => {

    return async dispatch => {
        
        //dispatch({ type: actions.LOADING, payload: null })
        
        const fetchResult = await fetch(`customer/${id}`, {
            method: 'DELETE',
        })
        
        const result = await fetchResult.json()
        
        if (fetchResult.ok) {
            //dispatch({ type: actions.MESSAGE, payload: result.message })
        } else {
            //dispatch({ type: actions.ERROR, payload: result.errorMessage })
        }
    }
}