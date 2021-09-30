import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(({ avatar, id, name, isOnline }) => (
                <li key={id} className={s.item}>
                    <span
                        className={`${s.status} ${
                            isOnline ? s.online : s.offline
                        }`}
                    ></span>
                    <img
                        className={s.images}
                        src={avatar}
                        alt={name}
                        width="48"
                    />
                    <p className={s.text}>{name}</p>
                </li>
            ))}
        </ul>
    );
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};
