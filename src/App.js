import user from './data/user.json';
import Profile from './components/profile/Profile';

export default function App() {
    return (
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    );
}
