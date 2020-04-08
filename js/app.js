
// Notepad 主程序对象
var np = {};                
np.config = {
  'appContainer': '.notepad-app'
};
np.bShowStatusBar = false;   // 是否显示状态栏
np.bWrap          = false;   // 是否换行
np.fontFamily     = 'Arial'; // 默认字体
np.fontStype      = '常规';  // 默认字体样式
np.fontSize       = '16px';    // 默认字体大小：16px

np.fontHandler = function(e) {
  np.fontFamily = e.family;
  np.fontStype = e.style;
  np.fontSize = e.size;
  console.log(e.family);
  $editor.setFont(e);
};
$(function() {
  $menuBar.show(np.menuData);
  $editor.show({
    contentHandler: function(isEmpty) {
      $menuBar.enabled(1, 6, isEmpty);
    }
  });
  $editor.setFont({
    family: np.fontFamily,
    style: np.fontStype,
    size: np.fontSize
  });
  var $app = $('.notepad-editor');

  $app.click(function() {
    $menuBar.hideMenu();
  });
});