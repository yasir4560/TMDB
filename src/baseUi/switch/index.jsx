import React, { useState, useRef, useLayoutEffect } from 'react';

const Switch = ({ items, onToggle, isToggled, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const widths = itemRefs.current.map((ref) => ref.offsetWidth);
    const leftPositions = widths.slice(0, activeIndex);
    setIndicatorWidth(widths[activeIndex]);
    setIndicatorLeft(leftPositions.reduce((sum, width) => sum + width, 0));
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(index);
    onToggle(items[index]);
  };

  const getActiveTextColor = (title) => {
    if (title === 'Latest Trailer') {
      return 'text-tmdbDarkBlue border-bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]';
    }
    return 'bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]'; // Default color
  };

  const getIndicatorStyles = (title) => {
    if (title === 'Latest Trailer') {
      return {
        background: 'linear-gradient(to right, #c0fecf, #1ed5a9)',
      };
    }
    return {
      backgroundColor: 'bg-tmdbDarkBlue',
    };
  };


  const getBorderColor = (title) => {
    if (title === 'Latest Trailer') {
      return '#1ed5a9';
    }
    return 'rgb(3,37,65)'; 
  };
  const getText = (title) => {
    if (title === 'Latest Trailer') {
      return '#FFFFFF';
    }
    return 'rgb(3,37,65)'; 
  };

  return (
    <div className="hover:cursor-pointer h-8 border-solid rounded-[30px] border-[1px] flex items-center relative z-[1]"
    style={{
           borderColor: getBorderColor(title),
           color: getText(title),
    }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          ref={(ref) => (itemRefs.current[index] = ref)}
          onClick={() => handleToggle(index)}
          className={`py-1 px-5 h-8 rounded-[30px] ${activeIndex === index ? getActiveTextColor(title) : ''}`}
        >
          {item}
        </div>
      ))}

      <div
        className="h-8 bg-tmdbDarkBlue rounded-[30px]  absolute z-[-1] transition-all duration-150 ease-in"
        style={{
          left: `${indicatorLeft}px`,
          width: `${indicatorWidth}px`,
          ...getIndicatorStyles(title),
        }}
      ></div>
    </div>
  );
};

export default Switch;

