import { useState, useEffect } from "react";

import styles from "./Flasher.module.css";

type FlasherProps = {
  text: string;
  stopFn: () => void;
};

const Flasher = ({ text, stopFn }: FlasherProps) => {
  const words = text.split(" ");

  const [rate, setRate] = useState(1000);
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [timer, setTime] = useState(null);

  useEffect(() => {
    if (index < words.length - 1 && words[index] && !paused) {
      const timeoutID = setTimeout(() => {
        setIndex(index + 1);
      }, rate);
      //@ts-ignore
      setTime(timeoutID);
    }
  }, [index, paused, rate]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
  }, [rate, paused]);

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < words.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className={styles["flash-container"]}>
      <div className={styles["controls-container"]}>
        <div className={styles["input"]}>
          <label htmlFor="rate">Rate (in milliseconds)</label>
          <input
            name="rate"
            type="number"
            min="1"
            value={rate}
            onChange={(e: any) => setRate(e.target.value)}
          />
        </div>
        <div>
          <div>
            Word {index + 1} of {words.length}
          </div>
          <div>
            <button onClick={handlePrevious} disabled={!paused || index <= 0}>
              Prev
            </button>
            <button onClick={() => setPaused(!paused)}>
              {paused ? "Play" : "Pause"}
            </button>
            <button
              onClick={handleNext}
              disabled={!paused || index >= words.length - 1}
            >
              Next
            </button>
            <button onClick={() => setIndex(0)}>Reset</button>
          </div>
        </div>
        <div>
          <button onClick={() => stopFn()}>Back</button>
        </div>
      </div>
      <div className={styles["flash-area"]}>
        {words[index] || "No more words!"}
      </div>
    </div>
  );
};

export default Flasher;
