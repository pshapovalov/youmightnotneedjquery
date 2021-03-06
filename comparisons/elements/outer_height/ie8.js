function outerHeight(el, includeMargin){
  var height = el.offsetHeight;

  if(includeMargin){
    var style = el.currentStyle || getComputedStyle(el);
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  } 
  return height;
}

outerHeight(el, true);
