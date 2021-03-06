CREAPAGINA = {};
jQuery(document).ready(function($) {
    CREAPAGINA.hoverItem = function(item) {

    }

    CREAPAGINA.setTiming = function(oggetto, timer) {
        window.setTimeout(function() {
            $(oggetto).trigger("click");
        }, timer);
    }


    CREAPAGINA.addHtmlBlock = function(idBlock, bloccoHtml, checkParameter, checkShowMore, clickShowMore, containerShowMore, singleShowMore) {
        $(idBlock).click(function() {
            $.get(bloccoHtml)
                .success(function(data) {
                    //============== APPEND HTMl
                    var bloccoNome = 'Aggiunto con successo il blocco: ' + bloccoHtml;
                    $('.aggiunto_blocco').text(bloccoNome);
                    $('.aggiunto_blocco').fadeIn();
                    window.setTimeout(function() {
                        $('.aggiunto_blocco').fadeOut();
                    }, 2000);
                    $('.torna_su').fadeIn();
                    var newHtmlAwesome = $(data).find(".blocco_import");
                    if (checkParameter == 'differentHTML') {
                        console.log(checkShowMore + " " + clickShowMore);
                        $(newHtmlAwesome).find(checkShowMore).addClass(clickShowMore);
                    }
                    $('.awesomePage').append(newHtmlAwesome);
                    //============== ENDAPPEND HTMl
                    if (checkParameter == 'select') {

                        $('.base__select').selectpicker('refresh');
                    }
                    if (checkShowMore == true) {

                        $(clickShowMore).click(function() {
                            var thisItem = $(this);
                            $(this).parents(containerShowMore).find(singleShowMore).each(function(index) {
                                if ($(this).css('display', 'none')) {
                                    $(this).show();
                                    thisItem.hide();
                                }
                            });
                        });
                    }
                    if (checkParameter == 'selectCountry') {

                        $('#country--List').change(function() {
                            var selectedItem = $("#country--List").prop("selectedIndex");
                            var choseCountry = "#stat-" + selectedItem;
                            var blockToHide = '.country_offers_block__container__country';
                            $(blockToHide).each(function(i) {
                                $(this).hide();
                            });
                            $(choseCountry).slideToggle();

                        });
                        $('.base__select').selectpicker('refresh');
                    }
                    if (checkParameter == 'selectBXslider') {

                        $('.bxslider').bxSlider({
                            pagerCustom: '#bx-pager'
                        });
                    }
                });
        });
    }

    CREAPAGINA.homePage = function(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16) {
        var multipl = 1;
        var delayTimer = 300;
        var newItem;
        $('.mostra_blocchi').slideUp();
        $('.loader').fadeIn();
        $('.overlay_loader').fadeIn();
        for (var i = 0; i < arguments.length; i++) {
            newItem = arguments[i];
            timer = delayTimer * multipl;
            CREAPAGINA.setTiming(newItem, timer)
            multipl = multipl + 1;
        }
        window.setTimeout(function() {
            $("#activateSliders").trigger("click");
        }, timer);
        window.setTimeout(function() {
            $('.loader').fadeOut();
            $('.overlay_loader').fadeOut();
        }, timer);
    }
    CREAPAGINA.attivaSliders = function() {

        if ($('.slider__stripMenuText').length) {
            $('.slider__stripMenuText').slick({
                centerMode: false,
                dots: false,
                arrows: false,
                speed: 300,
                swipeToSlide: true,
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 6,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            centerMode: true,
                            centerPadding: '75px',
                            slidesToShow: 4,
                            initialSlide: 3,
                            slidesToScroll: 4,
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            centerMode: true,
                            centerPadding: '55px',
                            initialSlide: 1,
                            slidesToShow: 3,
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        if ($('.slider__slidingNews').length) {
            $('.slider__slidingNews').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        if ($('.slider__stripMenu').length) {
            $('.slider__stripMenu').slick({
                centerMode: false,
                dots: false,
                arrows: false,
                speed: 300,
                swipeToSlide: true,
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 6,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            centerMode: true,
                            centerPadding: '75px',
                            slidesToShow: 4,
                            initialSlide: 3,
                            slidesToScroll: 4,
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            centerMode: true,
                            centerPadding: '55px',
                            initialSlide: 1,
                            slidesToShow: 3,
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        // INIZIALIZZA SLIDER
        if ($('.slider__homeandlife').length) {
            $('.slider__homeandlife').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right_white.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left_white.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 979,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        if ($('.slider__offer').length) {
            $('.slider__offer').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        if ($('.service__bundle').length) {
            $('.service__bundle').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        // INIZIALIZZA SLIDER
        if ($('.slider__bundle').length) {
            $('.slider__bundle').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: "<img class='slider__navigation right__arrow' src='/img/icons-interface/slider_arrow_right.png'>",
                prevArrow: "<img class='slider__navigation left__arrow' src='/img/icons-interface/slider_arrow_left.png'>",
                dotsClass: 'slider__dots',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                    return '<div class="slider__single"></div>';
                },
                responsive: [{
                        breakpoint: 840,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 585,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        // INIZIALIZZA SLIDER
    }
    $('.container_immagine_cms').mouseenter(function() {
        var $ow = $(window);
        var windowsize = $ow.width();
        if (windowsize >= 650) {
            var position = $(this).offset();
            var getOverlay = $(this).find('.overlay_immagine');
            getOverlay.css('width', '500px');
            getOverlay.css('top', position.top);
            if (position.left <= 500) {
                getOverlay.css('left', position.left + 200);
                console.log('left');
            } else {
                getOverlay.css('left', position.left - 500)
                console.log('right');
            }
            if (position.top >= 650) {
                getOverlay.css('top', position.top - 300);
            }
            getOverlay.show();
        }
    });
    $('.torna_su').click(function() {
        window.scrollTo(0, 0);
    });
    $('.container_immagine_cms').mouseleave(function() {
        $(this).find('.overlay_immagine').hide();
    });
    $('.base__select').on('change', function() {
        var newClass = this.value;
        $(this).addClass(newClass);
    });
    //ATTIVA SLIDERS
    $('#activateSliders').click(function() {
        CREAPAGINA.attivaSliders();
    });
    //RESETTA TUTTO
    $('#resettaPages').click(function() {
        $('.blocco_import').each(function(i) {
            $(this).remove();
        });
        $('.torna_su').fadeOut();
    });
    //NASCONDI
    $('#nascondiBlocchi').click(function() {
        $('.mostra_blocchi').slideToggle();
    });
    //AGGIUNGI VISORE STANDARD
    CREAPAGINA.addHtmlBlock('#aggiungiVisoreStandard', 'blocks/homepages/blocco_visore_standard.html');
    //AGGIUNGI VISORE CAMPI
    CREAPAGINA.addHtmlBlock('#aggiungiVisoreCampi', 'blocks/homepages/blocco_visore_campi.html', 'select');
    //AGGIUNGI VISORE BUSINESS
    CREAPAGINA.addHtmlBlock('#aggiungiVisoreBusiness', 'blocks/homepages/blocco_visore_campi_business.html', 'select');
    //AGGIUNGI RICARICA
    CREAPAGINA.addHtmlBlock('#aggiungiRicarica', 'blocks/homepages/blocco_ricarica.html', 'select');
    //AGGIUNGI ASSISTENZA
    CREAPAGINA.addHtmlBlock('#aggiungiAssistenza', 'blocks/homepages/blocco_assistenza.html');
    //AGGIUNGI NEWSLETTER
    CREAPAGINA.addHtmlBlock('#aggiungiNewsletter', 'blocks/homepages/blocco_newsletter.html');
    //HOME AND LIFE
    CREAPAGINA.addHtmlBlock('#aggiungiHomeLife', 'blocks/homepages/blocco_homeandlife.html');
    //APP CONTATTO
    CREAPAGINA.addHtmlBlock('#aggiungiAppContatto', 'blocks/homepages/blocco_app_contatto.html');
    //AGGIUNGI VISORE IMMAGINE
    CREAPAGINA.addHtmlBlock('#aggiungiVisoreImmagine', 'blocks/homepages/blocco_visore_immagine.html');
    //AGGIUNGI BUNDLE OFFERTA
    CREAPAGINA.addHtmlBlock('#aggiungiSliderOfferta', 'blocks/homepages/blocco_slider.html');
    //AGGIUNGI BUNDLE ESTENDIBILE
    CREAPAGINA.addHtmlBlock('#aggiungiBundleEstendibile', 'blocks/vetrine/vetrina_bundle.html', false, true, '.bundle_block__showMore', '.showcase_bundle_block', '.showcase_bundle_block__single');
    //AGGIUNGI BUNDLE ESTENDIBILE BUSINESS
    CREAPAGINA.addHtmlBlock('#aggiungiBundleEstendibileBusiness', 'blocks/vetrine/vetrina_bundle_2_business_noSlide.html', false, true, '.bundle_ver2_noSlide_block__showMore', '.bundle_ver2_noSlide_block', '.bundle_ver2_noSlide_block__single');
    //AGGIUNGI BUNDLE
    CREAPAGINA.addHtmlBlock('#aggiungiBundleHp', 'blocks/homepages/blocco_bundle.html');
    //AGGIUNGI STRIPMENU
    CREAPAGINA.addHtmlBlock('#aggiungiStripMenu', 'blocks/homepages/blocco_stripMenu.html');
    //AGGIUNGI immagine destra
    CREAPAGINA.addHtmlBlock('#aggiungiImmagineDestra', 'blocks/homepages/blocco_immagineTestoBottoneDestra.html');
    //AGGIUNGI contatti
    CREAPAGINA.addHtmlBlock('#aggiungiBloccoContatti', 'blocks/homepages/blocco_contattiWind.html');
    //AGGIUNGI FATTI CONSIGLIARE
    CREAPAGINA.addHtmlBlock('#aggiungiFattiConsigliare', 'blocks/homepages/blocco_fattiConsigliare.html');
    //AGGIUNGI IMMAGINE TESTO
    CREAPAGINA.addHtmlBlock('#aggiungiImmagineTesto', 'blocks/homepages/blocco_immagineTesto.html');
    //AGGIUNGI IMMAGINE TESTO SINISTRA
    CREAPAGINA.addHtmlBlock('#aggiungiImmagineTestoSinistra', 'blocks/homepages/blocco_immagineTestoBottone.html');
    //AGGIUNGI CONTATTI BUSINESS
    CREAPAGINA.addHtmlBlock('#aggiungiContattiBusiness', 'blocks/homepages/blocco_contattiWindBusiness.html');
    //AGGIUNGI INFOGRAFICA
    CREAPAGINA.addHtmlBlock('#aggiungiInfografica', 'blocks/homepages/blocco_infografica.html');
    //AGGIUNGI TRETESTI
    CREAPAGINA.addHtmlBlock('#aggiungiBloccoTreTesti', 'blocks/homepages/blocco_slidingNews.html', 'differentHTML', '.slidingNews_block', 'slidingNews_block__noImage');
    //AGGIUNGI TREIMMAGINI
    CREAPAGINA.addHtmlBlock('#aggiungiBloccoTreImmagini', 'blocks/homepages/blocco_slidingNews.html');
    //AGGIUNGI CANDIDATI
    CREAPAGINA.addHtmlBlock('#aggiungiCandidati', 'blocks/homepages/blocco_subscribe.html');
    //AGGIUNGI STRIPMENU LIGHT
    CREAPAGINA.addHtmlBlock('#aggiungiStripMenuLight', 'blocks/vetrine/blocco_stripMenuText.html');
    //AGGIUNGI BUNDLE DEVICE
    CREAPAGINA.addHtmlBlock('#aggiungiBundleDevice', 'blocks/vetrine/vetrina_bundle_device.html', 'select', true, '.showcase_bundle_device__showMore', '.showcase_bundle_device', '.showcase_bundle_device__single');
    //AGGIUNGI VETRINA FIBRA
    CREAPAGINA.addHtmlBlock('#aggiungiVetrinaFibra', 'blocks/vetrine/vetrina_fiber.html');
    //AGGIUNGI OFFERTE ORIZZONTALI
    CREAPAGINA.addHtmlBlock('#aggiungiOfferteOrizzontali', 'blocks/vetrine/vetrina_offerte_orizz.html');
    //AGGIUNGI ACCORDION
    CREAPAGINA.addHtmlBlock('#aggiungiAccordion', 'blocks/vetrine/vetrina_accordion_demo.html');
    //AGGIUNGI TITOLO GRIGIO
    CREAPAGINA.addHtmlBlock('#aggiungiTitoloGrigio', 'blocks/mini-componenti/blocco_fascia_titolo_grigia.html');
    //AGGIUNGI STRIP OPTION
    CREAPAGINA.addHtmlBlock('#aggiungiStripOption', 'blocks/vetrine/vetrina_strip_options.html');
    //AGGIUNGI TARIFFE
    CREAPAGINA.addHtmlBlock('#aggiungiTariffe', 'blocks/vetrine/vetrina_world_rates.html');
    //AGGIUNGI TESTO
    CREAPAGINA.addHtmlBlock('#aggiungiTestoGenerico', 'blocks/vetrine/blocco_testo_generico.html');
    //AGGIUNGI MONDO
    CREAPAGINA.addHtmlBlock('#aggiungiMondo', 'blocks/vetrina_country_offers.html', 'selectCountry');
    //AGGIUNGI HOME AND LIFE
    CREAPAGINA.addHtmlBlock('#aggiungiHomeLifeExt', 'blocks/vetrina_homeAndLifeExt.html', 'select', true, '.showcase_homeAndLifeExt_device__showMore', '.blocco_homeAndLifeExt', '.showcase_homeAndLifeExt_device__single');
    //AGGIUNGI VISORE DEVICE
    CREAPAGINA.addHtmlBlock('#aggiungiVisoreDevice', 'blocks/vetrine/blocco_cruscotto_device.html', 'selectBXslider');
    //AGGIUNGI strip plans
    CREAPAGINA.addHtmlBlock('#aggiungiStripPlans', 'blocks/vetrine/vetrina_strip_plans.html');
    //AGGIUNGI OPERATORE
    CREAPAGINA.addHtmlBlock('#aggiungiOperatore', 'blocks/vetrine/blocco_contatto_operatore.html');
    //AGGIUNGI vantaggi
    CREAPAGINA.addHtmlBlock('#aggiungiVantaggi', 'blocks/vetrine/vetrina_advantages.html');
    //AGGIUNGI MGM
    CREAPAGINA.addHtmlBlock('#aggiungiMgm', 'blocks/homepages/blocco_mgm.html');
    //AGGIUNGI SLIDER SERVIZI
    CREAPAGINA.addHtmlBlock('#aggiungiBundleServizi', 'blocks/homepages/blocco_servizi.html');
    //CREA HP PRIVATI DEVICE
    $('#createHomePagePrivatiDevice').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenu', '#aggiungiSliderOfferta', '#aggiungiRicarica', '#aggiungiVisoreImmagine', '#aggiungiAppContatto', '#aggiungiSliderOfferta', '#aggiungiMgm', '#aggiungiHomeLife', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA HP PRIVATI FISSO
    $('#createHomePagePrivatiFisso').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreCampi', '#aggiungiStripMenu', '#aggiungiBundleEstendibile', '#aggiungiRicarica', '#aggiungiVisoreImmagine', '#aggiungiAppContatto', '#aggiungiSliderOfferta', '#aggiungiMgm', '#aggiungiHomeLife', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA HP PRIVATI MOBILE
    $('#createHomePagePrivatiMobile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenu', '#aggiungiBundleEstendibile', '#aggiungiRicarica', '#aggiungiVisoreImmagine', '#aggiungiAppContatto', '#aggiungiSliderOfferta', '#aggiungiMgm', '#aggiungiHomeLife', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA HP PARTITA IVA
    $('#createHomePagePartitaIva').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenu', '#aggiungiBundleEstendibile', '#aggiungiVisoreImmagine', '#aggiungiSliderOfferta', '#aggiungiVisoreImmagine', '#aggiungiImmagineDestra', '#aggiungiBloccoContatti');
    });
    //CREA HP PICCOLEMEDIEAZIENDE
    $('#createHomePagePMA').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreBusiness', '#aggiungiStripMenu', '#aggiungiBundleEstendibileBusiness', '#aggiungiFattiConsigliare', '#aggiungiImmagineTesto', '#aggiungiImmagineTestoSinistra', '#aggiungiVisoreImmagine', '#aggiungiSliderOfferta', '#aggiungiBloccoContatti');
    });
    //CREA HP GRANDI AZIENDE
    $('#createHomePageGA').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreBusiness', '#aggiungiStripMenu', '#aggiungiBundleEstendibileBusiness', '#aggiungiImmagineTesto', '#aggiungiImmagineDestra', '#aggiungiFattiConsigliare', '#aggiungiImmagineTestoSinistra', '#aggiungiImmagineDestra', '#aggiungiVisoreImmagine', '#aggiungiContattiBusiness');
    });
    //CREA HP WINDGROUP
    $('#createHomePageWindGroup').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreImmagine', '#aggiungiInfografica', '#aggiungiVisoreImmagine', '#aggiungiCandidati', '#aggiungiBloccoTreTesti', '#aggiungiVisoreImmagine', '#aggiungiBloccoTreImmagini', '#aggiungiBloccoContatti');
    });
    //CREA VETRINA MOBILE
    $('#createShowcaseMobile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiBundleEstendibile', '#aggiungiBundleEstendibile', '#aggiungiBundleEstendibile', '#aggiungiRicarica', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA FISSO MOBILE
    $('#createShowcaseFissoMobile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreCampi', '#aggiungiStripMenuLight', '#aggiungiBundleEstendibile', '#aggiungiBundleEstendibile', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA ADSL
    $('#createShowcaseADSL').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreCampi', '#aggiungiStripMenuLight', '#aggiungiBundleEstendibile', '#aggiungiBundleDevice', '#aggiungiBundleEstendibile', '#aggiungiVisoreImmagine', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA DEVICE
    $('#createShowcaseDevice').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreImmagine', '#aggiungiStripMenuLight', '#aggiungiBundleDevice', '#aggiungiHomeLife', '#aggiungiBundleDevice', '#aggiungiBundleDevice', '#aggiungiBundleDevice', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA RICARICABILE
    $('#createShowcaseRicaricabile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiVetrinaFibra', '#aggiungiOfferteOrizzontali', '#aggiungiBundleEstendibile', '#aggiungiAppContatto', '#aggiungiAccordion', '#aggiungiVisoreImmagine', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA ABBONAMENTO
    $('#createShowcaseAbbonamento').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiVetrinaFibra', '#aggiungiOfferteOrizzontali', '#aggiungiTitoloGrigio', '#aggiungiStripOption', '#aggiungiBundleDevice', '#aggiungiVisoreImmagine', '#aggiungiAccordion', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA ROAMING
    $('#createShowcaseRoaming').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiVetrinaFibra', '#aggiungiTitoloGrigio', '#aggiungiTariffe', '#aggiungiTariffe', '#aggiungiTestoGenerico', '#aggiungiTitoloGrigio', '#aggiungiAccordion', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA ETNICO
    $('#createShowcaseEtnico').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiMondo', '#aggiungiVetrinaFibra', '#aggiungiVisoreStandard', '#aggiungiBundleDevice', '#aggiungiAccordion', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA TELEFONO
    $('#createShowcaseIncluso').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreDevice', '#aggiungiStripMenuLight', '#aggiungiStripPlans', '#aggiungiAccordion', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA SCHEDA
    $('#createShowcaseScheda').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreCampi', '#aggiungiStripMenuLight', '#aggiungiTimer', '#aggiungiOperatore', '#aggiungiVetrinaFibra', '#aggiungiVantaggi', '#aggiungiBundleDevice', '#aggiungiAssistenza', '#aggiungiNewsletter');
    });
    //CREA VETRINA P.IVA MOBILE
    $('#createShowcasePIVAMobile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiBundleEstendibile', '#aggiungiBundleEstendibile', '#aggiungiBundleDevice', '#aggiungiVisoreImmagine', '#aggiungiImmagineDestra', '#aggiungiBloccoContatti');
    });
    //CREA VETRINA P.IVA RICARIBILE
    $('#createShowcasePIVARicaricabile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreStandard', '#aggiungiStripMenuLight', '#aggiungiOfferteOrizzontali', '#aggiungiAccordion', '#aggiungiBundleEstendibile', '#aggiungiVisoreImmagine', '#aggiungiImmagineDestra', '#aggiungiBloccoContatti');
    });
    //CREA VETRINA PMA RICARIBILE
    $('#createShowcasePMAMobile').click(function() {
        CREAPAGINA.homePage('#aggiungiVisoreBusiness', '#aggiungiStripMenuLight', '#aggiungiBundleEstendibileBusiness', '#aggiungiBundleEstendibileBusiness', '#aggiungiBundleDevice', '#aggiungiVisoreImmagine', '#aggiungiImmagineDestra', '#aggiungiBloccoContatti');
    });
});
