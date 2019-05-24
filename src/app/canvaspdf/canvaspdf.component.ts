import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'


@Component({
  selector: 'app-canvaspdf',
  templateUrl: './canvaspdf.component.html',
  styleUrls: ['./canvaspdf.component.scss']
})
export class CanvaspdfComponent {

  //https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html configuration compress,precision
  get now(): string {
    return new Date().toLocaleString("en-US"
      , {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "numeric", minute: "numeric", hour12: true
      }
    );
  }
  public wellInfo: any = {};
  get nowDate(): string {
    return new Date().toDateString()
  }
  constructor() {
    (<any>window).html2canvas = html2canvas;
  }
  public canvaswidth: number = 700;
  public width: number;
  public height: number;
  private lastBlobUrl: string;
  public scale: number = 3;
  public fileName: string;

  public captureScreen() {
    window.URL.revokeObjectURL(this.lastBlobUrl);

    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  

    var element = document.getElementById('gridcontainer');
    //渲染效果差
    pdf.html(element, {
      callback: function (doc) {
        doc.save();
      }
    });

    //渲染效果好
    // html2canvas(element, {
    //   // scale: 3
    //   // windowWidth: element.scrollWidth,
    //   // windowHeight: element.scrollHeight
    // }).then(canvas => {
    //   // Few necessary setting options  
    //   var imgWidth = 210;
    //   var pageHeight = 297;
    //   var imgHeight = canvas.height * imgWidth / canvas.width;
    //   var heightLeft = imgHeight;

    //   // const imgProps= this.pdf.getImageProperties(imgData);
    //   // const pdfWidth = this.pdf.internal.pageSize.getWidth();
    //   // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = pdf.internal.pageSize.getHeight();
    //   // const contentDataURL = canvas.toDataURL('image/png');
    //   canvas.toBlob(function (blob) {
    //     window.open(URL.createObjectURL(blob));
    //   });
    //   pdf.addImage(canvas, 'PNG', 0, 0, width, height)

    //   // var blobPDF = new Blob([this.pdf.output('blob')], { type: 'application/pdf' });
    //   // var blobUrl = URL.createObjectURL(blobPDF);  //<--- THE ERROR APPEARS HERE
    //   // window.open(blobUrl, "DescriptiveWindowName");  // will open a new tab

    //   // URL.revokeObjectURL(blobUrl);
    //   pdf.save(canvas.width + 'DNI.pdf');
    // });
  }
  public ngOnDestroy(): void {
    window.URL.revokeObjectURL(this.lastBlobUrl);
  }
}
