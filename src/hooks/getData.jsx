/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext, useState } from "react";
import { context } from "../context/ContextProvider";

export const useGetData = (info) => {
  const { getDataFunction, query } = info;
  const { setIsLoading } = useContext(context);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await getDataFunction(query);
      setData(data);
      setIsLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
};
