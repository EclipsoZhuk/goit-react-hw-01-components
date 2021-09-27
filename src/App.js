import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';

export default function App() {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
        </>
    );
}
