import React from 'react'

const Tip = (props) => {
  const isSelected = props.selectedButton === props.name;

  return (
    <div>
        <button 
          onClick={() => props.onButtonClick(props.name)}
          className={`text-xs md:text-sm px-2 md:px-3 lg:px-4 py-1.5 md:py-2 border border-black rounded-md font-bold transition-all duration-200 whitespace-nowrap ${
            isSelected 
              ? 'bg-yellow-400 text-white border-yellow-400' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {props.name}
        </button>
    </div>
  )
}

export default Tip
