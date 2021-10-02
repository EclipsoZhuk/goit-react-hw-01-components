import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendItem({ avatar, id, name, isOnline }) {
    return (
        <li key={id} className={s.item}>
            <span
                className={`${s.status} ${isOnline ? s.online : s.offline}`}
            ></span>
            <img className={s.images} src={avatar} alt={name} width="48" />
            <p className={s.text}>{name}</p>
        </li>
    );
}

export default FriendItem;

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
