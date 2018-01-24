(function() {
    function HomeCtrl($uibModal) {

        var home = this;

        home.openNewRoomDialog = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_dialog.html',
                controller: 'DialogCtrl',
                controllerAs: 'dialog'
            });
        };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();