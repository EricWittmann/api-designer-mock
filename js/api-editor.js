
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
