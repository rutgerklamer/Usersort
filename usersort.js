let sorted_array = [];

var TYPE = {
    ASCENDING: { value: 0 },
    DESCENDING: { value: 1 },
};
var type = TYPE.ASCENDING;

function sort(arr, t) {
    type = t;
    sorted_array = arr;
    $("body").append("<ul id='sortable'></ul>")
    for (let i = 0; i < sorted_array.length; i++)
        $("#sortable").append("<li><span></span>" + sorted_array[i] + "</li>");
    $("#sortable").sortable()
    $("#sortable").disableSelection();
    $("#sortable").mouseup(function () {
        setTimeout(function () {
            let l = 0;
            $('#sortable').children().each(function () {
                sorted_array[l] = this.innerText;
                l++;
            });
        }, 100);
    });
};

function get_sorted()
{
    return sorted_array;
}

function is_sorted()
{
    let succes = true;;
    if (type.value == 1) {
        let prev = parseInt(sorted_array[0]);
        for (let i = 0; i < sorted_array.length; i++) {
            if (parseInt(sorted_array[i]) > prev) {
                succes = false;
            }
            prev = sorted_array[i];
        }
    } else if (type.value == 0) {
        let prev = parseInt(sorted_array[0]);
        for (let i = 0; i < sorted_array.length; i++) {
            if (parseInt(sorted_array[i]) < prev) {
                succes = false;
            }
            prev = sorted_array[i];
        }
    }
    return succes;
}
