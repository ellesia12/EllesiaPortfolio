import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import testPdf from "../doc/Ellesia_J_Janto.pdf";

// More examples here
// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

// You could also pass the file as a URL to the Document component as such:
const url =
  "https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf";

const Resume = () => {
  // PDFjs worker from an external cdn
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <>
      <div>
        <Document file={testPdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
       {/*  <p>
          Page {pageNumber} of {numPages}
        </p> */}
       {/*  {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))} */}
      </div>
    </>
  );
};

export default Resume;
