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
  constructor() {
    (<any>window).html2canvas = html2canvas;
  }
  public captureScreen() {

    var data = document.getElementById('contentToConvert');
    this.pdf.html(data, {
      callback: function (doc) {
        doc.save();
      }
    });


    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      this.pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight)
      this.pdf.save('DNI.pdf'); // Generated PDF   
    });
  }

}
