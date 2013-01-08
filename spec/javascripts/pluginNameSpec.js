
describe('PluginName', function() {
  var options;
  options = {
    message: 'Hello World'
  };
  beforeEach(function() {
    loadFixtures('fragment.html');
    return this.$element = $('#fixtures');
  });
  describe('plugin behavior', function() {
    it('should be available on the jQuery object', function() {
      return expect($.fn.pluginName).toBeDefined();
    });
    it('should be chainable', function() {
      return expect(this.$element.pluginName()).toBe(this.$element);
    });
    it('should offers default values', function() {
      var plugin;
      this.$element.pluginName();
      plugin = this.$element.data('plugin_pluginName');
      return expect(plugin._defaults).toBeDefined();
    });
    it('should overwrites the settings', function() {
      var plugin;
      this.$element.pluginName(options);
      plugin = this.$element.data('plugin_pluginName') ;
      return expect(plugin.options.message).toBe(options.message);
    });
  });
  describe('plugin functionality', function() {
    beforeEach(function() {
      this.$element.pluginName();
      return this.plugin = this.$element.data('plugin_pluginName');
    });
    it('should have a ready state', function() {
      return expect(this.plugin.getState()).toBe('ready');
    });
    it('should be updatable', function() {
      this.plugin.setState('new state');
      return expect(this.plugin.getState()).toBe('new state');
    });
    it('should expose public methods', function() {
      return expect(this.plugin.somePublicMethod).toBeDefined();      
    });
    it('should not expose private methods', function() {
      return expect(this.plugin.somePrivateMethod).toBeUndefined();      
    });
    it('should call a private method inside a public methods', function() {
      return expect(this.plugin.somePublicMethod()).toBe('this is a private method');
    });
  });
});
