// компонент  отримує дані із стори і відправляє дані в презентаційний компонент, який їх виводить (List.js)

import { connect } from "react-redux";
import List from '../components/List'

//формує дані для вивода
function mapStateToProps (state) {
    const {goods}  = state;
    return {goods  :  goods}; 

}

export default connect(
    // функція, яка трансформує  state в props
    mapStateToProps,
    null
)(List);