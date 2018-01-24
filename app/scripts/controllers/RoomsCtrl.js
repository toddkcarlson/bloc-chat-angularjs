(function() {
    function RoomsCtrl(Room) {
	    var home = this;
	    home.availableRooms =  Room;

        home.currentRoomId = undefined;

        home.setCurrentRoom = function(room) {
            home.messageArray = Message.getByRoomId(room.$id);
            console.log(room.$id);
            home.currentRoomId = room.$id;
        };

    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room',RoomsCtrl]);
})();