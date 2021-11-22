import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Reader from 'containers/Reader'
import queryString from "query-string";
// 60d45480d1f4892d14d7b775/pdf/1634964960315.epub

const idValue = queryString.parse(window.location.search);
console.log("data, ",idValue);
const EPUB_URL = `https://ebook12.s3.eu-central-1.amazonaws.com/${idValue.first}`;
console.log("EPUB_URL",EPUB_URL);

ReactDOM.render(<Reader url={EPUB_URL} />,  document.getElementById('root'));   