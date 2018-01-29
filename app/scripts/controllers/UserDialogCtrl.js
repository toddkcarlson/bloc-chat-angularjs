(function() {
    function UserDialogCtrl($cookies, $uibModalInstance) {
        var userDialog = this;
        userDialog.statusBar = "This name will appear when you send messages";
        userDialog.setUsername = function() {
            if(userDialog.username){
              $cookies.put('blocChatCurrentUser', userDialog.username);
               $uibModalInstance.close()
               //window.location.reload(true);
            } else {
              alert("Username should not be empty!");
            }
        };
    };

    angular
        .module('blocChat')
        .controller('UserDialogCtrl', ['$cookies', '$uibModalInstance', UserDialogCtrl]);
})();