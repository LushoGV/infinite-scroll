import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactElement;
  loader: ReactElement;
  firstPage?: number;
  next: (page?: number) => Promise<Array<unknown>>;
};

const InfiniteScroll = ({ children, firstPage = 1, loader, next }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(firstPage);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);

  const getItem = async (): Promise<void> => {
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
    (node: Element | null) => {
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
    void getItem();
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
