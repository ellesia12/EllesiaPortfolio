import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

import pdf from '../bachelorUSA.pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
  
 console.log(pdf)
  
    return (
      <>
        <Document
          file={process.env.PUBLIC_URL + pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </>
    );
  }





{/* <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                data={require('../doc/EllesiaJantoEuropeanResume.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
               </object>
            </div> */}

export default Resume;