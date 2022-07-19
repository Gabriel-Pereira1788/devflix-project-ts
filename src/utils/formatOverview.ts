export const formatMaxLetters = (overview: string, max: number): string => {
  if (overview.length > max) {
    return (
      [...overview]
        .filter((letter, index) => {
          if (index < max) {
            return letter;
          }
        })
        .join("") + "..."
    );
  }
  return overview;
};
