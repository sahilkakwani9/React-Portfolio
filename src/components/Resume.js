import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Resume.css'

function Resume() {
  const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

  return (
    <div className='resume'>
      <div className='pdf-container'>

<Document
  file="/Resume.pdf"
  onLoadSuccess={onDocumentLoadSuccess}
>
  <Page pageNumber={pageNumber} />
</Document>
</div>
    </div>
  )
}

export default Resume