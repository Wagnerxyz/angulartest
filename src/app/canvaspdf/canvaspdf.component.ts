import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'


@Component({
  selector: 'app-canvaspdf',
  templateUrl: './canvaspdf.component.html',
  styleUrls: ['./canvaspdf.component.css']
})
export class CanvaspdfComponent {

  //https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html configuration compress,precision
  private pdf: jspdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  get now(): string { return Date(); }
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
      scale: 2
    }).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      // const imgProps= this.pdf.getImageProperties(imgData);
      // const pdfWidth = this.pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // var width = this.pdf.internal.pageSize.getWidth();
      // var height = this.pdf.internal.pageSize.getHeight();
      this.pdf.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight)
      this.pdf.save('DNI.pdf'); 
    });
  }

}
