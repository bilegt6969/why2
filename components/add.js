import React from 'react'
import Link from 'next/link'


function topicslist() {
  return (
        <div className="p-4 border-b-[0.3px] border-[#323436] opacity-1 flex justify-between items-center gap-5">
        <Link href={"../addTopic"}>
            <button className="bg-white rounded-full hover:bg-gray-300 transition-opacity transla text-gray-500 font-bold py-2 px-4">Write Shit</button>
        </Link>

       
    </div>
  )
}

export default topicslist