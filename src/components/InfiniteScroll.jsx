import { useState, useEffect, useRef } from 'react';

const InfiniteScroll = ({ fetchData, renderItem, initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          fetchData(page).then((newItems) => {
            setItems((prev) => [...prev, ...newItems]);
            setPage((prev) => prev + 1);
            setLoading(false);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [page, fetchData, loading]);

  return (
    <div>
      {items.map((item, index) => renderItem(item, index))}
      <div ref={observerRef}>{loading && <p>Loading more...</p>}</div>
    </div>
  );
};

export default InfiniteScroll;