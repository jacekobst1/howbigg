import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryState<T>(
  name: string,
  defaultValue: T | null = null
) {
  const [isReady, setIsReady] = useState(false);
  const [queryState, setQueryState] = useState<T | null>(defaultValue);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const param = searchParams.get(name);

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
    setQueryState(value);
    const params = new URLSearchParams(searchParams);
    params.set(name, JSON.stringify(value));
    window.history.replaceState({}, "", `?${params}`);
  }

  return [queryState, setQuery, isReady] as const;
}
