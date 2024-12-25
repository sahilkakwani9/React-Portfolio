import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css'

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLoaded,setPageLoaded] = useState(false);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);

    if (numPages){
      setPageLoaded(true);
      console.log(pageLoaded);
    }
  };

  return (
      <div className='resume'>
      <div className={pageLoaded?'pdf-container':''}>

        <Document
          file="/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          loading={<h1 style={{color: 'white'}}>loading</h1>}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  )
}

export default Resume