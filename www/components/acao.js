function scanBarcode() {
  window.plugins.barcodeScanner.scan( function(result){
    if(result.text == 280720550){ 
      window.location.href="modelo.html";
       alert("Leitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }if(result.text != 280720550) {
      alert("Código não identificado !\nLeitura do código  de barras\n" +
        "Resultado: " + result.text + "\n" +
        "Formato: " + result.format+ "\n" +
        "Cancelado: " + result.cancelled);
    }
  }, function(error) {
      alert("Scanning failed: " + error);
  },
   {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: false, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
  );
}