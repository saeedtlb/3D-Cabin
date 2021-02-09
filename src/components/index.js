import Cabin from './Cabin';
import Seats from './Seats';

const index = props => {
    return (
        <group dispose={null}>
            <Seats />
            <Cabin {...props} />
        </group>
    );
};

export default index;
