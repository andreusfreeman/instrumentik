$(function(){
  $('.add__things__common').addClass('active');
  $('.add__things__menu li:first').css('background-color','#84bffa')
  $('.add__things__add, .add__things__image, .add__things__same, .add__things__meta').hide();

  $('.add__things__menu a').on('click', function(){
    $('.add__things__menu li').css('background-color','#e9e9e9');
    $(this).parents('.add__things__menu li').css('background-color','#84bffa');
    var divName = $(this).attr('href');
    $('.add__things__common, .add__things__add, .add__things__image, .add__things__same, .add__things__meta').hide();
    $('.'+divName).show();
    return false;
  })
});

function deleteImg(event){
  var list = document.querySelector(".add__things__image-sortable");
  var nameImage = event.parentNode.parentNode.getElementsByTagName("img");
  if (nameImage.length>1){
    for(var i = 1; i < 4;i++){
    	deleteImage(nameImage[i].src);
  }
    list.removeChild(event.parentNode.parentNode);
  }
  else {
    list.removeChild(event.parentNode.parentNode);
  }
};

var width = 320;
function taskQueue(capacity) {
  var running = 0;
  var queue = [];
  function release() {
    if (queue.length) {
      var task = queue.shift();
      task(release);
    } else {
      running -= 1;
    }
  }
  return function(task) {
    if (running < capacity) {
      running += 1;
      task(release);
    } else {
      queue.push(task);
    }
  };
}
function protect(img) {
  var ratio = img.width / img.height;
  var maxSquare = 5000000;  // ios max canvas square
  var maxSize = 4096;  // ie max canvas dimensions
  var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
  var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
  if (maxW > maxSize) {
    maxW = maxSize;
    maxH = Math.round(maxW / ratio);
  }
  if (maxH > maxSize) {
    maxH = maxSize;
    maxW = Math.round(ratio * maxH);
  }
  if (img.width > maxW) {
    var canvas = document.createElement('canvas');
    canvas.width = maxW;
    canvas.height = maxH;
    canvas.getContext('2d').drawImage(img, 0, 0, maxW, maxH);
    img.src = 'about:blank';
    img.width = 1;
    img.height = 1;
    img = canvas;
  }
  return img;
}
function resize(img, w,  h, className, id) {
  var df = $.Deferred();
  setTimeout(function(){
    img = protect(img);
    console.log(img.width, img.height);
    var steps = Math.ceil(Math.log(img.width / w) / Math.LN2);
    var sW = w * Math.pow(2, steps - 1);
    var sH = h * Math.pow(2, steps - 1);
    var x = 2;
    function run() {
      if ( ! (steps--)) {
        df.resolve(img);
        return;
      }
      setTimeout(function() {
        console.log(sW, sH);
        var canvas = document.createElement('canvas');
        canvas.width = sW;
        canvas.height = sH;
        canvas.getContext('2d').drawImage(img, 0, 0, sW, sH);
        img.src = 'about:blank';
        canvas.className = className;
        canvas.id = id;
        img.width = 1;
        img.height = 1;
        img = canvas;
        sW = Math.round(sW / x);
        sH = Math.round(sH / x);
        run();
      }, 0);
    }
    run();
  }, 0);
  return df.promise();
}
function imageLoader(src) {
  var df = $.Deferred();
  var img = new Image();
  img.onload = function() {
    df.resolve(img);
  };
  img.onerror = function() {
    df.reject(img);
  };
  img.src = src;
  return df.promise();
}
var resizeQueue = taskQueue(1);
function resizeFile(file, width) {
  var df = $.Deferred();
  resizeQueue(function(release) {
    df.always(release);
    var op = imageLoader(URL.createObjectURL(file));
    op.done(function(img) {
    if(img.width <= width){
        width = img.width - 5;
      }
      var height = Math.round(width * img.height / img.width);
    var className = "class_url";
    var id = "image_instrumentik_biz"+Math.floor((Math.random() * 1000000) + 1);
      resize(img, width, height, className, id).done(df.resolve);
    });
    op.fail(df.reject);
    op.always(function(img) {
      URL.revokeObjectURL(img.src);
    });
  });
  return df.promise();
}
$('#file').on('change', function() {
  $.each($('#file').prop('files'), function(i, file) {
    resizeFile(file, 450).done(function(canvas) {
      resizeFile(file, 200).done(function(canvas1) {
        resizeFile(file, 100).done(function(canvas2) {
          $('.add__things__image-sortable').append(
            $("<li/>").attr("style","position:relative").append($("<div/>").attr("style","position: absolute;top:5px;right:5px;").append("<img src='http://instrumentik.biz/image/close_basket.png' onclick='deleteImg(this)' width='25px' style='cursor:pointer' title='Удалить'>"),canvas1, $("<ul/>").append($("<li/>").attr("style","display:none").append(canvas, canvas2)))
            );
          });
        });
      });
   });
});

function deleteConditionPosition(tempCondition){
  tempCondition.parentNode.parentNode.removeChild(tempCondition.parentNode);
};
function deleteAdditionPosition(addBlock){
   addBlock.parentNode.parentNode.removeChild(addBlock.parentNode);
 }
