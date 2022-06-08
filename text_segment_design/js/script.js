$(document).ready(function () {
  data = [
    {
      start: "0",
      end: "8530",
      transcript: "রিপোর্ট ok",
    },
    {
      start: "9029",
      end: "9608",
      transcript: "ইত্যাদি ইত্যাদি done",
    },
    {
      start: "9776",
      end: "21641",
      transcript: "তাইলে উঠোলো বুঝতে হতো না nice",
    },
    {
      start: "9778",
      end: "21642",
      transcript: "তাইলে উঠোলো বুঝতে হতো না nice",
    },
    {
      start: "97799",
      end: "2164144",
      transcript: "তাইলে উঠোলো বুঝতে হতো না nice",
    }
  ];
  let cardContainer = $("#cardContainer");
  let selectedDiv;

  cardContainer.append(
    data.map((record) =>
      $(
        `<div class='col-md-3'><div class='card-div p-5'>${record.transcript}</div></div>`
      )
    )
  );

  $(".card-div").click(function () {
    $(this).attr("contenteditable", "true");
    $(this).focus();
    selectedDiv = $(this);
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 13) {
     selectedDiv.attr("contenteditable", "false")
    }
  });
});
