
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

    function append_column_name()
    {
        var $input = $("#column-name");
        var column_name = $input.val();
        if(column_name.length > 0)
        {
            $("#column_list").append(`<li class="list-group-item text-break">${column_name}</li>`);
            $input.val("");
        }
    }

    $("#column-name").keyup(function(e){ 
        if(e.key ==="Enter")
        {
            append_column_name();
        }
    });

    $('#add-column').click(append_column_name);

    $('#create_new_note_button').click(function () {
        $("#column-name").val("");
        $("#column_list").empty();
        $('#exampleModalCenteredScrollableTitle').text("Note name");
        $('#exampleModalCenteredScrollable').modal('show');
    });

    function get_notes()
    {
        var get_notes_url = 'https://jrojer.pythonanywhere.com/get_notes';
        //var get_notes_url = 'http://127.0.0.1:5000/api/get_notes';
        $.ajax(get_notes_url,
        {
            success: function (data, status, xhr) {
                if(data.success)
                {
                    var $notes = $("#notes");
                    $notes.empty();
                    console.log(data);
                    data.notes.forEach(note => {
                        $notes.append(`<div class="col-md-4">
                                                <div class="card mb-4 shadow-sm">
                                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                                    <title>Placeholder</title>
                                                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                                                    dy=".3em">${note.name}</text>
                                                </svg>
                                                <div class="card-body">
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                                    content. This content is a little bit longer.</p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <small class="text-muted">${note.date_updated}</small>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>`
                    );
                });
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    $('#save_button').click(function () {
        //var request_url = 'http://127.0.0.1:5000/api/add_note';
        var request_url = 'https://jrojer.pythonanywhere.com/api/login';

        var data = {
            name:"",
            columns:[]
        };

        $("#column_list").children().each(function(i,x) { 
            data.columns.push(x.innerHTML);
        });

        data.name = $('#exampleModalCenteredScrollableTitle').text();

        if(data.columns.length > 0)
        {
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'json',
                url: request_url,
                success: function (e) {
                    console.log(e);
                    get_notes();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        $('#exampleModalCenteredScrollable').modal('hide');
    });

    get_notes();

});