document.addEventListener('DOMContentLoaded', () => {
    initTyped();
    initNavigation();
    renderImages();
    renderSkills(skills, elRender);
    initModal();
    initImageVideoToggle(); // Added function to handle image/video toggle
});

const elRender = document.querySelector(".js-skills");
const elTemplate = document.querySelector(".js-template").content;

function initTyped() {
    new Typed(".typing", {
        strings: ["sementovoy tyagachi"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
}

function initNavigation() {
    const nav = document.querySelector(".nav");
    const navList = nav.querySelectorAll("li");
    const totalNavList = navList.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () {
            removeBackSection();

            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });
    }

    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    document.querySelector(".hire-me").addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });

    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
}

function renderImages() {
    const imageContainer = document.querySelector('#image-container');

    for (let i = 1; i <= 44; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `./assets/images/muslim${i}.jpg`;
        imgElement.alt = `Image ${i}`;
        imgElement.className = 'padd-15';
        imageContainer.appendChild(imgElement);
    }
}



function renderVideos() {
    const videoContainer = document.querySelector('#video-container');

    for (let i = 1; i <= 10; i++) {
        const videoElement = document.createElement('video');
        videoElement.src = `./assets/video/video${i}.mp4`; 
        videoElement.controls = true;
        videoElement.className = 'padd-15';
        videoContainer.appendChild(videoElement);
    }
}


function initModal() {
    const elRender = document.querySelector('.js-skills');

    elRender.addEventListener("click", (evt) => {
        evt.preventDefault();
        const dataId = evt.target.closest(".js-skills-wrapper").dataset.dataId;
        skills.forEach((item) => {
            if (Number(item.id) === Number(dataId)) {
                document.querySelector(".js-modal-img").src = item.img;
                document.querySelector(".js-modal-img").alt = item.title;
                document.querySelector(".js-modal-title").textContent = item.title;
                document.querySelector(".js-modal-desc").textContent = item.desc;

                document.querySelector(".js-modal").style.transform = "translateX(0)";
            }
        });
    });

    document.querySelector(".js-modal-close").addEventListener("click", (evt) => {
        evt.preventDefault();
        document.querySelector(".js-modal").style.transform = "translateX(100%)";
    });
}

function initImageVideoToggle() {
    const showImagesBtn = document.getElementById('show-images-btn');
    const showVideosBtn = document.getElementById('show-videos-btn');
    const imageContainer = document.getElementById('image-container');
    const videoContainer = document.getElementById('video-container');

    videoContainer.style.display = 'none';

    showImagesBtn.addEventListener('click', () => {
        imageContainer.style.display = 'block';
        videoContainer.style.display = 'none';
    });

    showVideosBtn.addEventListener('click', () => {
        videoContainer.style.display = 'block';
        imageContainer.style.display = 'none';
    });
}


document.getElementById("show-images-btn").addEventListener("click", function() {
  document.getElementById("image-container").style.display = "flex";
  document.getElementById("video-container").style.display = "none";
});

document.getElementById("show-videos-btn").addEventListener("click", function() {
  document.getElementById("video-container").style.display = "flex";
  document.getElementById("image-container").style.display = "none";
});

