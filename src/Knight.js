import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag, DragPreviewImage } from 'react-dnd'

function Knight() {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const knightImage = 'https://images.chesscomfiles.com/uploads/v1/landing/39.e476153d.300x300o.760c9f660e4a.jpg'
    return (
        <>
            <DragPreviewImage connect={preview} src={knightImage} />
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 1,
                    fontSize: "5em",
                    fontWeight: 'bold',
                    cursor: 'move'
                }}>
                ♘
    </div>
        </>
    )
}

export default Knight