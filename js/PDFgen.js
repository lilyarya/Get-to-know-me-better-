function goPDF (){ 
    //to access current date and time
    let currentDate = new Date(); // acessing the whole date
    let currentDateString = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear(); // creating a string in Indian Date Format
    let dateTimeString = currentDateString + ',' + currentDate.getHours()  + "-"+  currentDate.getMinutes(); // creating final date string adding time
    var additionalConfig ={
        margin : 1,
        filename : "Arya's_Resume"+ dateTimeString + '.pdf'
      };
      var pdfDivision = document.getElementById("pdfDiv"); 
      var pdf =html2pdf().set(additionalConfig).from(pdfDivision).save(); 
      return pdf;  
    }