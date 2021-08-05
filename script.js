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
        ['Szeroki wybór wędlin pochodzących z różnych regionów Włoch. Od popularnego Prosciutto Crudo przez Mortadellę z pistacjami po Porchettę i wiele innych ...', 'A wide selection of cold cuts from different regions of Italy. From the popular Prosciutto Crudo to Mortadella with pistachios to Porchetta and many more ...'],
        ['Bogata gama win z Trydentu, Lombardii, Toskanii i nie tylko ...', 'A wide range of wines from Trento, Lombardy, Tuscany and more ...'],
        ['Skosztuj prawdziwych włoskich specjałów. Od serów górskich produkowanych z alpejskiego mleka po sery owcze z rozmaitymi dodatkami ...', 'Taste real Italian specialties. From mountain cheeses made from alpine milk to sheep\'s cheeses with a variety of toppings ...'],
        ['Poczuj smak i aromat gęstej, niefiltrowanej oliwy ...', 'Feel the taste and aroma of thick, unfiltered olive oil ...'],
        ['Sycyliskie pomarańcze, cytryna z wybrzeża Amalfi, pomidory datterino, papryki, bakłażany i cukinie. Wszystko świeże i niesamowicie pyszne ...', 'Sicilian oranges, lemon from the Amalfi coast, datterino tomatoes, peppers, eggplants and courgettes. Everything is fresh and amazingly delicious ...'],
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

                return actualTranslation.toLowerCase().replace(/\s/g, '') === element.innerText.toLowerCase().replace(/\s/g, '')
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