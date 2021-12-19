import { connect } from "react-redux"
import { buyCake, addCake } from "../../../common/redux"

const Home = (props) => {
    return (
        <div className="Home">
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)