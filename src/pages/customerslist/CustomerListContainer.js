import { useEffect} from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCustomers } from "../../reduxstore/customerlist/customerListActions"

export const CustomersListContainer = (props) => {

    // Aktiver react for siden (state og dispatcher)
    const state = useSelector(state => state.customers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCustomers())
    }, [])

    if (state.loading)
        return (<div>loading data</div>)
    else if (state.error)
        return (<div>something bad has happened: {state.error}</div>)
    else return (
        <div>
            <h1>Customer list</h1>
            <table>
                <tr>
                    <td>CompanyName</td>
                    <td>Contactperson</td>
                </tr>
                {state.items.map(function (item, i) {
                    return (
                        <tr>
                            <td>
                                <NavLink to={`/customerEdit/${item.id}`}>
                                    <b>{item.name}</b>
                                </NavLink>
                            </td>
                            <td>
                                <span>ceo: {item.ceo}</span>
                            </td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}