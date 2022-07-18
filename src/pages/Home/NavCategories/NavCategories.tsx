import React from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { IDataMovie } from "../../../interfaces/ApiInterface";
import { Categories } from "./styles";
type Props = {
  setMoviesByCategory: React.Dispatch<React.SetStateAction<IDataMovie>>;
};

function NavCategories({ setMoviesByCategory }: Props) {
  const { homeList } = useAuthContext();

  const handleSetCategory = (category: string) => {
    return () => {
      const DataCategoty = homeList?.find(
        (DataMovies) => DataMovies.identify === category
      );
      setMoviesByCategory(DataCategoty!);
    };
  };
  return (
    <Categories>
      <ul>
        {homeList &&
          homeList.map(({ title, identify }, index) => (
            <li onClick={handleSetCategory(identify)} key={index}>
              {title}
            </li>
          ))}
      </ul>
    </Categories>
  );
}

export default NavCategories;
