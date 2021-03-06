import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BiBadgeCheck } from "react-icons/bi"

const alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert =>(
    <div key = {alert.id} className = "absolute  bottom-1 left-1 flex ">
        <div className = "w-64 h-12 shadow rounded border-l-2 border-green-500 bg-blue-100 ">
            <BiBadgeCheck className = "inline w-8 h-8 text-green-500"/> {alert.msg}
        </div>
       
    </div>
)) 
// export const alert = () => {
//     return(
//         <div>
//             <h1>hello bhai</h1>
//         </div>

//     )
// }


alert.propTypes = {
    alerts:PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    alerts: state.alert
})


export default connect(mapStateToProps)(alert); 
