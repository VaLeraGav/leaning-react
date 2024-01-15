import { useState, useRef, useEffect } from 'react';

export default function VirtualScroll({ data, rowHeight, visibleRows }) {
  const rootRef = useRef();
  const [start, setStart] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      const start = Math.min(
        data.length - visibleRows - 1,
        Math.floor(e.target.scrollTop / rowHeight)
      );
      setStart(start);
    };
    if (data.length) {
      rootRef.current.addEventListener('scroll', onScroll);
    }
    return () => {
      rootRef?.current?.removeEventListener('scroll', onScroll);
    };
  }, [data, visibleRows, rowHeight]);

  const getTopHeight = () => {
    return rowHeight * start;
  };

  const getBottomHeight = () => {
    if (data.length < 6) {
      return 0;
    }
    return rowHeight * (data.length - (start + visibleRows + 1));
  };

  if (!data.length) {
    return <p>Комментариев не нашли</p>;
  }

  return (
    <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
      <ul>
        {data.slice(start, start + visibleRows + 1).map((item) => (
          <li key={item.id}>{item.id}. {item.name}</li>
        ))}
      </ul>
      <div style={{ height: getBottomHeight() }} />
    </div>
  );
}
