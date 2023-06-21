$(document).ready(function () {
  var panelOne = $(".form-panel.two").height();
  var panelTwo = 0;

  // Check if the element exists before accessing its scrollHeight
  var formPanelTwo = $(".form-panel.two")[0];
  if (formPanelTwo) {
    panelTwo = formPanelTwo.scrollHeight;
  }

  $(".form-panel.two")
    .not(".form-panel.two.active")
    .on("click", function (e) {
      e.preventDefault();

      $(".form-toggle").addClass("visible");
      $(".form-panel.one").addClass("hidden");
      $(".form-panel.two").addClass("active");
      $(".form").animate(
        {
          height: panelTwo,
        },
        200
      );
    });

  $(".form-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).removeClass("visible");
    $(".form-panel.one").removeClass("hidden");
    $(".form-panel.two").removeClass("active");
    $(".form").animate(
      {
        height: panelOne,
      },
      200
    );
  });
});
