/**
 * 今日のPVとセッションを取得する
 */
 
function getTodayPV() {
  // View ID を設定（GAのURLのpxxxxxの部分の数字）
  var view_id = 108389147;
  
  // 今日の日付を取得
  var today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd');
  
  // APIを呼び出してGAのデータを取得
  var resultsPV = Analytics.Data.Ga.get('ga:' + view_id, today, today, 'ga:pageviews');

  var resultsSessions = Analytics.Data.Ga.get('ga:' + view_id, today, today, 'ga:sessions');
  
  // データからPVを取得
  var rowsPV = resultsPV.getRows();
  
  var rowsSessions = resultsSessions.getRows();

  // ログに出力
  Logger.log("PV " + rowsPV[0]);
  Logger.log("Sessions " + rowsSessions[0]);


   // シートに出力
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  sheet.getRange('B1').setValue(rowsPV);
  sheet.getRange('B2').setValue(rowsSessions);
}