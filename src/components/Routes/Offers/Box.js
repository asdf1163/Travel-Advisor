import '../../../common/SCSS/Box.scss';
import StarsRate from './StarsRate';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../common/redux';
import { useEffect } from 'react';

const Box = ({ userData, fetchUsers }) => {

    const imageLink = "https://picsum.photos/v2/list?page=2&limit=10"
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    console.log(userData)
    return userData.loading
        ? (<h2>Loading...</h2>)
        : userData.error
            ? (<h2>{userData.error}</h2>)
            : userData.users.map(user =>
                <div className="offert">
                    <div className="column_left">
                        <div className="image">
                            <img src={imageLink} alt="alt" />
                        </div>
                        <div className="name">{user.name}</div>
                        <div className="stars">
                            <StarsRate numOfStars={3.5} />
                        </div>
                    </div>
                    <div className="column_right">
                        <div className="info">
                            <div className="country">Scotland</div>
                            <div className="duration">4 days</div>
                        </div>
                        <div className="info2">
                            <div className="price">TOTAL: 36.99$</div>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            )

}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Box)