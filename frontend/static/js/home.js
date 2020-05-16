
$(document).ready(function () {


    Sortable.create(column_list, {
        animation: 100,
        group: 'list-1',
        draggable: '.list-group-item',
        handle: '.list-group-item',
        sort: true,
        filter: '.sortable-disabled',
        chosenClass: 'active'
      });

    Sortable.create(devnull, {
        group: "list-1",
        onAdd: function (evt) {
          this.el.removeChild(evt.item);
        }
    });

    $('#add-column').click(function () {
        var $input = $("#column-name");
        var column_name = $input.val();
        if(column_name.length > 0)
        {
            $("#column_list").append(`<li class="list-group-item">${column_name}</li>`);
            $input.val("");
        }
    });

    $('#create_new_note_button').click(function () {
        $("#column_list").empty();
        $('#exampleModalCenteredScrollableTitle').text("Note name");
        $('#exampleModalCenteredScrollable').modal('show');
    });

});