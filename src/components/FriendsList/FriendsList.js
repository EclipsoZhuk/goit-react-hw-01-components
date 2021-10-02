import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import FriendItem from './FriendItem';

function FriendsList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(({ friends }) => (
                <FriendItem
                    id={friends.id}
                    avatar={friends.avatar}
                    name={friends.name}
                    isOnline={friends.isOnline}
                />
            ))}
        </ul>
    );
}

export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact),
};
