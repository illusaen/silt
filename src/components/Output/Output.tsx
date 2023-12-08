import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectOutputs, add } from "./outputSlice";
import { RootState } from "../../app/store";
import { selectShowTimestamp, add as addSetting } from "../Settings/settingsSlice";

export const Output = () => {
  const id = 'TEST';
  const dispatch = useAppDispatch();
  const testClick = () => {
    dispatch(addSetting({
      name: 'Kallisti',
      host: 'kallistimud.com',
      port: 4000,
    }));
    dispatch(add({
      raw: 'test',
      timestamp: new Date(Date.now()).toLocaleString(),
    }))
  }

  const outputs = useAppSelector((state: RootState) => selectOutputs(state));
  const showTimestamps = useAppSelector((state: RootState) => selectShowTimestamp(state, id));

  const divRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTo(0, divRef.current.scrollHeight - divRef.current.clientHeight);
    }
  }, []);

  return (
    <div className='bg-uiBackgroundDark rounded-t-md shadow-xl text-text grow p-4 overflow-y-scroll break-words w-full' ref={divRef}>
      <table>
        <tbody>
          {
            outputs.map((output, index) =>
              <tr className='' key={index}>
                {showTimestamps && <td>{output.timestamp}</td>}
                <td>{output.processed}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <button onClick={testClick}>TEST</button>
    </div>
  );
};
