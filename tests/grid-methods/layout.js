(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Grid methods - layout');

  QUnit.test('Muuri instance should have a layout method', function (assert) {
    assert.expect(1);
    assert.strictEqual(typeof Muuri.prototype.layout, 'function');
  });

})(this);