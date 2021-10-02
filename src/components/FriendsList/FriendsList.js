import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import FriendItem from './FriendItem';

function FriendsList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(item => {
                const { name, avatar, isOnline, id } = item;

                return (
                    <li key={id} className={s.item}>
                        <FriendItem
                            name={name}
                            avatar={avatar}
                            isOnline={isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact),
    id: PropTypes.number,
};
