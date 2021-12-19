import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../../../common/redux'

const HooksHome = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch =  useDispatch()
    return (
        <div className="Home">
            <h2>(HOOK) Num of Cakes: {numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
        </div>
    )    
}

export default HooksHome