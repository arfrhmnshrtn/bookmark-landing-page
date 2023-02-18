const humbergerMenu = document.querySelector(".humberger-menu");
const menu = document.querySelector(".nav-link ul");
const menuBookmark = document.querySelectorAll(".menu-bookmark ul li");
const contentFeatures = document.querySelector(".content-features");
const faq = document.querySelectorAll(".faq .question");
const answer = document.querySelectorAll(".faq .answer");

humbergerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

for (let i = 0; i <= menuBookmark.length - 1; i++) {
  menuBookmark[i].addEventListener("click", () => {
    if (i == 0) {
      contentFeatures.innerHTML = `<div class="img-feature">
                                        <img class="px-3 md:px-0" src="../src/images/illustration-features-tab-1.svg" alt="image-features-1">
                                    </div>
                                    <div
                                        class="title-feature px-3 mt-20 text-center md:text-start md:w-3/6 md:flex md:justify-center md:place-content-center md:flex-col md:pl-36 md:mt-0 ">
                                        <h1 class="font-medium text-xl mb-5 md:text-3xl">Bookmark In One Click</h1>
                                        <p class="opacity-60 ">organize your bookmarks giweaver you like. Our simple drag-and-drop interface
                                            gives you complite
                                            control over how you manage you favorite sites.</p>
                                        <div class="button mt-6">
                                            <a href="" class="bg-indigo-500 border-2 rounded border-indigo-500 px-7 py-3 text-white hover:bg-transparent hover:text-black">More Info</a>
                                        </div>
                                    </div>`;
    } else if (i == 1) {
      contentFeatures.innerHTML = `<div class="img-feature">
                                      <img class="px-3 md:px-0 w-full mx-auto" src="../src/images/illustration-features-tab-2.svg" alt="image-features-1">
                                  </div>
                                  <div
                                      class="title-feature px-3 mt-20 text-center md:text-start md:w-3/6 md:flex md:justify-center md:place-content-center md:flex-col md:pl-36 md:mt-0 ">
                                      <h1 class="font-medium text-xl mb-5 md:text-3xl">Intelligent Search</h1>
                                      <p class="opacity-60 ">Our powerful search feature will help you find saved sites in no time at all. No need to trawl thourh all of your bookmarks.</p>
                                      <div class="button mt-6">
                                          <a href="" class="bg-indigo-500 border-2 rounded border-indigo-500 px-7 py-3 text-white hover:bg-transparent hover:text-black">More Info</a>
                                      </div>
                                  </div>`;
    } else {
      contentFeatures.innerHTML = `<div class="img-feature">
                                      <img class="px-3 md:px-0 mx-auto" src="../src/images/illustration-features-tab-3.svg" alt="image-features-1">
                                  </div>
                                  <div
                                      class="title-feature px-3 mt-20 text-center md:text-start md:w-3/6 md:flex md:justify-center md:place-content-center md:flex-col md:pl-36 md:mt-0 ">
                                      <h1 class="font-medium text-xl mb-5 md:text-3xl">Share Your Bookmarks</h1>
                                      <p class="opacity-60 ">Easily share your bookmark and xollertions with others. Create a shareable link that you can send at the click of button. </p>
                                      <div class="button mt-6">
                                          <a href="" class="bg-indigo-500 border-2 border-indigo-500 rounded px-7 py-3 text-white hover:bg-transparent hover:text-black">More Info</a>
                                      </div>
                                  </div>`;
    }
  });
}

faq.forEach((el, a) => {
  el.addEventListener("click", (e) => {
    answer[a].classList.toggle("active");
  });
});
