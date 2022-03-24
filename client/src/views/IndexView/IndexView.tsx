import { useState, useEffect } from "react";
import { Flasher } from "../../components";

const IndexView = () => {
  const initError = "​";

  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(initError);

  useEffect(() => {
    if (error !== initError && text.length > 0) {
      setError(initError);
    }
  }, [text]);

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  if (show) {
    return <Flasher text={text} stopFn={() => setShow(false)} />;
  }

  const handleStart = () => {
    if (text.length > 0) {
      setShow(true);
    } else {
      setError("You must enter text to flash.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingInline: "8px",
      }}
    >
      <h1>Flash Reader</h1>
      <div>
        <button onClick={handleStart}>Start Flasher</button>
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <p>Enter words into the text area below. When ready, hit start.</p>
      <textarea
        value={text}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <p>
        A future version of this app will allow you to upload a PDF or picture
        to read the text. This can be done easily using Optical Character
        Recognition via the Google Clouds Vision API. For now, you can get the
        text directly from{" "}
        <a href="https://www.onlineocr.net/" target="_blank">
          onlineocr.net
        </a>{" "}
        or any other OCR service.
      </p>
    </div>
  );
};

export default IndexView;
