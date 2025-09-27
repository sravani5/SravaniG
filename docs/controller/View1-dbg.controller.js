sap.ui.define([
   "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/m/PDFViewer"
], (Controller,JSONModel ,Device ,PDFViewer) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
         onInit: function () {
        const oModel = new JSONModel({
          rootPath: jQuery.sap.getModulePath("com.portfolio"),
          Link: {
            Resume:
              "https://drive.google.com/file/d/1j00rNEBjxuQkL1jUhgrzGriLYXjUTgBX/view",
            Github: "https://github.com/MaheshSirsat/",
            LinkedIn: "https://www.linkedin.com/in/mahesh-sirsat-21082b20b/",
            fiori_cert:
              "https://www.credly.com/badges/cdd0363a-78d3-4e47-ae2f-12c0a87d5655",
            capm_cert:
              "https://www.credly.com/badges/04e83302-a1b7-4608-a37c-a4581734d38c",
            udemy_cert:
              "https://www.udemy.com/certificate/UC-69d9c798-aab3-435c-8295-21d957ab0ac6/",
            youtube: "https://www.youtube.com/@maheshsirsat1811",
          },
          HTML: `<strong>SAP Certified Fiori Developer</strong> with 7+ years of professional experience in SAP UI5 and Fiori application development <br><br>
          Expertise in designing freestyle Fiori Application integrated with sap backend system.<br><br>
          Strong expertise in building enterprise-grade SAP Fiori applications with OData integration, Smart Controls, and Fiori Launchpad configuration<br><br>
          Expertise in Standard Fiori Application Activation and Extension and also developing Fiori elements applications.<br><br>
          Expertise in developing and deploying applications to Cloud Foundry <br><br>
          Exploring SAP Business Technology Platform (BTP) with <strong>exposure to CAPM (Cloud Application Programming Model)</strong>, CDS, annotations, and deployment. <br><br>
          Also exposed to SAP Build Code and Build Apps through POCs for low-code/no-code extensions. Familiar with Python (Basics). <br><br>
          Successfully handled end-to-end support for project involving requirements gathering, design, development and deployment to system.<br><br>`,
          project1roles: ` Designed and developed Fiori List Report/Object Page using Fiori       Elements with OData services.<br><br>
          Built custom UI5 applications using Smart Controls and annotations.<br><br>
          Deployed applications on SAP BTP Cloud Foundry <br><br>
          Created POCs with CAPM (service layer, CDS, annotations) as part of BTP learning initiatives.<br><br>
          Explored SAP Build Code and Build Apps.<br><br>
          Collaborated with Basis team for tile/catalog/group setup.<br><br>
          Participated in Agile ceremonies and handled hyper care activities.<br><br>`,
          project2roles: `Developed custom SAP Fiori apps using SAP UI5 and MVC architecture.<br><br>
          Integrated OData services with dynamic bindings and XML fragments.<br><br>
          Implemented Smart Table-based applications with Excel export and dialog editing.<br><br>
          Worked on Fiori extension projects and Fiori Launchpad Designer.<br><br>
          Supported testing, deployment, and issue resolution in Agile sprints<br><br>`,

          project3roles: `Developed responsive UI5 applications with OData V2 consumption.<br><br>
          Built Record Management, Print Barcodes, and Biller Worklist apps from scratch<br><br>
          Designed dynamic client mapping features using XML fragments<br><br>
          Supported testing, debugging, and application rollout.<br><br>`,
          
          

        });
        this.getView().setModel(oModel);
      },
    
      onDownloadResumeButtonPress: function () {
        const pdfData = this.getView().getModel().getProperty("/pdfBase64");

        const deccont = atob(pdfData);
        const byteNumbers = new Array(deccont.length);

        for (let i = 0; i < deccont.length; i++) {
          byteNumbers[i] = deccont.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });
        var pdfDocumentURL = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = pdfDocumentURL;
        link.setAttribute("download", `Sravani_Ganta_Fiori_Resume.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      onLinkPress: function (that, oEvent, sLink) {
        const link = document.createElement("a");
        link.href = sLink;
        link.setAttribute("target", `__blank`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    });
});