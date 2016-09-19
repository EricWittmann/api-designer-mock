
function selectResource() {
    $('#top-detail').hide();
    $('#resource-detail').show();
    $('.api-master-top').removeClass('active');
    $('#the-api-resource').addClass('active');
}

function selectTop() {
    $('#top-detail').show();
    $('#resource-detail').hide();
    $('.api-master-top').addClass('active');
    $('#the-api-resource').removeClass('active');
}

$(function() {
    $('#theme-toggle').click(function() {
        if ($('#api-editor').hasClass('light')) {
            $('#api-editor').removeClass('light');
            $('#api-editor').addClass('dark');
            $(this).text('Use Light Theme');
        } else {
            $('#api-editor').removeClass('dark');
            $('#api-editor').addClass('light');
            $(this).text('Use Dark Theme');
        }
    });
})
