(function () {
    var links = document.querySelectorAll("a[href]");
    for (var link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        console.log(href)
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
})();

(function () {
    var languageTrigger = document.querySelector("#language-trigger");
    var elementsToTranslate = document.querySelectorAll("[data-lang]");
    var translations = [
        ['Strona główna', 'Home'],
        ['Produkty', 'Products'],
        ['Kontakt', 'Contact'],
        ['Tel', 'Phone'],
        ['Adres', 'Address'],
        ['Delikatesy Sródziemnomorskie', 'Mediterranean Deli'],
    ];

    function translate(language) {
        elementsToTranslate.forEach(function (element) {
            var foundTranslation = translations.find(function (translation) {
                var actualTranslation;
                if (language === 'eng') {
                    actualTranslation = translation[1];
                } else {
                    actualTranslation = translation[0];
                }

                return actualTranslation.toLowerCase() === element.innerText.toLowerCase()
            })

            if (language === 'eng') {
                element.innerText = foundTranslation[0]
            } else {
                element.innerText = foundTranslation[1]
            }
        });
    }

    languageTrigger.addEventListener("click", function (e) {
        e.preventDefault();

        if (languageTrigger.getAttribute('src').includes('eng')) {
            languageTrigger.setAttribute('src', './icons/polish-flag.svg');
            translate('pl');
        } else {
            languageTrigger.setAttribute('src', './icons/eng-flag.svg');
            translate('eng');
        }
    });
})();

function initMap() {
    var slowackiego = {lat: 54.3800396, lng: 18.585334};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15   , center: slowackiego});
    var marker = new google.maps.Marker({position: slowackiego, map: map});
}