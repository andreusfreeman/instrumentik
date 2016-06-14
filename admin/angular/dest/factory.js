app.factory('listCategory', function($http){
    var obj = {};
    obj.category = function(){
        return $http.get('http://127.0.0.1:8080/query/category.js?' + Math.random(100000000));
        }
    return obj;
});
app.factory('translitWords', function() {
  return {
    urlRusLat: function(str) {
      str = str.toLowerCase();
      var cyr2latChars = new Array(
        ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'],
        ['д', 'd'],  ['е', 'e'], ['ё', 'yo'], ['ж', 'zh'], ['з', 'z'],
        ['и', 'i'], ['й', 'y'], ['к', 'k'], ['л', 'l'],
        ['м', 'm'],  ['н', 'n'], ['о', 'o'], ['п', 'p'],  ['р', 'r'],
        ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'],
        ['х', 'h'],  ['ц', 'c'], ['ч', 'ch'],['ш', 'sh'], ['щ', 'shch'],
        ['ъ', ''],  ['ы', 'y'], ['ь', ''],  ['э', 'e'], ['ю', 'yu'], ['я', 'ya'],

        ['А', 'A'], ['Б', 'B'],  ['В', 'V'], ['Г', 'G'],
        ['Д', 'D'], ['Е', 'E'], ['Ё', 'YO'],  ['Ж', 'ZH'], ['З', 'Z'],
        ['И', 'I'], ['Й', 'Y'],  ['К', 'K'], ['Л', 'L'],
        ['М', 'M'], ['Н', 'N'], ['О', 'O'],  ['П', 'P'],  ['Р', 'R'],
        ['С', 'S'], ['Т', 'T'],  ['У', 'U'], ['Ф', 'F'],
        ['Х', 'H'], ['Ц', 'C'], ['Ч', 'CH'], ['Ш', 'SH'], ['Щ', 'SHCH'],
        ['Ъ', ''],  ['Ы', 'Y'],
        ['Ь', ''],
        ['Э', 'E'],
        ['Ю', 'YU'],
        ['Я', 'YA'],

        ['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'],
        ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'],
        ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['o', 'o'],
        ['p', 'p'], ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'],
        ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'],
        ['z', 'z'],

        ['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],['E', 'E'],
        ['F', 'F'],['G', 'G'],['H', 'H'],['I', 'I'],['J', 'J'],['K', 'K'],
        ['L', 'L'], ['M', 'M'], ['N', 'N'], ['O', 'O'],['P', 'P'],
        ['Q', 'Q'],['R', 'R'],['S', 'S'],['T', 'T'],['U', 'U'],['V', 'V'],
        ['W', 'W'], ['X', 'X'], ['Y', 'Y'], ['Z', 'Z'],

        [' ', '-'],['0', '0'],['1', '1'],['2', '2'],['3', '3'],
        ['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],
        ['-', '-'],[',', '-'],['/', '-']
      );
      var newStr = new String();
      for (var i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        var newCh = '';
        for (var j = 0; j < cyr2latChars.length; j++) {
          if (ch == cyr2latChars[j][0]) {
            newCh = cyr2latChars[j][1];
          }
        }
        newStr += newCh;
      }
      return newStr.replace(/[_]{2,}/gim, '_').replace(/\n/gim, '');
    }
  }
});
app.factory('textOnImage', function() {
  return {
    textOn: function(name) {
        var textImage = name;
        for(var i=0;i<document.getElementsByClassName("class_url").length;i+=3){
        var x=document.getElementsByClassName("class_url")[i].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 45px Arial, sans-serif';
        x.fillText(textImage, 100, 50);

          var x=document.getElementsByClassName("class_url")[i+1].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 20px Arial, sans-serif';
        x.fillText(textImage, 35, 50);

          var x=document.getElementsByClassName("class_url")[i+2].getContext("2d");
        x.globalAlpha = 0.2;
              x.rotate(Math.PI /5);
        x.font = 'bold 10px Arial, sans-serif';
        x.fillText(textImage, 20, 0);
        }
      }
  }
});
