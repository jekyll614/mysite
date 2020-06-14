window.addEventListener('load', (event) => {
  const news_info_wrap = document.querySelectorAll(".p-news__info-wrap")
  const news_note = document.querySelectorAll(".p-news__note")

  for (var i = 0; i < news_info_wrap.length; i++) {
    toggleclass(news_info_wrap[i], news_note[i])
  }

  function toggleclass(src, target) {
    src.addEventListener('click', event => {
      if (target.classList.contains("js-news--toggle")) {
        target.classList.remove("js-news--toggle")
      } else {
        target.classList.add("js-news--toggle")
      }
    });
  }
});