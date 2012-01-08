(function ($) {
    brite.registerDao("Contact", new brite.dao.SimpleRelDao([], {}));
})(jQuery);

var contactApp =  {};
// --------- UI Workspace --------- //
(function($) {
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
    contactApp.Workspace = Workspace;

})(jQuery);
// --------- /UI Workspace --------- //

// --------- UI HeaderBar --------- //
(function ($) {
    function HeaderBar() {
    }

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
    contactApp.HeaderBar = HeaderBar;
})(jQuery);

(function ($) {

    // --------- UI ContactHome --------- //
    function ContactHome() {
    }
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
    contactApp.ContactHome = ContactHome;
})(jQuery);

(function ($) {

    // --------- UI ContactList --------- //
    function ContactList() {
    }


    ContactList.prototype.create = function (data, config) {
        console.log("create");
        var html;
        brite.dm.list("Contact").done(function(contactList) {
            console.log(contactList);
            html =    $("#tmpl-ContactList").render({contacts:contactList});
        });
        var $e = $(html);
        return $e;
    };

    ContactList.prototype.init = function (data, config) {

    };

    ContactList.prototype.postDisplay = function (data, config) {
         var $e = this.$element;

        var showContacts = function() {
            var html;
            brite.dm.list("Contact").done(function(contactList) {
                html =   $("#tmpl-ContactList-Part").render({contacts:contactList});

            });
            console.log("show contents");
            $e.find(".DataList").html(html);
        };

        showContacts();

         $e.delegate(".new","click",function(){
             $e.find("#CreateContact").html($("#tmpl-CreateContact").render());
             $e.find("#CreateContact input").focus();
             $e.find("#CreateContact").show();

         });

         $e.delegate("#CreateContact .save","click",function(){
             console.log("save");
             var name = $e.find("#CreateContact input").val();
             brite.dm.create("Contact", {name:name}).done(function() {
                     brite.display("ContactList")
                 });
             $e.find("#CreateContact").hide();
             showContacts();
         });

        $e.delegate(".star", "click", function(){
            $(this).toggleClass("on");
            return false;

        });
        $e.delegate("li", "click", function(){
            console.log("ul click");
            $e.find("li").removeClass("selected");
            $(this).toggleClass("selected");
            return false;
        });

        $e.delegate("li", "dblclick", function(){
            console.log("dblclick");
            var $li = $(this);
            $li.html($("#tmpl-EditContact").render());
            var name = $li.attr("data-obj_name");
            var id = $li.attr("data-obj_id");
            $li.find("input").val(name);
            $li.find("input").focus();

            $(this).delegate(".save", "click",function(){
                console.log("update")
                brite.dm.update("Contact",id, {name:$li.find("input").val()});
                showContacts();
            });
            $(this).delegate(".cancel", "click",function(){
                console.log("cancel")
                showContacts();
            });
            return false;
        });

        $e.delegate(".delete", "click", function() {
            console.log("delete");
            var id = $e.find("li.selected").attr("data-obj_id");
            console.log(id);
            brite.dm.remove("Contact", id).done(function() {
                showContacts();
            });
        });



    };
    // --------- /UI ContactList --------- //
    contactApp.ContactList = ContactList;
})(jQuery);

