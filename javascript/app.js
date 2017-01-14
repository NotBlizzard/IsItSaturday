$(document).ready(() => {
  const time = new Date();
  if (time.getUTCDay() === 6) {
    $('#isItSaturday').text("YES");
  } else {
    $('#isItSaturday').text("NO");
  }
});
