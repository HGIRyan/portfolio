// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf/build/entry.webpack';
// import  './Resume.css';

// class MyApp extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoad = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div className='Resume-Container'>
//         <Document
//           file="../Assets/Michael_Hutchison_Resume.pdf"
//           onLoadSuccess={this.onDocumentLoad}
//         >
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }