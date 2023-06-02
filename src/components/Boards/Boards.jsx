'use client'

import { useState, useEffect } from 'react'
import BoardItem from '../BoardItem/BoardItem'
import AddNewBoardItem from '../AddNewBoardItem/AddNewBoardItem'

const Boards = () => {
  const [selectedCardId, setSelectedCardId] = useState(0)

  const updateSelectedCard = (newCardId) => {
    setSelectedCardId(newCardId)
  }

  return (
    <div className='w-full pr-4 py-2' >
      <div className='boards-cont h-full max-h-72 mb-4 pr-4 overflow-y-scroll' >
        <BoardItem
          boardText='task X'
          id={1}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 1 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={2}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 2 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={3}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 3 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={4}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 4 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={1}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 1 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={2}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 2 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={3}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 3 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={1}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 1 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={2}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 2 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={3}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 3 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={4}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 4 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={1}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 1 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={2}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 2 ? true : false}
        />
        <BoardItem
          boardText='task X'
          id={3}
          updateSelectedCard={updateSelectedCard}
          selected={selectedCardId === 3 ? true : false}
        />
      </div>
      <AddNewBoardItem />
    </div>
  )
}

export default Boards