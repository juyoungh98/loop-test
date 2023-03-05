function Nam() {
  for (let i = 2; i >= 0; i--) {
    window.open(
      "https://www.google.com/search?q=%EC%A1%B0%EB%82%A8%EC%98%81&ei=1HoEZJ6iLs29hwP42bTYAQ&ved=0ahUKEwie3IPa1cT9AhXN3mEKHfgsDRsQ4dUDCA8&uact=5&oq=%EC%A1%B0%EB%82%A8%EC%98%81&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyAggmOgoIABBHENYEELADOgsILhCABBCxAxCDAToECAAQAzoLCAAQgAQQsQMQgwE6BQgAEIAEOgUILhCABDoICC4QgAQQsQM6CAgAEIAEELEDOgQIABBDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQ1AI6BAguEAM6CwguEIAEEMcBENEDOgcIABCABBAKOggILhCxAxCABDoRCC4QgAQQsQMQxwEQrwEQ1AJKBAhBGABQkg9Y2yhg6SpoC3ABeAGAAZQCiAGXGpIBBjEuMi4xM5gBAKABAbABAMgBCsABAQ&sclient=gws-wiz-serp",
      i,
      "_blank"
    );
  }
}

const namButton = document.getElementById("button");

namButton.addEventListener("click", () => {
  Nam();
});
