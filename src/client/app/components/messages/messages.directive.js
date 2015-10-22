(function() {
  'use strict';

  angular.module('app.components.messages')
  .directive('gsMessages', messagesDirective);

  function messagesDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/messages/messages.html',
      scope: {},
      controller: MessagesController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  MessagesController.$inject = ['dataservice'];

  function MessagesController(dataservice) {
    var vm = this;

    vm.activate = activate;
    vm.messageCount = 0;
    vm.title = 'Dashboard';

    function activate() {
      getMessageCount();
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function (data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }
  }

})();
