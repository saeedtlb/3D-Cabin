import Cabin from './Cabin';
import Seats from './Seats';

const Model = props => {
    return (
        <group dispose={null}>
            <Seats />
            <Cabin {...props} />
        </group>
    );
};

export default Model;
