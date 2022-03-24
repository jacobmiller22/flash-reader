import { useState } from "react";
import { Flasher } from "../../components";

const IndexView = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  if (show) {
    return <Flasher text={text} stopFn={() => setShow(false)} />;
  }

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
        <button onClick={() => setShow(true)}>Start Flasher</button>
      </div>
      <p>Enter words into the text area below. When ready, hit start.</p>
      <textarea value={text} onChange={handleChange} />
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
