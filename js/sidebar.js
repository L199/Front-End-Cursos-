$(".sub-menu a").click((event) => {
    $(event.target).parent().find("ul").slideToggle();
});