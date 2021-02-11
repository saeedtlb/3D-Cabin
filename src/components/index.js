import Cabin from './Cabin';
import Seats from './Seats';

const index = props => {
    return (
        <group dispose={null}>
            <Seats {...props} />
            <Cabin />
        </group>
    );
};

export default index;
