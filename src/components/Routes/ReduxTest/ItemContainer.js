import { connect } from "react-redux"
import { buyCake } from "../../../common/redux"
const ItemContainer = (props) => {
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy items</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const itemState = state.cake.numOfCakes
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch) => {
    const dispatchFunction = () => dispatch(buyCake())


    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)