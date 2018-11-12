 // Simple check if the browser understands the API
 // Is there a better/more reliable way of checking support?
 if (document.fonts) {
     // Define a new FontFace
     var AvenirBold = new FontFace('Bold', 'url(../../fonts/AvenirLTStd-Black.otf)');
     //console.log(notoSansRegular);

     // Add the FontFace to the FontFaceSet
     document.fonts.add(AvenirBold);

     // Get the current status of the FontFace
     // (should be 'unloaded')
     console.info('Current status', AvenirBold.status);

     // Load the FontFace
     AvenirBold.load();

     // Get the current status of the Fontface
     // (should be 'loading' or 'loaded' if cached)
     console.info('Current status', AvenirBold.status);

     // Wait until the font has been loaded, log the current status.
     AvenirBold.loaded.then(function (fontFace) {
         console.info('Current status', fontFace.status);
         console.log(fontFace.family, 'loaded successfully.');


         document.getElementById("ini").classList.add("Avenir-Bold");
         
         document.getElementById("reg").classList.add("Avenir-Bold");

         // Add a class to the titles elements
         var h1 = document.getElementsByTagName("h1");
         for (var i = 0; i < h1.length; i++) {
             h1[i].classList.add("Avenir-Bold");
         }
         var h2 = document.getElementsByTagName("h2");
         for (var i = 0; i < h2.length; i++) {
             h2[i].classList.add("Avenir-Bold");
         }

         var h4 = document.getElementsByTagName("h4");
         for (var i = 0; i < h4.length; i++) {
             h4[i].classList.add("Avenir-Bold");
         }
         var h5 = document.getElementsByTagName("h5");
         for (var i = 0; i < h5.length; i++) {
             h5[i].classList.add("Avenir-Bold");
         }
         var h6 = document.getElementsByTagName("h6");
         for (var i = 0; i < h6.length; i++) {
             h6[i].classList.add("Avenir-Bold");
         }


         // Throw an error if loading wasn't successful
     }, function (fontFace) {
         console.error('Current status', AvenirBold.status);
     });

     // Track if all fonts (if there are multiple) have been loaded
     // The 'ready' promise resolves if this is the case
     document.fonts.ready.then(function (fontFaceSet) {
         console.log(fontFaceSet.size, 'FontFaces loaded.');
     });

 } else {
     console.error('Sorry, unsupported browser');
 }


 //NORMAL FONT

 // Simple check if the browser understands the API
 // Is there a better/more reliable way of checking support?
 if (document.fonts) {
     // Define a new FontFace
     var AvenirNormal = new FontFace('Normal', 'url(../../fonts/AvenirLTStd-Roman.otf');
     //console.log(notoSansRegular);

     // Add the FontFace to the FontFaceSet
     document.fonts.add(AvenirNormal);

     // Get the current status of the FontFace
     // (should be 'unloaded')
     console.info('Current status', AvenirNormal.status);

     // Load the FontFace
     AvenirNormal.load();

     // Get the current status of the Fontface
     // (should be 'loading' or 'loaded' if cached)
     console.info('Current status', AvenirNormal.status);

     // Wait until the font has been loaded, log the current status.
     AvenirNormal.loaded.then(function (fontFace) {
         console.info('Current status', fontFace.status);
         console.log(fontFace.family, 'loaded successfully.');

         // Add a class to the body element
         document.body.classList.add('Avenir-Normal');
         var h3 = document.getElementsByTagName("h3");
         for (var i = 0; i < h3.length; i++) {
             h3[i].classList.add("Avenir-Normal");
         }

         // Throw an error if loading wasn't successful
     }, function (fontFace) {
         console.error('Current status', AvenirNormal.status);
     });

     // Track if all fonts (if there are multiple) have been loaded
     // The 'ready' promise resolves if this is the case
     document.fonts.ready.then(function (fontFaceSet) {
         console.log(fontFaceSet.size, 'FontFaces loaded.');
     });

 } else {
     console.error('Sorry, unsupported browser');
 }