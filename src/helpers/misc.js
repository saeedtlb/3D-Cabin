// import { useState } from 'react';

// export default y => {
//     const { lastPoint, setLastPoint } = useState(0);

//     const down = y > lastPoint ? true : false;

//     setLastPoint(y);

//     return lastPoint;
// };

export const downWard = (prev, curr) => (curr > prev ? true : false);
