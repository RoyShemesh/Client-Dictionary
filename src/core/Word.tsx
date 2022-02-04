import { Link } from "react-router-dom";
import { WordInteface } from "../utils/types";

export default function Word({ Word, Pos, Definitions }: WordInteface) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl underline">{`${Word}-${Pos}`}</h1>
      {/* <div className="font-semibold text-xl ">{`${Definitions[0]}`}</div> */}
      <div className="font-semibold text-xl ">
        {Definitions.map((def, i) => (
          <div className="py-5 max-w-sm " key={i}>
            {`Defintion number ${i + 1}:`}
            <p>
              {def.match(/\w+|\W+/g)?.map(
                (match, i) =>
                  /\W/.test(match) ? (
                    match // plain string
                  ) : (
                    <Link key={i} to={`/${match}`}>
                      {match}
                    </Link>
                  ) // JSX element
              )}
            </p>
            {/* <EachWordClickable paragraph={def} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
