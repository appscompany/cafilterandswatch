(function () {
  var _templateName = 'collection';
  var searchparams = '';
  if (location.search.length) {
    searchparams = location.search.substr(1).split('?');
    if(searchparams.indexOf("q=") != -1)
    {
      _templateName = 'search';
    }
  }
  window.collectiongridselector = '';
  var _currenturl = location.href;
  var paramlessurl = _currenturl.split('?')[0];
  var pathslist = paramlessurl.split('/');
  var _collectionhandle = pathslist[pathslist.length - 1];
  var _collectiongridSelector = '#collection-root';
  window.collectiongridselector = '#collection-root';
  var _filterPosition = 'VLeft'; // VLeft,HTop,VSideBar
  var _stylesheeturl = '//cdn.shopify.com/s/files/1/2221/7685/t/124/assets/filtercss.css?v=9553866106880806909';
  var link = document.createElement('link');
  link.rel = 'stylesheet'; 
  link.type = 'text/css';
  link.href = _stylesheeturl; 
  document.getElementsByTagName('HEAD')[0].appendChild(link); 
  //var _templatename = document.getElementById('_templatename').value;  
  //var _ShopCurrency = document.getElementById('ca_shop_currency').value;
  var _filterloadButton = document.createElement('button');
  _filterloadButton.id = 'ca_filter_loadbtn';
  _filterloadButton.style.marginBottom = '20px';
  _filterloadButton.style.backgroundColor = '#EAEAEA';
  _filterloadButton.style.border = 'none';
  _filterloadButton.style.color = '#000';
  _filterloadButton.style.textAlign = 'center';
  _filterloadButton.style.textDecoration = 'none';
  _filterloadButton.style.fontSize = '16px';
  _filterloadButton.style.height = '40px';
  _filterloadButton.style.lineHeight = '40px';
  _filterloadButton.style.verticalAlign = 'middle';
  _filterloadButton.style.minWidth = '150px';    
  _filterloadButton.className = 'ca_filter_loadbtn';
  _filterloadButton.innerHTML = '<svg style="vertical-align: middle;" id="ca_filter_svg" filtericons fill="none" height="28" viewBox="0 0 35 35" width="28" xmlns="http://www.w3.org/2000/svg"><path style="fill:{{ section.settings.FilterBoxIconColor }};" clip-rule="evenodd" d="M4.40675 7.25H3C2.44772 7.25 2 6.80228 2 6.25C2 5.69772 2.44772 5.25 3 5.25H4.40675C4.82853 3.94437 6.05398 3 7.5 3C8.94602 3 10.1715 3.94437 10.5933 5.25H25C25.5523 5.25 26 5.69772 26 6.25C26 6.80228 25.5523 7.25 25 7.25H10.5933C10.1715 8.55563 8.94602 9.5 7.5 9.5C6.05398 9.5 4.82853 8.55563 4.40675 7.25ZM5.75 6.25C5.75 5.2835 6.5335 4.5 7.5 4.5C8.4665 4.5 9.25 5.2835 9.25 6.25C9.25 7.2165 8.4665 8 7.5 8C6.5335 8 5.75 7.2165 5.75 6.25Z" fill="black" fill-rule="evenodd"/><path style="fill:{{ section.settings.FilterBoxIconColor }};" clip-rule="evenodd" d="M3 15.25H17.4458C17.8676 16.5556 19.093 17.5 20.5391 17.5C21.9851 17.5 23.2105 16.5556 23.6323 15.25H25C25.5523 15.25 26 14.8023 26 14.25C26 13.6977 25.5523 13.25 25 13.25H23.6323C23.2105 11.9444 21.9851 11 20.5391 11C19.093 11 17.8676 11.9444 17.4458 13.25H3C2.44772 13.25 2 13.6977 2 14.25C2 14.8023 2.44772 15.25 3 15.25ZM20.5391 12.5C19.5726 12.5 18.7891 13.2835 18.7891 14.25C18.7891 15.2165 19.5726 16 20.5391 16C21.5056 16 22.2891 15.2165 22.2891 14.25C22.2891 13.2835 21.5056 12.5 20.5391 12.5Z" fill="black" fill-rule="evenodd"/><path style="fill:{{ section.settings.FilterBoxIconColor }};" clip-rule="evenodd" d="M10.4067 23.25H3C2.44772 23.25 2 22.8023 2 22.25C2 21.6977 2.44772 21.25 3 21.25H10.4067C10.8285 19.9444 12.054 19 13.5 19C14.946 19 16.1715 19.9444 16.5933 21.25H25C25.5523 21.25 26 21.6977 26 22.25C26 22.8023 25.5523 23.25 25 23.25H16.5933C16.1715 24.5556 14.946 25.5 13.5 25.5C12.054 25.5 10.8285 24.5556 10.4067 23.25ZM11.75 22.25C11.75 21.2835 12.5335 20.5 13.5 20.5C14.4665 20.5 15.25 21.2835 15.25 22.25C15.25 23.2165 14.4665 24 13.5 24C12.5335 24 11.75 23.2165 11.75 22.25Z" fill="black" fill-rule="evenodd"/></svg>' + 
  '<span style="vertical-align: middle;" id="ca_filter_text">Filter Products</span>';
  console.log(window.collectiongridselector);
  //var _productGridElement = document.querySelectorAll('.grid-uniform.grid-link__container')[0];
  var _productGridElement = document.querySelectorAll(window.collectiongridselector)[0];
  var _filterloadbtn = document.getElementById('ca_filter_loadbtn');
  //console.log(_filterloadbtn);
  if(_templateName == 'search')
  {
    var _filterModal = document.createElement('div');
    _filterModal.id = 'mySidenav';
    _filterModal.style.display = 'none';
    _filterModal.style.width = "350px";
    _filterModal.style.zIndex = "500000";
    _filterModal.style.position = 'fixed';
    _filterModal.style.height = '100%';
    _filterModal.style.top = '0';
    _filterModal.style.left = '0';
    _filterModal.style.bottom = '0';
    _filterModal.style.backgroundColor = '#fff';
    document.body.appendChild(_filterModal);
    _productGridElement = document.querySelectorAll('.wrapper.main-content')[0];   

    _productGridElement.insertAdjacentHTML('beforebegin', _filterloadButton.outerHTML);
    var _filterloadbtn = document.getElementById('ca_filter_loadbtn');
    _filterloadbtn.style.display = 'block';
  }
  // Collection Page
  if(_templateName != 'search')
  {

    if(_filterPosition == 'VLeft')
    {

    }
    if(_filterPosition == 'VSideBar')
    {
      _productGridElement.insertAdjacentHTML('beforebegin', _filterloadButton.outerHTML);
      _filterloadbtn.style.display = 'block';
      var _filterDiv = document.getElementById('ca_filter_div');
      var _filterModal = document.createElement('div');
      _filterModal.id = 'mySidenav';
      _filterModal.style.display = 'none';
      _filterModal.style.width = "350px";
      _filterModal.style.zIndex = "500000";
      _filterModal.style.position = 'fixed';
      _filterModal.style.height = '100%';
      _filterModal.style.top = '0';
      _filterModal.style.left = '0';
      _filterModal.style.bottom = '0';
      document.body.appendChild(_filterModal);
      _filterloadbtn.onclick = function(event) {
        var _filterSideDiv = document.getElementById("mySidenav");    
        _filterSideDiv.style.display = 'block';
      }
    }
    var xhttprequest = new XMLHttpRequest();
    xhttprequest.onreadystatechange = function success() {
      if (!xhttprequest.responseXML) {
        return;
      }
      if (!xhttprequest.readyState === 4 || !xhttprequest.status === 200) {
        return;
      }
      var filterElement = xhttprequest.responseXML.querySelectorAll('#ca_filter_div')[0];
      //console.log(_filterPosition);
      if(_filterPosition == 'VLeft')
      {
        //console.log(filterElement.outerHTML);
        _productGridElement.insertAdjacentHTML('beforebegin', filterElement.outerHTML);
        filterElement.style.float = 'left';
        filterElement.style.width = '25%!important';
        filterElement.style.display = 'inline-block';
        _productGridElement.style.float = 'right';
        _productGridElement.style.width = '75%';
        _productGridElement.style.display = 'inline-block';
      }
      if(_filterPosition == 'VSideBar')
      {
        //_productGridElement.insertAdjacentHTML('beforeend', filterElement.outerHTML);
        var _filterSideDiv = document.getElementById("mySidenav");
        _filterSideDiv.insertAdjacentHTML('beforeend', filterElement.outerHTML);
        filterElement.style.height = '100%';
        _filterSideDiv.style.position = 'fixed';
        _filterSideDiv.style.top = '0px';
        _filterSideDiv.style.left = '0px';
        _filterSideDiv.style.bottom = '0px';
        _filterSideDiv.style.width = '300px';
        _filterSideDiv.style.zIndex = '5655555';
        //console.log(_filterSideDiv);
      }
      // Filter Div/Load Button Loading
    };
    console.log(window.collectionHandle);
    xhttprequest.open('GET', '/collections/' + _collectionhandle + '?fts=0&preview_theme_id=120385830978&view=cafiltersdivtemplate');
    xhttprequest.responseType = 'document';
    xhttprequest.send();
  }

  //console.log(_templateName);
  /*fetch('/collections/tops?section_id=collection-template')
  .then(response => response.text())
  .then(data => console.log(data));*/

  /*fetch('/collections/tops?filter.p.product_type=Plain Tops&view=cafilters')
  .then(response => response.text())
  .then(data => console.log(data));*/

  var _filterCollectionurl = '';
  function LoadFilterTemplate(collectionhandle)
  {
    var xhttprequest = new XMLHttpRequest();
    xhttprequest.onreadystatechange = function success() {
      if (!xhttprequest.responseXML) {
        return;
      }
      if (!xhttprequest.readyState === 4 || !xhttprequest.status === 200) {
        return;
      }
      var filterElement = xhttprequest.responseXML.querySelectorAll('#ca_filter_div')[0];
      //console.log(filterElement);
      //_productGridElement.insertAdjacentHTML('beforeend', filterElement.outerHTML);

      var _filterSideDiv = document.getElementById("mySidenav");
      _filterSideDiv.insertAdjacentHTML('beforeend', filterElement.outerHTML);
      filterElement.style.height = '100%';
      _filterSideDiv.style.position = 'fixed';
      _filterSideDiv.style.top = '0px';
      _filterSideDiv.style.left = '0px';
      _filterSideDiv.style.bottom = '0px';
      _filterSideDiv.style.width = '300px';
      _filterSideDiv.style.zIndex = '5655555';
      // console.log(_filterSideDiv);

      // Filter Div/Load Button Loading
    };
    xhttprequest.open('GET', '/collections/' + collectionhandle + '?view=cafiltersdivtemplate');
    xhttprequest.responseType = 'document';
    xhttprequest.send();
  }
  if(_templateName == 'search')
  {

    console.log(searchparams);
    var searchquery = searchparams[0].split('q=')[1];
    function handleResponse(response)
    {
      console.log(response);
    }

    // Detect if user is on IE browser
    /*var isIE = !!window.MSInputMethodContext && !!document.documentMode;

    if (isIE) {
      // Create Promise polyfill script tag
      var promiseScript = document.createElement("script");
      promiseScript.type = "text/javascript";
      promiseScript.src =
        "https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/dist/polyfill.min.js";

      // Create Fetch polyfill script tag
      var fetchScript = document.createElement("script");
      fetchScript.type = "text/javascript";
      fetchScript.src =
        "https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/dist/fetch.umd.min.js";

      // Add polyfills to head element
      document.head.appendChild(promiseScript);
      document.head.appendChild(fetchScript);

      // Wait for the polyfills to load and run the function. 
      // We could have done this differently, 
      // but I've found it to work well for my use-cases
      setTimeout(function () {
        window
        .fetch('/search?q=' + searchquery + '&view=cafilters')
        .then(response => {
        console.log(response.text());
      })
        .catch(error =>   {
        console.log('error');
      });
      }, 1000);
    } else {
      // If fetch is supported, just run the fetch function
      fetch('/search?q=' + searchquery + '&view=cafilters')
      .then(response => {
        console.log(response.text());
      })
      .catch(error =>   {
        console.log('error');
      });
    }*/
    var xhttprequestsearch = new XMLHttpRequest();
    xhttprequestsearch.onreadystatechange = function success() {
      if (!xhttprequestsearch.responseText) {
        return;
      }
      if (!xhttprequestsearch.readyState === 4 || !xhttprequestsearch.status === 200) {
        return;
      }   
      if (xhttprequestsearch.readyState === 4 && xhttprequestsearch.status === 200) {
        var _searchedcollectionhandles = xhttprequestsearch.responseText.split(',')[0];
        console.log(_searchedcollectionhandles);

        // Get Filter Values
        LoadFilterTemplate(_searchedcollectionhandles);
      }

    };
    xhttprequestsearch.open('GET', '/search?q=' + searchquery + '&view=cafilters');
    xhttprequestsearch.responseType = 'text';
    xhttprequestsearch.send();
  }

  // Apply Filters Function
  function ApplyFilter(_filterElement)
  {

    //var _filterElement = element.currentTarget;
    console.log(_filterElement);
    var _filterTypeName = _filterElement.getAttribute('ca_filtertypename');
    var filterstring = '';
    if(_filterTypeName == 'type')
    {
      filterstring = 'filter.p.product_type=';
    }
    var _selectedfilter = _filterElement.getAttribute('ca_filtervalue');
    var _urltoload = window.location.href + '?' + _filterTypeName + '=' + _selectedfilter;
    var _urlto_load = _filterElement.getAttribute('url_to_add');
    var _filter_active = _filterElement.getAttribute('filter_active');
    var _urlto_load = '/';

    //console.log(_filter_active);
    if(_filter_active == 'false')
    {
      _urlto_load = _filterElement.getAttribute('url_to_add');
    }
    else
    {
      _urlto_load = _filterElement.getAttribute('url_to_remove');
    }  
    function reverseChildNodes(node) {
      var parentNode = node.parentNode, nextSibling = node.nextSibling,
          frag = node.ownerDocument.createDocumentFragment();
      parentNode.removeChild(node);
      while(node.lastChild)
        frag.appendChild(node.lastChild);
      node.appendChild(frag);
      parentNode.insertBefore(node, nextSibling);
      return node;
    }
    _urlto_load = _urlto_load.replace('&view=cafiltersdivtemplate', '');
    _urlto_load = _urlto_load.replace('?view=cafiltersdivtemplate', '');
    window.location = _urlto_load;

  }





  // Click Filters Event
  document.addEventListener('click',function(e){
    var targetElement = e.target;
    if(e.target.className == 'ca-container cafiltercheckbox' || e.target.className == 'ca-checkmark'){
      //do something
      var _element = '';
      if(e.target.className == 'ca-checkmark')
      {
        _element = targetElement.parentElement;
        console.log(_element);
      }
      ApplyFilter(_element);
    }
  });

  var filterelements = document.querySelectorAll('.cafiltercheckbox');
  for(var i = 0; i < filterelements.length; i++) {
    filterelements[i].addEventListener('click', ApplyFilter, false);      
  }
  if(_templateName == 'collection' || _templateName == 'search')
  {
    // Modal JS
    !function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){var o=!1;function t(t){this.opts=function(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},t),this.init()}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}return t.prototype.init=function(){if(!this.modal)return function(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose");this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>',this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn);this.modal.appendChild(this.modalBox)}.call(this),function(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:function(t){var o=this.modal.offsetWidth-this.modal.clientWidth,e=t.clientX>=this.modal.offsetWidth-15,s=this.modal.scrollHeight!==this.modal.offsetHeight;if("MacIntel"===navigator.platform&&0==o&&e&&s)return;-1!==this.opts.closeMethods.indexOf("overlay")&&!function(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:function(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn);this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}.call(this),document.body.appendChild(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){o=t},t.prototype._isBusy=function(){return o},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),function(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn);this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.getSelection().removeAllRanges(),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),!1,"function"==typeof this.opts.beforeClose)if(!this.opts.beforeClose.call(this))return void this._busy(!1);document.body.classList.remove("tingle-enabled"),document.body.style.top=null,window.scrollTo({top:this._scrollPosition,behavior:"instant"}),this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return function(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?(this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this)),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){return window.innerHeight<=this.modalBox.clientHeight},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}});
    if(_templateName == 'collection')
    {
    }
  }
})();
