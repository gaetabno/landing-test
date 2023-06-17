
		// <!-- ****************************************************-->
// <!-- Floating labels for forms  -->
// <!-- ****************************************************-->
require(['jquery'], function($) {
  $('.form-control').on('input', function() {
    var $field = $(this).closest('.field-wrapper')
    if (this.value) {
      $field.addClass('field-label-visible')
    } else {
      $field.removeClass('field-label-visible')
    }
  })
})

//GLOBAL VARIABLES
var promoActive = 0;
var pixelRatio = window.devicePixelRatio;
var screenWidth = screen.width;
var okStyle = "border:1px solid #ccc;background-color:#fff;";
var koStyle = "border:1px solid red;background-color:#ffcaca;";
var formControl = {
    "tempDate": "0",
    "emailField": "0",
    "legalFlag": "0"
};
var currentCountry = "";
var currentLanguage = document.querySelector('meta[name="locale"]').getAttribute('content').split('_')[0];
var storeId = document.querySelector('meta[name="storeId"]').getAttribute('content');
//SETS STORE AND SOURCE PARAMETERS
var setData = function () {
    document.getElementById("storeIdField").value = storeId;
    document.getElementById("sourceField").value = storeId;
    if (promoActive == 0) {
        document.getElementById("campaignField").value = "SS22_Vectiv_LP";
    } else {
        document.getElementById("campaignField").value = "SS22_Vectiv_LP";
    }
    if (screenWidth > 639) {
        document.getElementById("campaignField").value += "_Desktop";
    } else {
        document.getElementById("campaignField").value += "_Mobile";
    }
    document.getElementById("storeBrandField").value = "TNF";
    document.getElementById("storeCountryField").value = currentCountry.toUpperCase();
    document.getElementById("currentLanguageField").value = currentLanguage.toUpperCase();
    document.getElementById("subscribeChannelField").value = "E-COMM";
    document.getElementById("subscribeSourceField").value = "webForm";
    document.getElementById("newsletterSubscription").value = "true";
    document.getElementById("newsletterDoubleOptin").value = "true";
}
//DETECTS CURRENT COUNTRY BASED ON CURRENT URL
var getCountry = function () {
    var currentHost = document.location.host.split(".").pop();
    var specialDomains = /^(eu|com|uk)$/;
    if (currentHost.match(specialDomains)) {
        switch (storeId) {
            case "7005":
                currentCountry = "gb";
                break;
            case "7011":
                currentCountry = "at";
                break;
            case "7014":
                currentCountry = "be";
                break;
            case "7015":
                currentCountry = "dk";
                break;
            case "7016":
                currentCountry = "fi";
                break;
            case "7017":
                currentCountry = "lu";
        }
    } else {
        currentCountry = currentHost;
    }
    setData();
    setLabels();
}
//SETS THE CORRECT LABELS FOR THE CURRENT LANGUAGE
var setLabels = function () {
    var formLabels = [];
    var promoLabels = [];
    switch (currentLanguage) {
        case "en":
            formLabels = [
                {
                    "formTitle": "Get £10 signup gift for your order over £100",
                    "nameLabel": "First Name",
                    "lastnameLabel": "Last Name",
                    "emailLabel": "Email address*",
                    "dateLabel": "Date of birth (DD/MM/YYYY)",
                    "interestLabel": "Your favourite activity",
                    "defaultLabel": "Select an activity",
                    "activityLabel1": "Hiking",
                    "activityLabel2": "Training",
                    "activityLabel3": "Running",
                    "activityLabel4": "Mountaineering",
                    "activityLabel5": "Ski and Snowboard",
                    "privacyCopy": "I acknowledge I have read and understood The North Face<sup>&reg;</sup> Privacy Policy and I consent to the processing of my personal data for marketing and profiling purposes.",
                    "genderDisclaimer": "By clicking on one of the below buttons, I subscribe to the newsletter",
                    "privacyLink": "Access The North Face<sup>&reg;</sup> Privacy Policy here",
                    "menButton": "Men",
                    "womenButton": "Women",
                    "okMessage": "Thank you for Signing up!",
                    "bookMessage": "",
                    "preorderMessage": "",
                    "koMessage": "Sorry, this address already exists. Please try a new one.",
                    "opsMessage": "Something went wrong, please try again later.",
                    "block1": "Get a gift for your next purchase",
                    "block2": "Stay updated on our athletes’ exploits",
                    "block3": "Exclusives, events, and product info"
                }];
            switch (currentCountry) {
                case "gb":
                    promoLabels = [
                        {
                            "promoTitle": "Get £10 signup gift for your order over £100",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!<br />Check your Welcome Email and find your exclusive promocode inside."
                        }];
                    break;
                case "ie":
                    promoLabels = [
                        {
                            "promoTitle": "Get 10 € signup gift for your order over 100 €",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!"
                        }];
                    break;
                case "fi":
                	promoLabels = [
                        {
                            "promoTitle": "Get 10 € signup gift for your order over 100 €",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!"
                        }];
                    break;
                case "lu":
                    promoLabels = [
                        {
                            "promoTitle": "Get 10 € signup gift for your order over 100 €",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!"
                        }];
                    break;
                case "se":
                    promoLabels = [
                        {
                            "promoTitle": "Get 100 Kr signup gift for your order over 1140 Kr",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!"
                        }];
                    break;
                case "dk":
                    promoLabels = [
                        {
                            "promoTitle": "Get 75 Kr signup gift for your order over 745 Kr",
                            "promoSubTitle": "Check your Welcome Email and find your exclusive promocode inside.",
                            "okMessage": "Thank you for Signing up!"
                        }];
            }
            break;
        case "it":
            formLabels = [
                {
                    "formTitle": "Ricevi 10€ come regalo di benvenuto sul primo ordine oltre 100€",
                    "nameLabel": "Nome",
                    "lastnameLabel": "Cognome",
                    "emailLabel": "Indirizzo email*",
                    "dateLabel": "Data di nascita (DD/MM/YYYY)",
                    "interestLabel": "Attività preferita",
                    "defaultLabel": "Seleziona una attività",
                    "activityLabel1": "Hiking",
                    "activityLabel2": "Allenamento",
                    "activityLabel3": "Corsa",
                    "activityLabel4": "Alpinismo",
                    "activityLabel5": "Sci e Snowboard",
                    "privacyCopy": "Confermo di aver letto e compreso la Dichiarazione sulla privacy di The North Face e acconsento al trattamento dei miei dati personali a scopi di marketing ed elaborazione di profili.",
                    "genderDisclaimer": "Facendo clic su uno dei pulsanti di seguito effettuo la registrazione alla newsletter",
                    "privacyLink": "Visualizza le informazioni sulla privacy",
                    "menButton": "Uomo",
                    "womenButton": "Donna",
                    "okMessage": "Grazie per la tua iscrizione",
                    "koMessage": "Questa email esiste già",
                    "opsMessage": "Qualcosa e' andato storto. Prova piu' tardi.",
                    "block1": "Ricevi un regalo col tuo prossimo acquisto",
                    "block2": "Non perderti gli exploit dei nostri atleti",
                    "block3": "Esclusive, eventi e anteprime sul lancio di nuovi prodotti"
                }];
            switch (currentCountry) {
                case "it":
                    promoLabels = [
                        {
                            "promoTitle": "Ricevi 10€ come regalo di benvenuto sul primo ordine oltre 100€",
                            "promoSubTitle": "Controlla la tua e-mail di benvenuto: all'interno troverai il tuo codice promozionale esclusivo."
                        }];
                    break;
                case "ch":
                    promoLabels = [
                        {
                            "promoTitle": "Ricevi CHF 10 come regalo di benvenuto sul primo ordine oltre CHF 110",
                            "promoSubTitle": "Controlla la tua e-mail di benvenuto: all'interno troverai il tuo codice promozionale esclusivo."
                        }];
            }
            break;
        case "de":
            formLabels = [
                {
                    "formTitle": "Willkommensgeschenk von 10 € ab 120 € Bestellwert",
                    "nameLabel": "Vorname",
                    "lastnameLabel": "Nachname",
                    "emailLabel": "E-Mail*",
                    "dateLabel": "Geburtsdatum (DD/MM/YYYY)",
                    "interestLabel": "Deine favorisierte Aktivität",
                    "defaultLabel": "Wähle eine Aktivität",
                    "activityLabel1": "Hiking",
                    "activityLabel2": "Wandern",
                    "activityLabel3": "Running",
                    "activityLabel4": "Bergsteigen",
                    "activityLabel5": "Ski und Snowboard",
                    "privacyCopy": "Ich bestätige, dass ich die Datenschutzrichtlinie von The North Face gelesen und verstanden habe und erkläre mich mit der Verarbeitung meiner personenbezogenen Daten zu Marketing- und Profilbildungszwecken einverstanden.",
                    "genderDisclaimer": "Durch Anklicken eines der nachfolgenden Buttons abonniere ich den Newsletter.",
                    "privacyLink": "Zu den Datenschutzbestimmungen",
                    "menButton": "Mann",
                    "womenButton": "Frau",
                    "okMessage": "Danke für deine Anmeldung",
                    "koMessage": "Diese Emailadresse gibt es bereits, bitte versuche es mit einer anderen",
                    "opsMessage": "Etwas ist schief gegangen, bitte versuche es später nochmal",
                    "block1": "Geschenk für deinen nächsten Einkauf",
                    "block2": "Updates zu unseren Sportlern",
                    "block3": "Exklusive Aktionen, Events und Insider-Infos zu neuen Produkten"
                }];
            switch (currentCountry) {
                case "de":
                    promoLabels = [
                        {
                            "promoTitle": "Willkommensgeschenk von 10 € ab 120 € Bestellwert",
                            "promoSubTitle": "Nach deiner Anmeldung bekommst du von uns eine E-Mail mit deinem exklusiven Promo-Code."
                        }];
                    break;
                case "at":
                    promoLabels = [
                        {
                            "promoTitle": "Willkommensgeschenk von 10 € ab 120 € Bestellwert",
                            "promoSubTitle": "Nach deiner Anmeldung bekommst du von uns eine E-Mail mit deinem exklusiven Promo-Code."
                        }];
                    break;
                case "lu":
                    promoLabels = [
                        {
                            "promoTitle": "Willkommensgeschenk von 10 € ab 120 € Bestellwert",
                            "promoSubTitle": "Nach deiner Anmeldung bekommst du von uns eine E-Mail mit deinem exklusiven Promo-Code."
                        }];
                    break;
                case "ch":
                    promoLabels = [
                        {
                            "promoTitle": "Willkommensgeschenk von CHF 10 ab CHF 110 Bestellwert",
                            "promoSubTitle": "Nach deiner Anmeldung bekommst du von uns eine E-Mail mit deinem exklusiven Promo-Code."
                        }];
            }
            break;
        case "fr":
            var formLabels = [
                {
                    "formTitle": "10 € offertes à l'inscription pour toute commande supérieure à 100 €",
                    "nameLabel": "Nom",
                    "lastnameLabel": "Prénom",
                    "emailLabel": "E-Mail*",
                    "dateLabel": "Date de naissance (DD/MM/YYYY)",
                    "interestLabel": "Votre activité favorite",
                    "defaultLabel": "Sélectionnez une activité",
                    "activityLabel1": "Randonnée",
                    "activityLabel2": "Entraînement",
                    "activityLabel3": "Running",
                    "activityLabel4": "Alpinisme",
                    "activityLabel5": "Ski et Snowboard",
                    "privacyCopy": "Je confirme avoir lu et compris la politique de confidentialité de la marque The North Face concernant le traitement de mes données personnelles à des fins promotionnelles et de profilage.",
                    "genderDisclaimer": "Je m'abonne à la newsletter en cliquant sur l'un des boutons ci-dessous",
                    "privacyLink": "Accéder à la politique de confidentialité de The North Face",
                    "menButton": "Homme",
                    "womenButton": "Femme",
                    "okMessage": "Merci pour votre inscription",
                    "koMessage": "Désolé, cet email existe deja, veuillez entrer un autre email",
                    "opsMessage": "Une erreur est survenue, réessayez plus tard",
                    "block1": "Recevez un cadeau avec votre prochain achat",
                    "block2": "Restez au fait des exploits de nos sportifs",
                    "block3": "Infos privilégiées sur les exclusivités, événements et lancements de produits"
                }];
            switch (currentCountry) {
                case "fr":
                    promoLabels = [
                        {
                            "promoTitle": "10 € offertes à l'inscription pour toute commande supérieure à 100 €",
                            "promoSubTitle": "Consultez votre e-mail de bienvenue : il renferme votre code promo exclusif."
                        }];
                    break;
                case "be":
                    promoLabels = [
                        {
                            "promoTitle": "10 € offertes à l'inscription pour toute commande supérieure à 100 €",
                            "promoSubTitle": "Consultez votre e-mail de bienvenue : il renferme votre code promo exclusif."
                        }];
                    break;
                case "ch":
                    promoLabels = [
                        {
                            "promoTitle": "CHF 10 offertes à l'inscription pour toute commande supérieure à CHF 110",
                            "promoSubTitle": "Consultez votre e-mail de bienvenue : il renferme votre code promo exclusif."
                        }];
            }
            break;
        case "nl":
            var formLabels = [
                {
                    "formTitle": "Krijg bij registratie € 10 korting op bestellingen boven de € 100",
                    "nameLabel": "Voornaam",
                    "lastnameLabel": "Achternaam",
                    "emailLabel": "E-mailadres*",
                    "dateLabel": "Geboortedatum (DD/MM/YYYY)",
                    "interestLabel": "Uw favoriete activiteit",
                    "defaultLabel": "Kies een aktiviteit",
                    "activityLabel1": "Wandelen",
                    "activityLabel2": "Trainen",
                    "activityLabel3": "Hardlopen",
                    "activityLabel4": "Bergbeklimmen",
                    "activityLabel5": "Skiën en Snowboarden",
                    "privacyCopy": "Ik bevestig dat ik het privacybeleid van The North Face heb gelezen en begrepen en ga akkoord met het verwerken van mijn persoonsgegevens voor commerciële en profileringsdoeleinden.",
                    "genderDisclaimer": "Door op een van de knoppen hieronder te klikken, schrijf ik mij in voor de nieuwsbrief",
                    "privacyLink": "Lees hier de Privacyverklaring van The North Face",
                    "menButton": "Man",
                    "womenButton": "Vrouw",
                    "okMessage": "Bedankt voor het aanmelden voor onze nieuwsbrief",
                    "koMessage": "Sorry het e-mailadres bestaat al. Voer een ander e-mailadres in",
                    "opsMessage": "Er is iets misgegaan, probeer het later opnieuw",
                    "block1": "Krijg een cadeautje bij je volgende aankoop",
                    "block2": "Blijf op de hoogte van de avonturen van onze atleten",
                    "block3": "Exclusief nieuws, evenementen en als eerste op de hoogte van productlanceringen"
                }];
            switch (currentCountry) {
                case "nl":
                    promoLabels = [
                        {
                            "promoTitle": "Krijg bij registratie € 10 korting op bestellingen boven de € 100",
                            "promoSubTitle": "Open de welkomstmail: er staat een exclusieve kortingscode in."
                        }];
                    break;
                case "be":
                    promoLabels = [
                        {
                            "promoTitle": "Krijg bij registratie € 10 korting op bestellingen boven de € 100",
                            "promoSubTitle": "Open de welkomstmail: er staat een exclusieve kortingscode in."
                        }];
            }
            break;
        case "es":
            formLabels = [
                {
                    "formTitle": "Consigue un regalo de 10 € al registrarte y realizar un pedido superior a 100 €",
                    "nameLabel": "Nombre",
                    "lastnameLabel": "Apellido",
                    "emailLabel": "E-mail*",
                    "dateLabel": "Fecha de nacimiento (DD/MM/YYYY)",
                    "interestLabel": "Tu actividad favorita",
                    "defaultLabel": "Selecciona una actividad",
                    "activityLabel1": "Senderismo",
                    "activityLabel2": "Entrenamento",
                    "activityLabel3": "Correr",
                    "activityLabel4": "Alpinismo",
                    "activityLabel5": "Esquí Y Snowboarding",
                    "privacyCopy": "Al suscribirme confirmo que he leído la política de privacidad de The North Face y doy mi consentimiento para el tratamiento de mis datos personales con fines de marketing y determinación de perfiles.",
                    "genderDisclaimer": "Al hacer clic sobre uno de los siguientes botones, me suscribo a la Newsletter",
                    "privacyLink": "Accede aquí a la Política de Privacidad de The North Face",
                    "menButton": "Hombre",
                    "womenButton": "Mujer",
                    "okMessage": "Gracias por inscribirte",
                    "koMessage": "Disculpa, este e-mail ya existe, inténtalo con otro distinto",
                    "opsMessage": "Ha habido un error, por favor, inténtalo de nuevo más tarde",
                    "block1": "Consigue un regalo para tu próxima compra",
                    "block2": "Entérate de las últimas hazañas de nuestros deportistas",
                    "block3": "Exclusivas, eventos e información en primicia sobre nuevos productos"
                }];
            switch (currentCountry) {
                case "es":
                    promoLabels = [
                        {
                            "promoTitle": "Consigue un regalo de 10 € al registrarte y realizar un pedido superior a 100 €",
                            "promoSubTitle": "Te hemos enviado un correo de bienvenida en el que encontrarás tu código promocional exclusivo."
                        }];
            }
            break;
        case "pl":
            formLabels = [
                {
                    "formTitle": "zł 43 w prezencie za zamówienie powyżej zł 430",
                    "nameLabel": "Imię",
                    "lastnameLabel": "Nazwisko",
                    "emailLabel": "Adres e-mail*",
                    "dateLabel": "Data urodzenia (DD/MM/YYYY)",
                    "interestLabel": "Wybierz aktywność",
                    "defaultLabel": "Wybierz aktywność",
                    "activityLabel1": "Górskie wędrówki",
                    "activityLabel2": "Trening",
                    "activityLabel3": "Bieganie",
                    "activityLabel4": "Wspinaczka wysokogórska",
                    "activityLabel5": "Narciarstwo i snowboarding",
                    "privacyCopy": "Potwierdzam, że przeczytałem(-am) i zrozumiałem(-am) politykę prywatności firmy the north face i wyrażam zgodę na przetwarzanie moich danych osobowych do celów marketingowych i profilowania.",
                    "genderDisclaimer": "Zapisuję się do newslettera klikając jeden z poniższych przycisków",
                    "privacyLink": "Wyświetl politykę prywatności The North Face",
                    "menButton": "Mężczyźni",
                    "womenButton": "Kobiety",
                    "okMessage": "Dziękujemy za subskrypcję",
                    "koMessage": "Ten adres już istnieje w naszej bazie",
                    "opsMessage": "Coś nie tak, spróbuj ponownie.",
                    "block1": "Odbierz prezent przy następnym zakupie",
                    "block2": "Otrzymuj aktualne informacje o wyczynach naszych sportowców",
                    "block3": "Informacje o wyłącznych ofertach, wydarzeniach i premierach produktów"
                }];
            switch (currentCountry) {
                case "pl":
                    promoLabels = [
                        {
                            "promoTitle": "zł 43 w prezencie za zamówienie powyżej zł 430",
                            "promoSubTitle": "Sprawdź powitalny e-mail z kodem promocyjnym."
                        }];
            }
            break;
        case "pt":
            formLabels = [
                {
                    "formTitle": "Regista-te para um desconto de € 10 na tua encomenda",
                    "nameLabel": "Nome",
                    "lastnameLabel": "Apelido",
                    "emailLabel": "Endereço de e-mail*",
                    "dateLabel": "Data de nascimento (DD/MM/YYYY)",
                    "interestLabel": "Seleciona uma atividade",
                    "defaultLabel": "Seleciona uma atividade",
                    "activityLabel1": "Caminhar",
                    "activityLabel2": "Treinar",
                    "activityLabel3": "Correr",
                    "activityLabel4": "Montanhismo",
                    "activityLabel5": "Ski e snowboard",
                    "privacyCopy": "Confirmo que li e compreendi a política de privacidade the north face e autorizo o processamento dos meus dados pessoais para efeitos publicidade e personalização de campanhas.",
                    "genderDisclaimer": "Ao clicar num dos botões abaixo, subscreves a newsletter",
                    "privacyLink": "Consulta a política de privacidade The North Face aqui",
                    "menButton": "Homem",
                    "womenButton": "Mulher",
                    "okMessage": "Obrigado(a) por te registares",
                    "koMessage": "Este e-mail já está registado.",
                    "opsMessage": "Algo deu errado, tente novamente.",
                    "block1": "Recebe um presente com a tua próxima compra",
                    "block2": "Mantém-te atualizado com as últimas explorações dos atletas",
                    "block3": "Novidades exclusivas sobre eventos e lançamento de produtos"
                }];
            switch (currentCountry) {
                case "pt":
                    promoLabels = [
                        {
                            "promoTitle": "Regista-te para um desconto de € 10 na tua encomenda",
                            "promoSubTitle": "Encontra o teu código promocional exclusivo no E-mail de Boas-Vindas."
                        }];
            }
        case "cs":
                formLabels = [
                    {
                        "formTitle": "Za registraci získáte slevu ve výši 280 Kč na svou první objednávku přesahující 2800 Kč",
                        "nameLabel": "KŘESTNÍ JMÉNO",
                        "lastnameLabel": "PŘÍJMENÍ",
                        "emailLabel": "E-MAILOVÁ ADRESA",
                        "dateLabel": "DATUM NAROZENÍ",
                        "interestLabel": "Vyberte svou oblíbenou činnost",
                        "defaultLabel": "Seleciona uma atividade",
                        "activityLabel1": "Turistika",
                        "activityLabel2": "Trénink ",
                        "activityLabel3": "Běh",
                        "activityLabel4": "Horolezectví",
                        "activityLabel5": "Lyže a snowboard",
                        "privacyCopy": "Prohlašuji, že jsem si přečetl/a Zásady ochrany osobních údajů společnosti The North Face a souhlasím se zpracováním svých osobních údajů pro marketingové a profilové účely.",
                        "genderDisclaimer": "Kliknutím na následující tlačítko se přihlašuji k odběru zpravodaje.",
                        "privacyLink": "WYŚWIETL POLITYKĘ PRYWATNOŚCI THE NORTH FACE",
                        "menButton": "PÁNSKÉ",
                        "womenButton": "DÁMSKÉ",
                        "okMessage": "Děkujeme, že jste se zaregistrovali.",
                        "bookMessage": "Click <a href='http://s7d1.scene7.com/is/content/TheNorthFaceBrand/Europe/PERMANENT/PDF%5Fbook/Climbing%5FBeyond%5Fx%5FNorth%5FFace.zip' target='_blank'>here</a> to download your free sample of the book.",
                        "preorderMessage": "Please also click <a href='http://amzn.to/2wmPbxw' target='_blank'>here</a> if you want to pre-order the book in full.",
                        "koMessage": "Tato adresa již existuje. Please try a new one.",
                        "opsMessage": "Něco se pokazilo, opakujte později.",
                        "block1": "Získejte dárek za svůj další nákup.",
                        "block2": "Budte informováni o všech expedicích a výkonech naších sportovců.",
                        "block3": "Informace o nabídkách, akcích a produktech"
                    }];
                switch (currentCountry) {
                    case "cz":
                        promoLabels = [
                            {
                                "promoTitle": "Za registraci získáte slevu ve výši 280 Kč na svou první objednávku přesahující 2800 Kč",
                                "promoSubTitle": "Kod promocyjny otrzymasz w e-mailu powitalnym."
                            }];
                }
            case "sv":
                formLabels = [
                    {
                        "formTitle": "Du får också en prenumerationsgåva på 100 kr vid din första beställning på över 1140 kr.",
                        "nameLabel": "FÖRNAMN",
                        "lastnameLabel": "EFTERNAMN",
                        "emailLabel": "E-POST",
                        "dateLabel": "FÖDELSEDATUM",
                        "interestLabel": "Välj din favoritaktivitet",
                        "defaultLabel": "Välj en aktivitet",
                        "activityLabel1": "Vandring",
                        "activityLabel2": "Träning",
                        "activityLabel3": "Löpning",
                        "activityLabel4": "Klättring",
                        "activityLabel5": "Skidor och snowboard",
                        "privacyCopy": "Jag har läst och förstår The North Faces sekretesspolicy och godkänner behandlingen av mina personuppgifter i marknadsförings- och profileringssyfte.",
                        "genderDisclaimer": "Genom att klicka på någon av knapparna nedan påbörjar jag min prenumeration på nyhetsbrevet",
                        "privacyLink": "LÄS THE NORTH FACES SEKRETESSPOLICY HÄR",
                        "menButton": "HERR",
                        "womenButton": "DAM",
                        "okMessage": "Tack för att du registrerat dig!",
                        "bookMessage": "Click <a href='http://s7d1.scene7.com/is/content/TheNorthFaceBrand/Europe/PERMANENT/PDF%5Fbook/Climbing%5FBeyond%5Fx%5FNorth%5FFace.zip' target='_blank'>here</a> to download your free sample of the book.",
                        "preorderMessage": "Please also click <a href='http://amzn.to/2wmPbxw' target='_blank'>here</a> if you want to pre-order the book in full.",
                        "koMessage": "Den här adressen finns redan. Försök med en annan.",
                        "opsMessage": "Någonting fungerade inte som det skulle. Försök igen senare.",
                        "block1": "Få en gåva på köpet nästa gång du handlar.",
                        "block2": "Uppdateringar om alla våra idrottares expeditioner och upptåg.",
                        "block3": "Insiderinformation om exklusiva erbjudanden, evenemang och nylanserade produkter."
                    }];
                switch (currentCountry) {
                    case "se":
                        promoLabels = [
                            {
                                "promoTitle": "Du får också en prenumerationsgåva på 100 kr vid din första beställning på över 1140 kr.",
                                "promoSubTitle": "Din kupongkod får du med ditt välkomstmejl"
                            }];
                        break;
                    case "fi":
                        promoLabels = [
                            {
                                "promoTitle": "Du får också en prenumerationsgåva på 10 € vid din första beställning på över 100 €.",
                                "promoSubTitle": "Din kupongkod får du med ditt välkomstmejl"
                            }];
                        break;
                }
                break;
            case "da":
                formLabels = [
                    {
                        "formTitle": "Za registraci získáte slevu ve výši 75 Kr na svou první objednávku přesahující 745 Kr.",
                        "nameLabel": "FORNAVN",
                        "lastnameLabel": "EFTERNAVN",
                        "emailLabel": "E-MAILADRESSE",
                        "dateLabel": "FØDSELSDATO",
                        "interestLabel": "Vælg din yndlingsaktivitet",
                        "defaultLabel": "Vælg en aktivitet",
                        "activityLabel1": "Vandring",
                        "activityLabel2": "Træning",
                        "activityLabel3": "Løb",
                        "activityLabel4": "Bjergbestigning",
                        "activityLabel5": "Ski og snowboard",
                        "privacyCopy": "Jeg anerkender, at jeg har læst og forstået The North Faces politik for beskyttelse af personlige oplysninger, og jeg accepterer behandlingen af mine personlige oplysninger til markedsførings- og profileringsformål.",
                        "genderDisclaimer": "Ved at klikke på en af nedenstående knapper abonnerer jeg på nyhedsbrevet",
                        "privacyLink": "SE THE NORTH FACES POLITIK FOR BESKYTTELSE AF PERSONLIGE OPLYSNINGER HER",
                        "menButton": "HERRER",
                        "womenButton": "DAMER",
                        "okMessage": "Tak, fordi du har valgt at abonnere",
                        "bookMessage": "Click <a href='http://s7d1.scene7.com/is/content/TheNorthFaceBrand/Europe/PERMANENT/PDF%5Fbook/Climbing%5FBeyond%5Fx%5FNorth%5FFace.zip' target='_blank'>here</a> to download your free sample of the book.",
                        "preorderMessage": "Please also click <a href='http://amzn.to/2wmPbxw' target='_blank'>here</a> if you want to pre-order the book in full.",
                        "koMessage": "Denne adresse findes allerede",
                        "opsMessage": "Der gik noget galt. Prøv igen senere",
                        "block1": "Få en gave ved dit næste køb.",
                        "block2": "Hold dig opdateret om alle vores atleters ekspeditioner og udforskninger.",
                        "block3": "Oplysninger om eksklusive nyheder, begivenheder og produktlanceringer."
                    }];
                switch (currentCountry) {
                    case "dk":
                        promoLabels = [
                            {
                                "promoTitle": "Za registraci získáte slevu ve výši 75 Kr na svou první objednávku přesahující 745 Kr.",
                                "promoSubTitle": "Du modtager kampagnekoden i din velkomstmail"
                            }];
                        break;
                }
                break;
    }

        translationEngine(formLabels, promoLabels);

}
//TRANSLATES THE PAGE
var translationEngine = function (formLabels, promoLabels) {
    // if (promoActive == 0) {
    //     document.getElementById('formTitle').innerHTML = formLabels[0].formTitle;
    // } else {
    //     document.getElementById('formTitle').innerHTML = promoLabels[0].promoTitle + "<br><small>" + promoLabels[0].promoSubTitle + "</small>";
    // }

    // document.getElementById('formTitle').innerHTML = promoLabels[0].promoTitle;
    // document.getElementById('formSubTitle').innerHTML = promoLabels[0].promoSubTitle;
    // document.getElementById('block1').innerHTML = formLabels[0].block1;
    // document.getElementById('block2').innerHTML = formLabels[0].block2;
    // document.getElementById('block3').innerHTML = formLabels[0].block3;
    document.getElementById('nameLabel').innerHTML = formLabels[0].nameLabel;
    // document.getElementById('nameField').placeholder = formLabels[0].nameLabel;
    document.getElementById('lastnameLabel').innerHTML = formLabels[0].lastnameLabel;
    // document.getElementById('lastnameField').placeholder = formLabels[0].lastnameLabel;
    document.getElementById('emailLabel').innerHTML = formLabels[0].emailLabel;
    // document.getElementById('emailField').placeholder = formLabels[0].emailLabel;
    document.getElementById('dateLabel').innerHTML = formLabels[0].dateLabel;
    if (screenWidth < 639) {
        // document.getElementById('tempDate').placeholder = formLabels[0].dateLabel + " (DD/MM/YYYY)";
    }
    document.getElementById('interestLabel').innerHTML = formLabels[0].interestLabel;
    document.getElementById('defaultLabel').innerHTML = formLabels[0].defaultLabel;
    document.getElementById('activityLabel1').innerHTML = formLabels[0].activityLabel1;
    document.getElementById('activityLabel2').innerHTML = formLabels[0].activityLabel2;
    document.getElementById('activityLabel3').innerHTML = formLabels[0].activityLabel3;
    document.getElementById('activityLabel4').innerHTML = formLabels[0].activityLabel4;
    document.getElementById('activityLabel5').innerHTML = formLabels[0].activityLabel5;
    document.getElementById('privacyCopy').innerHTML = formLabels[0].privacyCopy;
    document.getElementById('genderDisclaimer').innerHTML = formLabels[0].genderDisclaimer;
    document.getElementById('menButton').value = formLabels[0].menButton;
    document.getElementById('womenButton').value = formLabels[0].womenButton;
    // document.getElementsByClassName('privacyLink').innerHTML = formLabels[0].privacyLink;

    var x = document.getElementsByClassName('privacyLink');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = formLabels[0].privacyLink;
    }

    document.getElementById('okMessage').innerHTML = formLabels[0].okMessage;
    // if (promoActive == 0 && currentLanguage == "en") {
    //     document.getElementById('bookMessage').innerHTML = formLabels[0].bookMessage;
    //     document.getElementById('preorderMessage').innerHTML = formLabels[0].preorderMessage;
    // }
    document.getElementById('koMessage').innerHTML = formLabels[0].koMessage;
    document.getElementById('opsMessage').innerHTML = formLabels[0].opsMessage;
}
//BUTTON HANDLING
var buttonControl = function () {
    var buttons = document.getElementById('buttonContainer');
    var formStatus = "";
    for (var i in formControl) {
        formStatus = formStatus + formControl[i];
    }
    if (formStatus === "111") {
        for (i = 0; i < buttons.childElementCount; i++) {
            buttons.children[i].disabled = false;
            buttons.children[i].className = "button button--large button--secondary track";
        }
    } else {
        for (i = 0; i < buttons.childElementCount; i++) {
            buttons.children[i].disabled = true;
            buttons.children[i].className = "button button--large button--disabled track";
        }
    }
}
//DATE HANDLING
var reverseDate = function (date) {
    if (date != "") {
        var getDay = date.split("/")[0];
        var getMonth = date.split("/")[1];
        var getYear = date.split("/")[2];
        var newDate = getYear + "." + getMonth + "." + getDay;
        return newDate;
    } else {
        return "";
    }
}
//FIELD HANDLING
var checkField = function (field, mandatory) {
    switch (mandatory) {
        case 0:
            if (field.value.trim() == '' || field.value.trim() == null) {
                field.style.cssText = okStyle;
                formControl[field.id] = "1";
                buttonControl();
            } else {
                checkValue(field);
            }
            break;
        case 1:
            if (field.value.trim() == '' || field.value.trim() == null) {
                field.style.cssText = koStyle;
                formControl[field.id] = "0";
            } else {
                checkValue(field);
            }
    }
}
var checkValue = function (field) {
var dateRegex = /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/;
var emailRegex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
var fieldType = "";
if (field.id.match("email")) {
    fieldType = "email";
} else {
    fieldType = "date";
}
switch (fieldType) {
    case "email":
        if (emailRegex.test(field.value)) {
            document.getElementById('emailField').style.cssText = okStyle;
            formControl[field.id] = "1";
        } else {
            document.getElementById('emailField').style.cssText = koStyle;
            formControl[field.id] = "0";
        }
        break;
    case "date":
        if (dateRegex.test(field.value)) {
            document.getElementById("tempDate").style.cssText = okStyle;
            document.getElementById("dateField").value = reverseDate(field.value);
            formControl[field.id] = "1";
        } else {
            document.getElementById("tempDate").style.cssText = koStyle;
            formControl[field.id] = "0";
        }
}
buttonControl();
}
//GENDER HANDLING
var setMan = function () {
    document.getElementById('mainform-radioMen').checked = true;
    sendForm();
}
var setWoman = function () {
    document.getElementById('mainform-radioWomen').checked = true;
    sendForm();
}
//LEGAL STATUS HANDLING
var legalCheck = function (field) {
    var buttons = document.getElementById('buttonContainer');
    var addressField = document.getElementById('emailField');
    var birthField = document.getElementById('tempDate');
    if (field.checked) {
        // buttons.className = "";
        formControl[field.id] = "1";
    }
    else {
        // buttons.className = "disabledButtons";
        formControl[field.id] = "0";
    }
    checkField(addressField, 1);
    checkField(birthField, 0);
    buttonControl();
}
//BUTTON HANDLING
// var hideButtons = function (hide) {
//     var buttons = document.getElementById("buttonContainer");
//     var wrapperBox = document.getElementsByClassName("wrapperBox")[0];
//     var spinnerGif = document.createElement("img");
//     spinnerGif.setAttribute("width", "100");
//     spinnerGif.setAttribute("src", "https://s7d1.scene7.com/is/content/TheNorthFaceBrand/Europe/Ops%20EU/largeSpinner.gif");
//     switch (hide) {
//         case 0:
//             buttons.style.cssText = "";
//             wrapperBox.removeChild(wrapperBox.children[4]);
//             break;
//         case 1:
//             buttons.style.cssText = "display: none";
//             wrapperBox.appendChild(spinnerGif);
//     }
// }
//FORM SUBMIT
var sendForm = function () {
    // hideButtons(1);
    var formAction = document.forms["subscribeForm"].action;
    var formMethod = document.forms["subscribeForm"].method;
    jQuery.ajax({
        type: formMethod,
        url: formAction,
        data: jQuery("#subscribeForm").serialize(),
        success: function (data) {
            if (data.hasOwnProperty("errorMessage")) {
                var errorCode = data.errorMessage;
                switch (errorCode) {
                    case "UserAlreadySubscribed":
                        jQuery('#koMessage').removeClass('hidden');
                        jQuery('#formTitle').addClass('hidden');
                        hideButtons(0);
                        break;
                    case "GenericError":
                        jQuery('#subscribeForm').addClass('hidden');
                        jQuery('#formTitle').addClass('hidden');
                        jQuery('.privacyLink').addClass('hidden');
                        jQuery('#opsMessage').removeClass('hidden');
                }
            } else {
                jQuery('#subscribeForm').addClass('hidden');
                jQuery('#formTitle').addClass('hidden');
                jQuery('.privacyLink').addClass('hidden');
                jQuery('#okMessage').removeClass('hidden');
                jQuery('#bookMessage').removeClass('hidden');
                jQuery('#preorderMessage').removeClass('hidden');
                jQuery('#koMessage').addClass('hidden');

                //event track on success
                trackEvent('Newsletter', 'Newsletter Sign Up', 'Vectiv LP')

                return true;
            }
        },
        error: function (data) {
            jQuery('#subscribeForm').addClass('hidden');
            jQuery('#formTitle').addClass('hidden');
            jQuery('.privacyLink').addClass('hidden');
            jQuery('#opsMessage').removeClass('hidden');
            return false;
        }
    });
}
//EVENT LISTENER
document.addEventListener("DOMContentLoaded", function (event) {
  getCountry();
});
