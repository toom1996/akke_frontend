export function arrayToObject<T extends {[key: string]: any}, K extends keyof T>(
    array: T[],
    key: K
  ): {[key: string]: T} {
    return array.reduce((obj, item) => {
      obj[item[key] as unknown as string] = item;
      return obj;
    }, {} as {[key: string]: T});
  }