
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import "./App.css";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy);

    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
   /* The useSpeechRecognition hook is used to access the transcript and browserSupportsSpeechRecognition properties:

transcript: Contains the text transcribed from the speech input.
browserSupportsSpeechRecognition: A boolean value indicating whether the user's browser supports speech recognition.*/
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;