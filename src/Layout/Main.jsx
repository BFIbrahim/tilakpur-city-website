import { Outlet } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import Scroll from '../Components/Scrool/Scroll';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Scroll></Scroll>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;