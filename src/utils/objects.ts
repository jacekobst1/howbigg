function mergeDeep(...objects: any[]) {
  const isObject = (obj: any) => obj && typeof obj === "object";

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
}

function mapWithPrototype<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U
): U[] {
  const result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = callback(array[i], i, array);
    Object.setPrototypeOf(item, Object.getPrototypeOf(array[i]));
    result.push(item);
  }

  return result;
}

export { mergeDeep, mapWithPrototype };
