import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function useQueryState<T>(
  name: string,
  defaultValue: T | null = null,
) {
  const [isReady, setIsReady] = useState(false);
  const [queryState, setQueryState] = useState<T | null>(defaultValue);
  const searchParams = useSearchParams();
  const param = searchParams?.get(name);

  useEffect(() => {
    if (param) {
      try {
        const parsedValue = JSON.parse(param);
        setQueryState(parsedValue);
      } catch (error) {
        setQueryState(param as any);
      }
    } else {
      setQueryState(defaultValue);
    }
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setQuery(value: T) {
    if (!searchParams) return;
    setQueryState(value);
    const params = new URLSearchParams(searchParams);
    params.set(name, JSON.stringify(value));
    window.history.replaceState({}, "", `?${params}`);
  }

  return [queryState, setQuery, isReady] as const;
}
