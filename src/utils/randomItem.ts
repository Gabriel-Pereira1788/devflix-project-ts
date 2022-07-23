export function randomItem<T>(data: T[] | null): T {
  const random = Math.ceil(Math.random() * data!.length - 1);
  return data![random];
}
