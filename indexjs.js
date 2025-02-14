$(document).ready(function(){
    $("#toggleTheme").click(function(){
        $("body").toggleClass("dark-mode");
    });
});

// Dark mode styles
$('head').append(`
    <style>
    .dark-mode {
        background-color: #1a202c;
        color: #f7fafc;
    }
    .dark-mode .resume {
        background-color: #2d3748;
    }
    .dark-mode h1, .dark-mode h2 {
        color: #90cdf4;
    }
    .dark-mode .icons a {
        color: #90cdf4;
    }
    .dark-mode #toggleTheme {
        background-color: #90cdf4;
        color: #1a202c;
    }
    </style>
`);
