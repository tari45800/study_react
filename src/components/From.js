import React from 'react'

export default function From({value, setValue, handleSubmit}) {

  
  const handleChange = (e) => {
    // state의 value를 입력한 문자열로 바꿈 - 2
    // target은 이벤트가 발생하는 태그를 가르킨다.
    setValue(e.target.value);
  }


  // 기능 --------------------------------------------------


  return (
    <div>
      {/* 할일 작성 폼  */}
      <form action="" className='flex pt-2'>
        <input 
          className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
          type="text" 
          name="value" 
          placeholder="해야할 일을 입력해 주세요"

          // onchange 이벤트로 handleChange 함수 호출 - 1              
          onChange={handleChange}

          // 바꾼 state의 value를 입력창에 적용 - 3
          value={value}
        />

        <input 
          className='vtn p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'
          type="submit" 
          value="입력"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}
