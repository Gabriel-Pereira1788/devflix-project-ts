import React, { memo } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { IDataMovie } from "../../../interfaces/IApi";
import { Categories } from "./styles";
type Props = {
  setMoviesByCategory: React.Dispatch<React.SetStateAction<IDataMovie | null>>;
};

function NavCategories({ setMoviesByCategory }: Props) {
  const { dataList } = useAuthContext();

  const handleSetCategory = (category: string) => {
    return () => {
      const DataCategoty = dataList?.moviesList.find(
        (DataMovies) => DataMovies.identify === category
      );
      setMoviesByCategory(DataCategoty!);
    };
  };
  return (
    <Categories>
      <ul>
        {dataList?.moviesList &&
          dataList.moviesList.map(({ title, identify }, index) => (
            <li onClick={handleSetCategory(identify)} key={index}>
              {title}
            </li>
          ))}
      </ul>
    </Categories>
  );
}

export default memo(NavCategories);
