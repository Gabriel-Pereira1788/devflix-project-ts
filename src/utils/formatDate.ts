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
  const MILISECONDS_IN_SECONDS = 1000;
  let dateFormat: Date;

  typeof date === "object"
    ? (dateFormat = new Date(date.seconds * MILISECONDS_IN_SECONDS))
    : (dateFormat = new Date(date));

  return dateFormat
    .toString()
    .split(" ")
    .filter((text) => !TEXT_REMOVE.includes(text) && !text.includes("GMT"))
    .join(" ");
};
