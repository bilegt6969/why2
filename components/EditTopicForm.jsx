import React from 'react'

function EditTopicForm() {
  return (
    <form className='flex flex-col gap-3 bg-black text-white'>
        <input type="text" className="border bg-black text-white border-slate-500 px-8 py-2" placeholder='Topic Title'/><br/>
        <input type="text" className="border bg-black text-white border-slate-500 px-8 py-2" placeholder='Topic Description'/><br/>
        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>
    </form>  )
}

export default EditTopicForm