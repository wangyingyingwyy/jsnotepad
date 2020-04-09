
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
np.menuData = [
    { 
      title: '文件(F)',
      menuItems: [
        {
          title: '新建(N)',
          shortcut: 'Ctrl+N',
          enabled: true,
          handler: function() { console.log('新建(N) menu clicked!'); }
        },
        {
          title: '打开(O)...',
          shortcut: 'Ctrl+O',
          enabled: true,
          handler: function() { console.log('打开(O) menu clicked!'); }
        },
        {
          title: '保存(S)',
          shortcut: 'Ctrl+S',
          enabled: true,
          handler: function() { console.log('保存(S) menu clicked!'); }
        },
        {
          title: '另存为(A)...',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('另存为(A) menu clicked!'); }
        },
        {
          title: 'hr',
          shortcut: '',
          enabled: true,
          handler: null
        },
        {
          title: '页面设置(U)...',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('页面设置(U) menu clicked!'); }
        },
        {
          title: '打印(P)...',
          shortcut: 'Ctrl+P',
          enabled: true,
          handler: function() { console.log('打印(P) menu clicked!'); }
        },
        {
          title: 'hr',
          shortcut: '',
          enabled: true,
          handler: null
        },
        {
          title: '退出(X)',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('退出(X) menu clicked!'); }
        }
      ],
      width: '202px',
      left: '0px'
    },
    { 
      title: '编辑(E)',
      menuItems: [
        {
          title: '撤销(U)',
          shortcut: 'Ctrl+Z',
          enabled: false,
          handler: function() { console.log('撤销(U) menu clicked!'); }
        },
        {
          title: 'hr',
          shortcut: '',
          enabled: true,
          handler: null
        },
        {
          title: '剪切(T)',
          shortcut: 'Ctrl+X',
          enabled: true,
          handler: function() { console.log('剪切(X) menu clicked!'); }
        },
        {
          title: '复制(C)',
          shortcut: 'Ctrl+C',
          enabled: false,
          handler: function() { console.log('复制(C) menu clicked!'); }
        },
        {
          title: '粘贴(P)',
          shortcut: 'Ctrl+V',
          enabled: false,
          handler: function() { console.log('粘贴(P) menu clicked!'); }
        },
        {
          title: '删除(L)',
          shortcut: 'Del',
          enabled: false,
          handler: function() { console.log('删除(L) menu clicked!'); }
        },
        {
          title: 'hr',
          shortcut: '',
          enabled: true,
          handler: null
        },
        {
          title: '使用 Bing 搜索...',
          shortcut: 'Ctrl+E',
          enabled: true,
          handler: function() { console.log('使用 Bing 搜索 menu clicked!'); }
        },
        {
          title: '查找(F)...',
          shortcut: 'Ctrl+F',
          enabled: false,
          handler: function() { console.log('查找(F) menu clicked!'); }
        },
        {
          title: '查找下一个(N)',
          shortcut: 'F3',
          enabled: false,
          handler: function() { console.log('查找下一个(N) menu clicked!'); }
        },
        {
          title: '替换(R)...',
          shortcut: 'Ctrl+H',
          enabled: true,
          handler: function() { console.log('替换(R) menu clicked!'); }
        },
        {
          title: '转到(G)...',
          shortcut: 'Ctrl+G',
          enabled: true,
          handler: function() { console.log('转到(G) menu clicked!'); }
        },
        {
          title: 'hr',
          shortcut: '',
          enabled: true,
          handler: null
        },
        {
          title: '全选(A)',
          shortcut: 'Ctrl+A',
          enabled: true,
          handler: function() { console.log('全选(A) menu clicked!'); }
        },
        {
          title: '时间/日期(D)',
          shortcut: 'F5',
          enabled: true,
          handler: function() { console.log('时间/日期(D) menu clicked!'); }
        },
      ],
      width: '218px',
      left: '52px'
    },
    { 
      title: '格式(O)',
      menuItems: [
        {
          title: '自动换行(W)',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('自动换行(W) menu clicked!'); }
        },
        {
          title: '字体(F)...',
          shortcut: '',
          enabled: true,
          handler: function() { $dlgFont.show({
                                  family: np.fontFamily,
                                  style: np.fontStype,
                                  size: np.fontSize,
                                  okHandler: np.fontHandler
                                })}
        }
      ],
      width: '156px',
      left: '106px'
    },
    { 
      title: '查看(V)',
      menuItems: [
        {
          title: '状态栏(S)',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('状态栏(S) menu clicked!');}
        }
      ],
      width: '138px',
      left: '162px'
    },
    { 
      title: '帮助(H)',
      menuItems: [
        {
          title: '查看帮助(H)',
          shortcut: '',
          enabled: true,
          handler: function() { console.log('查看帮助(H) menu clicked!'); }
        },
        {
          title: '关于记事本(A)',
          shortcut: '',
          enabled: true,
          handler: function() {console.log('关于记事本(A) menu clicked!'); }
        },
      ],
      width: '166px',
      left: '216px'
    }
  ];
var $dlgFont=(function(){
    var $html=$(
        '<div class="notepad-dlg-font">'
        +'<div class="dialogbox">'
            +'<div class="notepad-dlg-titlebar">'
              +'<p class="title">字体</p>'
                +'<span class="close-btn">✖</span>'
            +'</div>'
            +'<div class="main notepad-dlg-main">'
                +'<div class="font-family"><p>字体(F):</p></div>'
                +'<div class="font-style"><p>字形(Y):</p></div>'
                +'<div class="font-size"><p>大小(S):</p></div>'
                +'<fieldset class="sample">'
                    +'<legend>示例</legend>'
                    +'<p class="sample-txt">AaBbYyZz</p>'
                +'</fieldset>'
                +'<div class="script">'
                    +'<lable>'
                      +'脚本(R):<br>'
                       +'<select name="" id="">'
                            +'<option value="西欧语言">西欧语言</option>'
                            +'<option value="中文GB2312">中文GB2312</option>'
                        +'</select>'
                    +'</lable>'
                +'</div>'
                +'<input class="btn btn-ok" type="button" value="确定">'
                +'<input class="btn btn-cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
    +'</div>'
    );
    var $btnOk = $html.find('.btn-ok');
    var $btnClose = $html.find('.close-btn');
    var $btnCancel = $html.find('.btn-cancel');
    var $sample = $html.find('.sample-txt');
    var $titleBar = $html.find('.notepad-dlg-titlebar');
    // font-family列表
    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    // font-style列表
    var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
    // font-size列表
    var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    // 初始化字体
    var cfg = {
        family: 'Arial',
        style: '常规',
        size: '16',
        okHandler: null
      };
    function sample() {
        $sample.css({ 
            'font-family': cfg.family, 
            'font-size': cfg.size + 'px' 
        });
    
        if(cfg.style === '斜体') {
          $sample.css({'font-style': 'italic'});
          $sample.css({'font-weight': ''});
          return;
        }
    
        if(cfg.style === '粗体') {
          $sample.css({'font-style': ''});
          $sample.css({'font-weight': 'bold'});
          return;
        }
        if(cfg.style === '粗偏斜体') {
          $sample.css({'font-style': 'italic'});
          $sample.css({'font-weight': 'bold'});
          return;
        }
    }
    // 初始化
    function init(){
        // font-family列表
        var list1=new comList();
        // font-style列表
        var list2=new comList();
        // font-size列表
        var list3=new comList();
        list1.show({
            container: '.notepad-dlg-font .font-family',
            width: '176px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function(e) {
              cfg.family = fonts[e];
              sample();
            }
        });
        list2.show({
            container: '.notepad-dlg-font .font-style',
            width: '132px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function(e) {
              cfg.style = styles[e];
              sample();
            }
        });
        list3.show({
            container: '.notepad-dlg-font .font-size',
            width: '64px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function(e) {
              cfg.size = sizes[e];
              sample();
            }
        });
        sample();
    }
    function del(){
        $html.remove();
    }
    function show(conf){
        $.extend(cfg,conf);
        $('body').append($html);
        init();
        // $html.find('.dialogbox').draggable({handle: $titleBar});
        $btnClose.click(del);
        $btnCancel.click(del);
        $btnOk.click(function() {
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            del();
        });
    }
    return {show: show};
}());
/* exported $editor */
var $editor = (function() {
  var $DOM = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false" auto-size="none"></textarea>'
      + '</div>');

  var $textArea = $DOM.find('textarea');

  var cfg = {contentHandler: null};
  function setFont(e) {
    $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
    if(e.style === '斜体') {
      $textArea.css({'font-style': 'italic'});
      return;
    }

    if(e.style === '粗体') {
      $textArea.css({'font-weight': 'bold'});
      return;
    }

    if(e.style === '粗偏斜体') {
      $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
      return;
    }
  }
  function show(conf) {
    $.extend(cfg, conf);
    $('body').append($DOM);
    $textArea.trigger('focus');
  }

  return {
    show: show,
    setFont: setFont
  };
}());
function comList() {
    var $comList = $(''
        + '<div class="notepad-com-list">'
          + '<input class="editor" type="text"><br>'
          + '<ul class="list">'
          + '</ul>'
        + '</div>');
  
    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items;
  
    var cfg = {
      container: '',
      list: [],
      select: 0,
      width: '200px',
      isFont: false,
      isFontStyle: false,
      selectHandler: null
    };
  
    function setFontStyle(item, style) {
      if(style === '斜体') {
        item.css({'font-style': 'italic'});
        return;
      }
  
      if(style === '粗体') {
        item.css({'font-weight': 'bold'});
        return;
      }
  
      if(style === '粗偏斜体') {
        item.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
  
    function fillData() {
      var i = 0, $item;
  
      if(cfg.isFont) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $item.css({'font-family': cfg.list[i]});
          $list.append($item.html(cfg.list[i]));
        }
      } else if(cfg.isFontStyle) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          setFontStyle($item, cfg.list[i]);
          $list.append($item.html(cfg.list[i]));
        }
      } else {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $list.append($item.html(cfg.list[i]));
        }
      }
  
      $items = $list.find('.item');
    }
  
    function setSelect(n) {
      $($items[n]).addClass('selected');
      $editor.val(cfg.list[n]);
      $editor.select();
    }
  
    function init() {
      var $oldList = $(cfg.container).find('.notepad-com-list');
      if($oldList.length !== 0) $oldList.remove();
       
      $(cfg.container).append($comList);
      
      $comList.css({ width: cfg.width });
      fillData();
      setSelect(cfg.select);
    }
  
    this.show = function(conf) {
      $.extend(cfg, conf);
      init();
  
      $list.click(function(e) {
        $($items[cfg.select]).removeClass('selected');
        cfg.select = cfg.list.indexOf($(e.target).html());
        $($items[cfg.select]).addClass('selected');
        $editor.val(cfg.list[cfg.select]);
        $editor.select();
        cfg.selectHandler(cfg.select);
      });
  
      $editor.keyup(function() {
        var i = 0;
  
        for(i=0; i<cfg.list.length; i++) {
          if(cfg.list[i].indexOf($editor.val()) === 0) break;
        }
  
        if(i === cfg.list.length) return;
  
        $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
        $($items[cfg.select]).removeClass('selected');
        $($items[i]).addClass('selected');
        cfg.select = i;
      });
    };
}
/* exported $menubar*/
var $menuBar = (function() {
  var $bar = $('<div class="notepad-menubar"></div>');

  var menuData;
  var menus = [];      

  // 标志位，判断菜单是否展开
  var open = -1;

  // 创建一级菜单
  function createMenuTitle() {
      var $menuTitle=$('<ul class="menu-title"></ul>');
      for(var i=0;i<menuData.length;i++){
          var $title=$('<li class="title"></li>');
          // console.log(menuData[i].title)
          $title.html(menuData[i].title);
          $title.attr('dataId',i)
          $menuTitle.append($title);
          // 菜单点击事件
          $title.click(function(){
              var n=this.getAttribute('dataId');
              if(open===-1){
                  menus[n].css({'display':'inline-block'});
                  open=n;
              }else if(open!==n){
                  menus[open].css({'display':'none'});
                  menus[n].css({'display':'inline-block'});
                  open=n;
              }else{
                  menus[n].css({'display':'inline-block'});
                  open=n;
              }
          })
          $title.hover(function () {  
              if(open!==-1){
                  var n=this.getAttribute('dataId');
                  menus[open].css({'display':'none'});
                  menus[n].css({'display':'inline-block'});
                  open=n;
              }
          })
          
      }
      $bar.append($menuTitle);
  }
  // 下拉菜单
  function createMenus() {
      for(var i=0;i<menuData.length;i++){
          var $menus=$('<ul class="menus"></ul>');
          var items=menuData[i].menuItems;
          for(var j=0;j<items.length;j++){
              // console.log(items.length)
              if(items[j].title==='hr'){
                  var $hr=$('<li class="menu-hr"></li>');
                  $menus.append($hr);
                  continue;
              }
              var $menuItem=$('<li class="menu-item"></li>');
              $menuItem.html(items[j].title);
              $menuItem.attr('x',i);
              $menuItem.attr('y',j);
              if(items[j].shortcut!==''){
                  var $shortcut=$('<span class="shortcut"></span>');
                  $shortcut.html(items[j].shortcut);
                  $menuItem.append($shortcut);
              }
              if(!items[j].enabled){
                  $menuItem.addClass('disabled');
              } 
              $menus.append($menuItem);
              $menuItem.click(function() {
                  if($(this).hasClass('disabled')) return;
                  var i = this.getAttribute('x');
                  var j = this.getAttribute('y');
                  menus[i].css({display: 'none'});
                  open = -1;
                  menuData[i].menuItems[j].handler();
                });
          }
          $menus.css({
              'width':menuData[i].width,
              'left':menuData[i].left,
              display:'none'
          });
          $bar.append($menus);
          menus.push($menus);
          
      }
      console.log(menus)
  }
  function hideMenu() {
    if(open === -1) return;
    console.log(open)
    menus[open].css({display: 'none'});
    open = -1;
  }
  function init() {
    createMenuTitle();
    createMenus();
    $('body').append($bar);
  }

  function show(data) {
    menuData = data;
    init();
  }

  return {
    show: show,
    hideMenu:hideMenu
  };
}());