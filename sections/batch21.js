$(function () {
    var itemsPerPage = 10; // Change this value to set default items per page

    var items = $(".accordion-item");
    var numItems = items.length;
    var numPages = Math.ceil(numItems / itemsPerPage);

    // Add pagination links
    for (var i = 1; i <= numPages; i++) {
        $("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>").appendTo("#pagination");
    }

    // Show first page by default
    items.slice(itemsPerPage).hide();

    // Handle pagination link clicks
    $("#pagination").on("click", ".page-link", function () {
        var page = $(this).text();
        var start = (page - 1) * itemsPerPage;
        var end = start + itemsPerPage;

        items.hide().slice(start, end).show();

        // Update active page link
        $("#pagination .active").removeClass("active");
        $(this).parent().addClass("active");
    });
});