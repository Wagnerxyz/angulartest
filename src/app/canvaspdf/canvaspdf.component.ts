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

    var element = document.getElementById('gridcontainer');
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    // let canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;


    //渲染效果差
    // pdf.html(element, {
    //   callback: function (doc) {
    //     var blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
    //     var blobUrl = URL.createObjectURL(blobPDF); 
    //     window.open(blobUrl);
    //     doc.save();
    //   }
    // });

    //渲染效果好
    html2canvas(element, {
      // scale: 2
      // windowWidth: element.scrollWidth,
      // windowHeight: element.scrollHeight
    }).then(canvas => {
      // Few necessary setting options  貌似是按比例裁剪，不加这个是缩放拉伸
      // var imgWidth = 210;
      // var pageHeight = 297;
      // var imgHeight = canvas.height * imgWidth / canvas.width;
      // var heightLeft = imgHeight;


      //manually input width,height for debug purpose
      if (this.height && this.width) {
        pdf.addImage(canvas, 'PNG', 0, 0, this.width, this.height);
        this.fileName = `${this.width}__${this.height}`;
      }
      else {
        pdf.addImage(canvas, 'PNG', 0, 0, 210, 297);
      }

      // canvas.toBlob(function (blob) {
      //     window.open(URL.createObjectURL(blob));
      // });
      // pdf.save(this.fileName + 'DNI.pdf');
      let blobPDF = new Blob([pdf.output('blob')], { type: 'application/pdf' });

      let lastBlobUrl = URL.createObjectURL(blobPDF);
      window.open(lastBlobUrl);
    });
  }
  public ngOnDestroy(): void {
    window.URL.revokeObjectURL(this.lastBlobUrl);
  }
}
