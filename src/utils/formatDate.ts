const TEXT_REMOVE: string[] = [
  "GMT-0300",
  "(Horário",
  "Padrão",
  "de",
  "Brasília)",
  "Thu",
  "Fri",
  "Tue",
  "Sat",
  "Sun",
  "Mon",
];

export const formatDate = (date: string) => {
  const dateNew = new Date(date);
  return dateNew
    .toString()
    .split(" ")
    .filter((text) => !TEXT_REMOVE.includes(text))
    .join(" ");
};
