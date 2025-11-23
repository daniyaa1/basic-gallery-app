import { useEffect, useState } from 'react';

export const useInfiniteScroll = (callback) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          callback().finally(() => setLoading(false));
        }
      },
      { threshold: 1.0 }
    );
    const sentinel = document.getElementById('sentinel');
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, [callback, loading]);

  return loading;
};