import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManyWord from "./ManyWords";
import Word from "./Word";

export default function RandomWord() {
  const { part } = useParams();
  const [data, setData] = useState<any>();
  const [search, setSerach] = useState(true);

  useEffect(() => {
    if (typeof part === "string") {
      const newPart = part.replace(/[^0-9a-z]/gi, "");
      const fetch = async () => {
        try {
          const words = await axios.get(`/part-of-speech/${newPart}`);
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
