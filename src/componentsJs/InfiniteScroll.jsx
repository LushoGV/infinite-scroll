/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ children, firstPage = 1, loader, next }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(firstPage);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef(null);

  const getItem = async () => {
    try {
      setIsLoading(true);
      const res = await next(pageNumber);
      setHasMore(res.length > 0);
    } catch (error) {
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreData = useCallback(
    (node) => {
      if (isLoading) return;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    getItem();
  }, [pageNumber]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "auto",
      }}
    >
      {children}
      <section ref={loadMoreData}></section>
      {isLoading && loader}
    </div>
  );
};

export default InfiniteScroll;
