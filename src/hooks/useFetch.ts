import { useEffect, useState } from "react";
import { ITmdb, IReview } from "../interfaces/IApi";

interface IData {
  mediaData: ITmdb | null;
  mediaReview: IReview;
}

export const useFetch = (urlData: string, urlReview: string) => {
  const [data, setData] = useState<IData>({
    mediaData: null,
    mediaReview: { results: [] },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await fetch(urlData);
        const responseReview = await fetch(urlReview);

        const data = await responseData.json();
        const review = await responseReview.json();
        setData((prevData) => ({
          ...prevData,
          mediaData: data,
          mediaReview: review,
        }));
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, [urlData, urlReview]);

  return data;
};
