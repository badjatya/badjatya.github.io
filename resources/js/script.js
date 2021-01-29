// ABOUT SECTION TABS START
(() => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        
        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {

            const target = event.target.getAttribute("data-target");

            //deactivating existing active class
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            //activating new tab items
            event.target.classList.add("active","outer-shadow");

            //deactivating existing tab content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            //activating new tab content
            aboutSection.querySelector(target).classList.add("active");
        }
    })

}) ();
// ABOUT SECTION TABS END 