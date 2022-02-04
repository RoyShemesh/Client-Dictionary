import { Link } from "react-router-dom";
import { WordInteface } from "../utils/types";

export default function ManyWord(props: WordInteface[]) {
  return (
    <div>
      <h1 className="flex  items-center justify-center font-bold text-2xl underline">
        There is many options:
      </h1>
      <div className="flex flex-wrap items-center align-middle justify-center">
        {props.map((word, i) => (
          <Link
            to={`/${word.Word}/${word.Pos.slice(0, -1)}`}
            className="px-10 py-5 font-semibold text-lg"
            key={i}
          >{`${i + 1})${word.Word}-${word.Pos}`}</Link>
        ))}
      </div>
    </div>
  );
}
