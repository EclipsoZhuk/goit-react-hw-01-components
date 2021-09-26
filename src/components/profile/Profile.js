import PropTypes from 'prop-types';
import './profile.css';

export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div className="profile">
            <div className="description">
                <img src={avatar} alt={name} className="avatar" />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li className="stats__item">
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className="stats__item">
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className="stats__item">
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
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
