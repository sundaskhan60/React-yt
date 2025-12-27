import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    )
    setUserData(res.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printedUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  )

  if (userData.length > 0) {
    printedUserData = userData.map((elem, idx) => (
      <Card key={idx} elem={elem} />
    ))
  }

  return (
    <div>
      <div className="flex h-[82%] flex-wrap gap-4 p-2">
        {printedUserData}
      </div>

      <div className="flex items-center gap-4 p-4">
        <button
          style={{ opacity: index === 1 ? 0.6 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        <h4 className="text-white">Page {index}</h4>

        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
