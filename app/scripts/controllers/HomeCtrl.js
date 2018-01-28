(function() {
    function HomeCtrl(Room, Message, $uibModal) {

        var home = this;
        home.chatRoomArray = Room.all;

        home.openNewRoomDialog = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_dialog.html',
                controller: 'DialogCtrl',
                controllerAs: 'dialog'
            });
        };

        home.currentRoomId = undefined;

        home.setCurrentRoom = function(room) {
            home.messageArray = Message.getByRoomId(room.$id);
            console.log(room.$id);
            home.currentRoomId = room.$id;

        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal',HomeCtrl]);
})();