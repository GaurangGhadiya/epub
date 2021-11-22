import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Reader from 'containers/Reader'
// 60d45480d1f4892d14d7b775/pdf/1634964960315.epub
let data = window.location.pathname
let first = data.split("/")[2]
data = data.split("/")[4]
console.log(first,"data, ",data);
const EPUB_URL = `https://ebook12.s3.eu-central-1.amazonaws.com/${first}/pdf/${data}`;
console.log("EPUB_URL",EPUB_URL);

ReactDOM.render(<Reader url={EPUB_URL} />,  document.getElementById('root'));   