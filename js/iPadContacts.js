(function ($) {
    brite.registerDao("Contact", new brite.dao.SimpleRelDao([], {}));
})(jQuery);

contact =  {};

(function($) {

    // --------- UI Workspace --------- //
    function Workspace() { };
    Workspace.prototype.create = function(data,config){
        var html = $("#tmpl-Workspace").render();
        var $e = $(html);
        return $e;
    };

    Workspace.prototype.init = function(data,config){

    };

    Workspace.prototype.postDisplay = function(data,config){
        brite.display("HeaderBar");
        brite.display("ContactList");
        brite.display("ContactHome");

    };
    contact.Workspace = Workspace;
    // --------- /UI Workspace --------- //
})(jQuery);

(function ($) {
    // --------- UI HeaderBar --------- //
    function HeaderBar() {
    }

    ;
    HeaderBar.prototype.create = function (data, config) {
        var html = $("#tmpl-HeaderBar").render();
        var $e = $(html);
        return $e;
    };

    HeaderBar.prototype.init = function (data, config) {

    };

    HeaderBar.prototype.postDisplay = function (data, config) {

    };
    // --------- /UI HeaderBar --------- //
    contact.HeaderBar = HeaderBar;
})(jQuery);

(function ($) {

    // --------- UI ContactHome --------- //
    function ContactHome() {
    }

    ;
    ContactHome.prototype.create = function (data, config) {
        var html = $("#tmpl-ContactHome").render();
        var $e = $(html);
        return $e;
    };

    ContactHome.prototype.init = function (data, config) {

    };

    ContactHome.prototype.postDisplay = function (data, config) {

    };
    // --------- /UI ContactHome --------- //
    contact.ContactHome = ContactHome;
})(jQuery);

(function ($) {

    // --------- UI ContactList --------- //
    function ContactList() {
    }
    ContactList.prototype.create = function (data, config) {
        var data = [
            {name:"test",id:1},
            {name:"test",id:2},
            {name:"test",id:3},
            {name:"test",id:4},
            {name:"test",id:5}
        ];
//        var html =  brite.dm.list("Contacts").done(function(contactList) {
//            return   $("#tmpl-ContactList").render(contacts:contactList);
//
//        });
        var html = $("#tmpl-ContactList").render({contacts: data});
        var $e = $(html);
        return $e;
    };

    ContactList.prototype.init = function (data, config) {

    };

    ContactList.prototype.postDisplay = function (data, config) {

    };
    // --------- /UI ContactList --------- //
    contact.ContactList = ContactList;
})(jQuery);

