import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {
          /** this would be the body, but the API takes params instead (see below) */
        },
        { params: { q: debouncedText, target: language, key: API_KEY } }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
