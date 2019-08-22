function scanBarcode() {
  window.plugins.barcodeScanner.scan( function(result){
    if(result.text == 280720550){ 
      window.location.href="modelo1.html";
       alert("Leitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }

    if(result.text == 989895555){ 
      window.location.href="modelo2.html";
       alert("Leitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }

    if(result.text == 85236987){ 
      window.location.href="modelo3.html";
       alert("Leitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }
    
    if(result.text == 85369877444){ 
      window.location.href="modelo4.html";
       alert("Leitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }

    if(result.text != 280720550 && result.text != 989895555 && result.text != 85236987 && result.text != 85369877444) {
      alert("Código não identificado !\nLeitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }
  }, function(error) {
      alert("Erro no scanner: " + error);
  },
   {
          preferFrontCamera : false,
          showFlipCameraButton : true,
          showTorchButton : true,
          torchOn: false,
          saveHistory: false,
          prompt : "Place a barcode inside the scan area",
          resultDisplayDuration: 500,
          formats : "QR_CODE,PDF_417,CODE_39",
          orientation : "portrait",
          disableAnimations : true,
          disableSuccessBeep: false
        }
  );
}