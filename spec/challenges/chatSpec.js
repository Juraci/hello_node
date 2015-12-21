describe('Chat Emitter', function() {
    var chat = require('../../challenges/chat.js');

    it('should listen to a chat event', function(){
        spyOn(console, 'log');
        chat.emit('message', 'Test message');
        expect(console.log).toHaveBeenCalledWith('Test message');
    });
});
