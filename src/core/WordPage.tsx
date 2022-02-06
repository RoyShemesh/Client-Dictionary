import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASEURL } from "../utils/config";
import { WordInteface } from "../utils/types";
import ManyWord from "./ManyWords";
import Word from "./Word";

export default function WordPage() {
  const { word } = useParams();
  const [data, setData] = useState<WordInteface[]>();
  const [search, setSerach] = useState(true);
  useEffect(() => {
    if (typeof word === "string") {
      const newWord = word.replace(/[^0-9a-z]/gi, "");
      const fetch = async () => {
        try {
          const words = await axios.get(`${BASEURL}/${newWord.toUpperCase()}`);
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
        <div>{data.length === 1 ? Word(data[0]) : ManyWord(data)}</div>
      ) : (
        <div className="font-bold text-2xl underline">
          {search ? <div>Searching</div> : <div>{`'${word}' not found`}</div>}
        </div>
      )}
    </div>
  );
}
