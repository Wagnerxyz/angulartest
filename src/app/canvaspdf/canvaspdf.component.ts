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
  private pdf: jspdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  get now(): string {
    return new Date().toLocaleTimeString("en-GB", {
      weekday: "long", year: "numeric", month: "long",
      day: "numeric"
    });
  }

  constructor() {
    (<any>window).html2canvas = html2canvas;
  }
  public captureScreen() {

    //渲染效果差
    var data = document.getElementById('container');
    // this.pdf.html(data, {
    //   callback: function (doc) {
    //     doc.save();
    //   }
    // });

    //渲染效果好
    html2canvas(data, {
      // scale: 3
    }).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      // const imgProps= this.pdf.getImageProperties(imgData);
      // const pdfWidth = this.pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      var width = this.pdf.internal.pageSize.getWidth();
      var height = this.pdf.internal.pageSize.getHeight();
      // const contentDataURL = canvas.toDataURL('image/png');
      this.pdf.addImage(canvas, 'PNG', 0, 0, width, height)

      // var blobPDF = new Blob([this.pdf.output('blob')], { type: 'application/pdf' });
      // var blobUrl = URL.createObjectURL(blobPDF);  //<--- THE ERROR APPEARS HERE
      // window.open(blobUrl, "DescriptiveWindowName");  // will open a new tab

      // URL.revokeObjectURL(blobUrl);
      this.pdf.save(canvas.width + 'DNI.pdf');

      // for (let i = 0; i < 3; i++) {
      //   let pdf = new jspdf('p', 'px', 'a4');
      //   canvas.width = canvas.width - 200;
      //   pdf.addImage(canvas, 'PNG', 0, 0, canvas.width, canvas.height)
      //   pdf.save(canvas.width + 'DNI.pdf');
      // }

    });
  }

}
