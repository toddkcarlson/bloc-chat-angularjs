(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {

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

        home.sendMessage = function() {
            var currentTime = "1:00pm";
            console.log($cookies.get("blocChatCurrentUser"));
            Message.send(home.message, home.currentRoomId, $cookies.get("blocChatCurrentUser"));
            home.message = "";
        }        

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal', '$cookies', HomeCtrl]);
})();