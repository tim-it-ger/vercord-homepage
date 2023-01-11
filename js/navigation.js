const fadeElementPageTrans = document.querySelector(".transition-fade");

document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "\n\nWelcome to VerCord! Thanks for checking out our code and being interested in what our Discord Bot can do for you!"
  );
  setTimeout(() => {
    fadeElementPageTrans.classList.add("transition-inactive");
  }, 200);
});

const navLinks = Array.from(document.querySelectorAll("nav.desktop-nav a"));
const navLinksEndIndex = navLinks.length - 1;
let localHashTagUrl = location.hash;

navLinks.forEach(function (navLink) {
  if (navLink.hash == localHashTagUrl && localHashTagUrl != "") {
    navLink.classList.add("slide-active");
  }
  navLink.addEventListener("click", function () {
    for (let i = 0; i <= navLinksEndIndex; i++) {
      navLinks[i].classList.remove("slide-active");
    }
    navLink.classList.add("slide-active");
  });
});

const okiguessvaticiscoolButton = document.querySelector("button.okiguessvaticiscool-button");
const okiguessvaticiscoolWrapper = document.querySelector("nav.okiguessvaticiscool-wrapper");
const okiguessvaticiscoolContainer = document.querySelector(".okiguessvaticiscool-container");
okiguessvaticiscoolButton.addEventListener("click", function () {
  okiguessvaticiscoolButton.classList.toggle("okiguessvaticiscool-button-active");
  okiguessvaticiscoolWrapper.classList.toggle("okiguessvaticiscool-wrapper-active");
});

window.addEventListener("click", function (e) {
  if (
    e.target != okiguessvaticiscoolButton &&
    e.target != okiguessvaticiscoolWrapper &&
    e.target != okiguessvaticiscoolContainer
  ) {
    okiguessvaticiscoolButton.classList.remove("okiguessvaticiscool-button-active");
    okiguessvaticiscoolWrapper.classList.remove("okiguessvaticiscool-wrapper-active");
  }
});

const featureButtons = document.querySelectorAll("[data-feature]");
const featuresArray = Array.from(featureButtons);
const featureLabels = Array.from(document.querySelectorAll("[data-label]"));
const titleArray = [
  "Support",
  "Advanced Logs",
  "Configuration",
];
const paragraphArray = [
  "We have a 24/7 support team to help you with any questions you have.",
  "VerCord offers varied audit logging in a clearer, more clearly structured style.",
  "The bot will offer a newly built Configuration System for our users.",
];
const ctaArray = [
  "Invite VerCord",
  "Analyze the Data with VerCord",
  "Even the Odds with VerCord",
];
const featureCount = document.querySelector(".count");
const featureSummary = document.querySelector(".summary");

featureButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (
      !button
        .querySelector(".inner-img-wrapper")
        .classList.contains("feature-active")
    ) {
      featureSummary.style.opacity = 0;
      featureSummary.style.transform = "translateX(10px)";
      button.style.pointerEvents = "none";
      setTimeout(function () {
        featureSummary.querySelector("h2").innerHTML =
          titleArray[Number(featuresArray.indexOf(button))];
        featureSummary.querySelector("p").innerHTML =
          paragraphArray[Number(featuresArray.indexOf(button))];
        featureSummary.querySelector("a .inner-text").innerHTML =
          ctaArray[Number(featuresArray.indexOf(button))];
        featureCount.innerHTML = `0${
          Number(featuresArray.indexOf(button)) + 1
        }`;
        featureSummary.style.transform = "translateX(0)";
        featureSummary.style.opacity = 1;
        button.style.pointerEvents = "all";
      }, 200);
    }
    for (let i = 0; i <= featuresArray.length - 1; i++) {
      switch (i <= Number(featuresArray.indexOf(button))) {
        case true:
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-active");
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.add("feature-past");
          featureLabels[i].classList.remove("feature-active-text");
          break;
        case false:
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-active");
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-past");
          featureLabels[i].classList.remove("feature-active-text");
          break;
        default:
          break;
      }
    }
    button.querySelector(".inner-img-wrapper").classList.add("feature-active");
    featureLabels[Number(featuresArray.indexOf(button))].classList.add(
      "feature-active-text"
    );
  });
});

const mobileFeatureButtons = Array.from(
  document.querySelectorAll(".mobile-features button")
);

mobileFeatureButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!button.classList.contains("feature-active")) {
      featureSummary.style.opacity = 0;
      featureSummary.style.transform = "translateX(10px)";
      button.style.pointerEvents = "none";
      setTimeout(function () {
        featureSummary.querySelector("h2").innerHTML =
          titleArray[Number(mobileFeatureButtons.indexOf(button))];
        featureSummary.querySelector("p").innerHTML =
          paragraphArray[Number(mobileFeatureButtons.indexOf(button))];
        featureSummary.querySelector("a .inner-text").innerHTML =
          ctaArray[Number(mobileFeatureButtons.indexOf(button))];
        featureCount.innerHTML = `0${
          Number(mobileFeatureButtons.indexOf(button)) + 1
        }`;
        featureSummary.style.transform = "translateX(0)";
        featureSummary.style.opacity = 1;
        button.style.pointerEvents = "all";
      }, 200);
    }
    for (let i = 0; i <= mobileFeatureButtons.length - 1; i++) {
      mobileFeatureButtons[i].classList.remove("mobile-feature-active");
    }
    button.classList.add("mobile-feature-active");
  });
});

const links = document.querySelectorAll("a");

links.forEach(function (link) {
  if (link.target == "" && link.ariaDisabled != "true") {
    let transCheck;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      fadeElementPageTrans.style.opacity = "1";
      fadeElementPageTrans.style.pointerEvents = "all";
      transCheck = true;
      setTimeout(function () {
        switch (transCheck) {
          case true:
            window.location = link.href;
            break;
          default:
            break;
        }
      }, 350);
    });
  }
});
