import * as querystring from "querystring";
import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type ParamType = {
  [key: string]: any;
};

export default function useQueryStateOld<T>(
  name: string,
  defaultValue: T | null = null
) {
  const [queryState, setQueryState] = useState<T | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const param = searchParams.get(name);

  if (param) {
    let parsedParamValue = <T>querystring.parse(param)[name];
    if (isJson(<string>parsedParamValue)) {
      parsedParamValue = JSON.parse(<string>parsedParamValue);
    }

    if (JSON.stringify(parsedParamValue) !== JSON.stringify(queryState)) {
      setQueryState(parsedParamValue);
    }
  }

  function setQueryStateWrapper(value: T | null) {
    const newParam: ParamType = {};
    newParam[name] = getValue(value);
    const stringified = querystring.stringify(newParam);
    const params = new URLSearchParams(searchParams);
    params.set(name, stringified);
    router.replace(`${pathname}?${params}`);
  }

  return [queryState, setQueryStateWrapper] as const;
}

function getValue(value: any) {
  return typeof value === "object" ? JSON.stringify(value) : value;
}

function isJson(value: string) {
  try {
    return JSON.parse(value) && !!value;
  } catch (e) {
    return false;
  }
}
