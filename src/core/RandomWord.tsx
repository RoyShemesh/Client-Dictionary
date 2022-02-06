import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BASEURL } from "../utils/config";
import Word from "./Word";

export default function RandomWord() {
  const { part } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("letter");

  const [data, setData] = useState<any>();
  const [search, setSerach] = useState(true);

  useEffect(() => {
    if (typeof part === "string") {
      const newPart = part.replace(/[^0-9a-z]/gi, "");
      const fetch = async () => {
        try {
          let words;
          if (query)
            words = await axios.get(
              `${BASEURL}/part-of-speech/${newPart}?letter=${query}`
            );
          else words = await axios.get(`/part-of-speech/${newPart}`);
          console.log(words.data);

          setData(words.data);
        } catch (error) {
          setSerach(false);
        }
      };
      fetch();
    }
  }, []);
  return (
    <div>
      {data ? (
        <div>{Word(data)}</div>
      ) : (
        <div className="font-bold text-2xl underline">
          {search ? (
            <div>Searching</div>
          ) : (
            <div>{`'${part}' part not found`}</div>
          )}
        </div>
      )}
    </div>
  );
}
