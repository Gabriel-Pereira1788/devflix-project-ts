const TEXT_REMOVE: string[] = [
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

interface IUT {
  seconds: number;
}
export const formatDate = (date: string | IUT) => {
  let dateFormat: Date;

  typeof date === "object"
    ? (dateFormat = new Date(date.seconds))
    : (dateFormat = new Date(date));

  return dateFormat
    .toString()
    .split(" ")
    .filter((text) => !TEXT_REMOVE.includes(text) && !text.includes("GMT"))
    .join(" ");
};
