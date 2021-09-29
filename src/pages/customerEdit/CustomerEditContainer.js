import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

const spanStyle = {
    width: "100px",
    display: "inline-block"
}

/*
  Du må lage en ny reducer for å håndtere customer, som i dag lages i en useState
  FELLE: Dersom du ser på reduceren for customers, har den en liste, her skal vi ha et objekt 
  Denne må ha actions for å sette verdier (som setCustomer)
  Den må ha actions for å tømme formen
  Den  må ha actions for slette
  Vi trenger ikke tenke på å sende data til rest api

  BONUS: Kan vi bygge denne om til en generisk for reducer?
*/
export const CustomerEditContainer = (props) => {

    const customerListState = useSelector(state => state.customers)
    const dispatch = useDispatch()

    const [customer, setCustomer] = useState({})

    const formValueOnChange = (e) => {
        console.log(e.target.name, e.target.value)
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const fetchById = (id) => {
        let intId = parseInt(id)
        let currcustomer = customerListState.items.find(e => e.id === intId)
        if (currcustomer) 
        {
            setCustomer(currcustomer)            
        }
    }
    
    const saveCustomer = () => { }
    const deleteCustomer = () => { }
    const clearForm = () => { }

    useEffect(() => {
        console.log(props)
        fetchById(props.customerId)
    }, [props])

/*
    if (state.isloading)
        return (<div>loading data</div>)
    else if (state.errorMessage)
        return (<div>something bad has happened: {state.errorMessage}</div>)
    else
    */
        return (
            <div>
                <div>
                    <span style={spanStyle} >Id</span>
                    <input
                        data-testid="id" id="id" name="id"
                        value={customer.id}
                        onChange={formValueOnChange}
                    />
                </div>

                <div>
                    <span style={spanStyle} >Company</span>
                    <input
                        data-testid="name" id="name" name="name"
                        value={customer.name}
                        onChange={formValueOnChange}
                    />
                </div>

                <div>
                    <span style={spanStyle} >CEO</span>
                    <input
                        data-testid="ceo" id="ceo" name="ceo"
                        value={customer.ceo}
                        onChange={formValueOnChange}
                    />
                </div>
                <div>Her kan vi jo liste info om hva har skjedd</div>
                <div>
                    <button name="get" onClick={async () => fetchById(customer.id)}>Get customer</button>&nbsp;
                    <button name="clearForm" onClick={clearForm}>Clear fields</button>&nbsp;
                    <button name="save" onClick={saveCustomer()}>Save</button>&nbsp;
                    <button name="delete" onClick={deleteCustomer}>Delete</button>&nbsp;
                </div>

                {JSON.stringify(customer)}
            </div>
        )

}