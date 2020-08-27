var sheetName = "Sheet1";
var scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", activeSpreadsheet.getId());
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));
    var sheet = doc.getSheetByName(sheetName);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function (header) {
      return header === "timestamp" ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    const SLACK_URL = "<slack-hook-url>";
    const fields = headers.map((header, idx) => ({
      type: "mrkdwn",
      text: "*" + header + ":*\n" + newRow[idx],
    }));
    const options = {
      method: "post",
      payload: JSON.stringify({
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "You have a new entry in:\n*<" +
                doc.getUrl() +
                "|" +
                doc.getName() +
                ">*",
            },
          },
          {
            type: "section",
            fields: fields,
          },
        ],
      }),
    };
    UrlFetchApp.fetch(SLACK_URL, options);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: nextRow })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: e })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
