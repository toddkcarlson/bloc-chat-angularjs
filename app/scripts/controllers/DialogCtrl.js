(function() {
    function DialogCtrl(Room, $uibModalInstance) {
        var Dialog = this;

        dialog.chatRoomArray = Room;
        dialog.statusBar = "Enter a room name";

        modal.addData = function(){
            if(dialog.inputData){
                Room.addNewRoom(dialog.inputData);
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