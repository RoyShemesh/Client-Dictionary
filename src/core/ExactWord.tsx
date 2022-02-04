import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManyWord from "./ManyWords";
import Word from "./Word";

export default function ExactWord() {
  const { word, partOfSpeech } = useParams();
  const [data, setData] = useState<any>();
  const [search, setSerach] = useState(true);

  useEffect(() => {
    if (typeof word === "string") {
      const newWord = word.replace(/[^0-9a-z]/gi, "");
      const fetch = async () => {
        try {
          const words = await axios.get(
            `/${newWord.toUpperCase()}/${partOfSpeech}`
          );
          setData(words.data.Items);
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
