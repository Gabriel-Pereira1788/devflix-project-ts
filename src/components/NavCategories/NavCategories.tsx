import React, { useState } from "react";
import { IDataMovie } from "../../interfaces/IApi";
import { Categories, List } from "./styles";
type Props = {
  setMediasByCategory: React.Dispatch<React.SetStateAction<IDataMovie | null>>;
  mediaList: IDataMovie[];
  randomCategory: string;
};

function NavCategories({
  setMediasByCategory,
  mediaList,
  randomCategory,
}: Props) {
  const [categorySelected, setCategorySelected] =
    useState<string>(randomCategory);

  const handleSetCategory = (category: string): React.MouseEventHandler => {
    return (): void => {
      const DataCategoty = mediaList.find(
        (DataMovies) => DataMovies.identify === category
      );
      setMediasByCategory(DataCategoty!);
      setCategorySelected(category);
    };
  };
  return (
    <Categories>
      <ul>
        {mediaList &&
          mediaList.map(({ title, identify }, index) => (
            <List
              onClick={handleSetCategory(identify)}
              categoryOn={categorySelected === identify}
              key={index}
            >
              {title}
            </List>
          ))}
      </ul>
    </Categories>
  );
}

export default NavCategories;
