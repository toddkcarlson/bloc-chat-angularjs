(function() {
    function RoomsCtrl(Room) {
	    this.availableRooms =  Room;
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room',RoomsCtrl]);
})();