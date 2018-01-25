(function() {
    function DialogCtrl(Room, $uibModalInstance) {
        var dialog = this;

        dialog.chatRoomArray = Room;
        dialog.statusBar = "Enter a room name";

        dialog.addData = function(){
            if(dialog.inputData){
                Room.add(dialog.inputData);
                dialog.cancel();
            } else {
                alert("Room name should not be empty.");
            }
        };

        dialog.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };


    };

    angular
        .module('blocChat')
        .controller('DialogCtrl', ['Room', '$uibModalInstance', DialogCtrl]);
})();