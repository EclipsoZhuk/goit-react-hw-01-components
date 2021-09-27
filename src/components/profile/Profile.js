import PropTypes from 'prop-types';
import s from './profile.module.css';

export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img src={avatar} alt={name} className={s.avatar} />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.statsItem}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{followers}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{views}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.defaultProps = {
    avatar: 'https://c.dns-shop.ru/thumb/st1/fit/768/768/ab24eeb9490da4496c9877b441ca41f5/277c5e84904207c75f0b14384dff4e5578f7f7e8c529667aa9bee42de87077de.png',
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
