import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
// app data
import { seats } from '../info.json'
// action
import { availableSeat, soldSeat, userSeat } from '../actions/action'
// types
import { AVAILABLE, SOLD, USER } from '../actions/type'

const Seats = ({ store, dispatch }) => {
  const { soldOuts, user_seat } = store
  // console.log(52, user_seat);

  const group = useRef()
  const { nodes, materials } = useGLTF(seats.url)

  const checkSeatStatus = (num) => {
    const is_user_seat = user_seat.has(num)

    if (is_user_seat) return USER

    const is_available = soldOuts.indexOf(num) === -1 ? true : false

    return is_available ? AVAILABLE : SOLD
  }

  const seatMesh = (row_num) =>
    Object.values(nodes)
      .slice(1)
      .map((node, i) => {
        const seat_num = row_num + seats.numbers[i]
        const status = checkSeatStatus(seat_num)
        let color = null

        switch (status) {
          case AVAILABLE:
            color = '#7ADA48'
            break
          case USER:
            color = 'sandybrown'
            break
          default:
            color = '#ED081A'
            break
        }

        return (
          <mesh
            key={seat_num}
            name={seat_num}
            position={seats.position[i]}
            geometry={node.geometry}
            material={materials.sillones_COLOR_0}
            rotation={[Math.PI / 2, 0, -3.13]}
            castShadow>
            <meshPhysicalMaterial color={color} />
          </mesh>
        )
      })

  const selectedSeat = ({ stopPropagation, object }) => {
    stopPropagation()
    const { name: seat_num } = object
    const status = checkSeatStatus(seat_num)

    switch (status) {
      case AVAILABLE:
        dispatch(availableSeat(seat_num))
        break
      case USER:
        dispatch(userSeat(seat_num))
        break
      default:
        dispatch(soldSeat(seat_num))
        break
    }
  }

  const renderSeats = () =>
    seats.row_position.map((pos, i) => (
      <group ref={group} position={[-0.1, -1.2, pos]} key={pos} onPointerDown={selectedSeat}>
        {seatMesh(i + 1)}
      </group>
    ))

  return renderSeats()
}

export default Seats
