var ui = SpreadsheetApp.getUi();

function sendMail() {
  //var to = 'camilo.molina.orth@gmail.com';
  var subject = 'Este es un mail automatico.';
 
  var now = new Date(); 
  var month = Utilities.formatDate(now, Session.getTimeZone(), "MM");
  var day = Utilities.formatDate(now, Session.getTimeZone(), "dd");
  
  var date = day + "/" + month;

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var rows = sheet.getDataRange();
  var numColumns = rows.getNumColumns();
  var numRows = rows.getNumRows();

  for(var i = 2 ;i <= numRows ; ++i)
  {

    var name = sheet.getRange(i,2).getValue();
    var luthier = sheet.getRange(i,21).getValue();
    var date = sheet.getRange(i,16).getValue();

    
    if (compareDate.inDays(now, date)) {
      //ui.alert('luthier con fecha de entrega ' + i + ' ' + luthier + ';');    
      var body ='Promusica : ' + date + ' - \n Fecha de entrega para ' + name;

      GmailApp.sendEmail(getLutherMail(luthier), subject, body);
    }
  }
     
}

function getLutherMail(luthier) {
  if (luthier == 'Nicolás Maraboli') return 'osvaldobastias@gmail.com';
  else if (luthier == 'Víctor Correa') return 'osvaldobastias@gmail.com';
  else if (luthier == 'Abraham Morales') return 'osvaldobastias@gmail.com';
  else if (luthier == 'Antonio Poblete') return 'osvaldobastias@gmail.com';
  else if (luthier == 'Abraham Morales') return 'osvaldobastias@gmail.com';
}

function getLutherMail2(luthier) {
  if (luthier == 'Nicolás Maraboli') return 'camilo.molina.orth@gmail.com';
  else if (luthier == 'Víctor Correa') return 'camilo.molina.orth@gmail.com';
  else if (luthier == 'Abraham Morales') return 'camilo.molina.orth@gmail.com';
  else if (luthier == 'Antonio Poblete') return 'camilo.molina.orth@gmail.com';
  else if (luthier == 'Abraham Morales') return 'camilo.molina.orth@gmail.com';
}

var DateDiff = {    
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var compareDate = {    
    inDays: function(d1, d2) {      
        return d2.getFullYear() == d1.getFullYear() && d2.getMonth() == d1.getMonth() && d2.getDate() == d1.getDate();
    },
    inMonths: function(d1, d2) {
        return d2.getFullYear() == d1.getFullYear() && d2.getMonth() == d1.getMonth();
    },
    inYears: function(d1, d2) {
        return d2.getFullYear() == d1.getFullYear();
    }
}