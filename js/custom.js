/*------------------------------------------------------------------
    Template Name:  Loazzne
    Version: 1.0
    Author: Layerdrops
    Author Email: layerdrops@gmail.com

    [Table of Content]

    01: Navbar Fixed
    02: PreLoader
    03: Responsive menu
    04: responsive toggle menu
    05: Book Online radio button
    06: Header Slider
    07: Home v2 Header Slider
    08: Custom Owl-carousel
    09: Clients Logo
    10: Service Slider
    11: Video Promotion
*/

  /*COVID  POPUP*/


  function popupCovid(popupcovid) {
	
    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper").length == 0){
      $(popupcovid).wrapInner("<div class='wrapper'></div>");
    }
    
      /* Open popup */
    $(popupcovid).show();
  
    /* Close popup if user clicks on background */
    $(popupcovid).click(function(e) {
      if ( e.target == this ) {
        if ($(popupcovid).is(':visible')) {
          $(popupcovid).hide();
        }
      }
    });
  
    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popupcovid).find("button[name=close]").on("click", function() {
      if ($(".formElementError").is(':visible')) {
        $(".formElementError").remove();
      }
      $(popupcovid).hide();
    });
  }
  
  $("#openpopupcovid").click(function(){
    popupCovid($(".popupcovid"));
  });






  /*ELITE  POPUP*/


  function popupElite(popupelite) {
	
    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper").length == 0){
      $(popupelite).wrapInner("<div class='wrapper'></div>");
    }
    
      /* Open popup */
    $(popupelite).show();
  
    /* Close popup if user clicks on background */
    $(popupelite).click(function(e) {
      if ( e.target == this ) {
        if ($(popupelite).is(':visible')) {
          $(popupelite).hide();
        }
      }
    });
  
    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popupelite).find("button[name=close]").on("click", function() {
      if ($(".formElementError").is(':visible')) {
        $(".formElementError").remove();
      }
      $(popupelite).hide();
    });
  }
  
  $("#openpopupelite").click(function(){
    popupElite($(".popupelite"));
  });
  
  
(function ($) {
    'use strict';

    /*** =====================================
     * Navbar fixed
     * =====================================***/
    const menu_fixed = document.querySelector('.main_menu_area');
    const topOfNav = menu_fixed.offsetTop;

    function fixed_nav() {
        if (window.scrollY >= topOfNav || window.scrollY === topOfNav) {
            document.body.classList.add('fixed-scroll-nav');
        } else {
            document.body.classList.remove('fixed-scroll-nav');
        }
    }
    window.addEventListener('scroll', fixed_nav);

    /*** =====================================
     * PreLoader
     * =====================================***/
    $(window).on('load', function(){
        $('.preloader').delay('0').fadeOut(0);
    });


    $(document).on('ready', function () {
        /*** =====================================
         * Toogle Nav Menu
         * =====================================***/
        $(document).on('click', '.main_menu_area button.navbar-toggles', function () {
            $('.main_menu_area .collapse_responsive').toggleClass('collapse_active');
            $('.main_menu_area button.navbar-toggles').toggleClass('navbar_close');
        });

        $(document).on('click','.main_menu_area .navbar-nav li > span.responsive_menu:not(:only-child)', function (e) {
            $(this).siblings('.dropdown-menu').toggle();
            $('.dropdown-menu').not($(this).siblings()).hide();
            e.stopPropagation();
        });


        /*** =====================================
         * Service Single tabs
         * =====================================***/
         $(document).on('click', '.service_class_remove .nav-tabs li', function () {
             $(".service_cool_head .nav-tabs li").removeClass('active');
         });
        $(document).on('click', '.service_cool_head .nav-tabs li', function () {
            $(".service_class_remove .nav-tabs li").removeClass('active');
        });


        /*** =====================================
         * CounterUP
         * =====================================***/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });


        /*** =====================================
         * Home v1 Header Slider
         * =====================================***/
        $('.header_slider_area').owlCarousel({
            items: 1,
            autoHeight: true,
            autoplay: true,
            loop: true,
            nav: false,
            dots: true,
            slideSpeed: 500,
            animateIn: 'slideInLeft',
            animateOut: 'fadeOutRight',
            autoplayTimeout: 10000,
        });

        /*** =====================================
         * Testimonial Slider
         * =====================================***/
        $('.testimonial_slider').owlCarousel({
            items: 1,
            autoHeight: true,
            autoplay: true,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
            dots: true,
            thumbs: true,
            thumbsPrerendered: true,
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown'
        });

        /*** =====================================
         * Clients Logos Slider
         * =====================================***/
        $('.clients_logo').owlCarousel({
            autoHeight: true,
            autoplay: true,
            loop: true,
            nav: false,
            autoplayTimeout: 3000,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        });


        /*** =====================================
         * Video Promotion
         =====================================***/
        $("#videolink").magnificPopup({
            type: 'inline',
            midClick: true
        });

        $('.mfp-close-btn-in').on('click', function () {
            $('#videostore').hide();
        });

    });


})(jQuery);

if ($(window).width() < 960) {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "500px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
 }
 else {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "450px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
 }

   /*** =====================================
         * AC PAGE CHANGE TEXT
         =====================================***/

        //  function acinstallation(){
        //   document.getElementById("pagetitle").innerHTML = "A High Quality <b>Air Conditioner</b> You Can Rely On.";
        //      document.getElementById("acimage").src = "assets/images/services/ac-instal.jpg";
        //      document.getElementById("actitle").innerHTML = "Air Conditioner Installation";
        //      document.getElementById("acbodycopy").innerHTML = "The Chill Brothers cooling plan is all you need to keep you and your wallet cool all year round.   That's why we begin every air conditioner  rental experience with a free in-home assessment. Getting a new air conditioner can be stressful, but it doesn't have to be. We’ve eliminated the upfront cost and will take care of all your maintenance and repair needs. ";
        //      document.getElementById("acsubtitle").innerHTML = "We vow to give you:";
        //      document.getElementById("acfooter").innerHTML = " ";
        //      document.getElementById("acsecondtitle").innerHTML = " ";
        //      window.scrollTo(0,100);




        //      var codeblock1 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Exceptional and convenient year-round customer service'+'</li>';
        //      document.getElementById("li1").innerHTML = codeblock1;
 
        //      var codeblock2 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'High quality maintenance and repair work at no additional cost**'+'</li>';
        //      document.getElementById("li2").innerHTML = codeblock2;
 
        //      var codeblock3 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Rates that stay comfortable and consistent for your wallet'+'</li>';
        //      document.getElementById("li3").innerHTML = codeblock3;
 
        //      var codeblock4 = ' ';
        //      document.getElementById("li4").innerHTML = codeblock4;
 
        //      var codeblock5 = ' ';
        //      document.getElementById("li5").innerHTML = codeblock5;
 
        //      var codeblock6 = ' ';
        //      document.getElementById("li6").innerHTML = codeblock6;
 
        //      var codeblock7 = ' ';
        //      document.getElementById("li7").innerHTML = codeblock7;
 
        //      var codeblock8 = ' ';
        //      document.getElementById("li8").innerHTML = codeblock8;


        //      var codeblock9 = ' ';
        //      document.getElementById("li9").innerHTML = codeblock9;
 
        //      var codeblock10 = ' ';
        //      document.getElementById("li10").innerHTML = codeblock10;
 
        //      var codeblock11 = ' ';
        //      document.getElementById("li11").innerHTML = codeblock11;
 
        //      var codeblock12 = ' ';
        //      document.getElementById("li12").innerHTML = codeblock12;
 


        //  }



        //  function acrepair(){
        //   document.getElementById("pagetitle").innerHTML = "A High Quality <b>Air Conditioner</b> You Can Rely On.";
        //     document.getElementById("acimage").src = "assets/images/services/ac-repair.jpg";
        //     document.getElementById("actitle").innerHTML = "Air Conditioner Repair & Maintenance";
        //     document.getElementById("acbodycopy").innerHTML = "When it comes to your home you need to know the company you put your trust into will be there when it really matters. If your air conditioner stops working, needs a performance tune up or isn’t blowing cold air; our team of highly trained professionals will only be a phone call away.<br><br>The teams at Chill Brothers vows to give you exceptional service with competitive rates that keep you and your wallet comfortable.<br><br>When your air conditioner needs servicing, we want to help.<br><br> Call Chill Brothers or click the free estimate button to your right to schedule a free assessment.";
        //     document.getElementById("acsubtitle").innerHTML = "When to call an expert?";
        //     document.getElementById("acfooter").innerHTML = "If you believe your air conditioning unit requires emergency service, click here for information about our 24/7 repair services.";
        //     document.getElementById("acsecondtitle").innerHTML = "Signs I Should Replace My Air Conditioner:";
        //     window.scrollTo(0,100);

      


        //     var codeblock1 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'The air conditioner won`t turn on'+'</li>';
        //     document.getElementById("li1").innerHTML = codeblock1;

        //     var codeblock2 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Air conditioner isn’t cooling'+'</li>';
        //     document.getElementById("li2").innerHTML = codeblock2;

        //     var codeblock3 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Weird noises or vibrating coming from my air conditioner'+'</li>';
        //     document.getElementById("li3").innerHTML = codeblock3;

        //     var codeblock4 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Air conditioners smells'+'</li>';
        //     document.getElementById("li4").innerHTML = codeblock4;

        //     var codeblock5 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'The unit hums, but the fan doesn`t turn on'+'</li>';
        //     document.getElementById("li5").innerHTML = codeblock5;

        //     var codeblock6 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'The fan runs, but the compressor isn`t working'+'</li>';
        //     document.getElementById("li6").innerHTML = codeblock6;

        //     var codeblock7 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Water is pooling around the air conditioner'+'</li>';
        //     document.getElementById("li7").innerHTML = codeblock7;

        //     var codeblock8 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'One room of your home is not cooling'+'</li>';
        //     document.getElementById("li8").innerHTML = codeblock8;








        //     var codeblock9 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Age - If your AC is more than 10 years old and giving you trouble, it may be in your best interest to consider a replacement.'+'</li>';
        //     document.getElementById("li9").innerHTML = codeblock9;

        //     var codeblock10 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'An expensive repair bill - When you`re facing an expensive repair, it’s best to weigh the costs of the repair over the cost of a new unit. Especially if your air conditioner is showing other problem signs.'+'</li>';
        //     document.getElementById("li10").innerHTML = codeblock10;

        //     var codeblock11 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Your air conditioner uses R 22 Freon - Freon is being phased out by the federal government to protect our ozone layer. This means that eventually all units will have to be replaced in order to switch to the new refrigerant (R410A).'+'</li>';
        //     document.getElementById("li11").innerHTML = codeblock11;

        //     var codeblock12 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'High bills and constant repairs -If your bills are climbing and it seems like you`re calling a contractor once a month with a new problem a new unit may be the way to go. A new AC unit will use less electricity and could save you big time on energy bills and repair bills.'+'</li>';
        //     document.getElementById("li12").innerHTML = codeblock12;

           
        //  }


        // function furnaceinstallation(){
        //     document.getElementById("pagetitle").innerHTML = "A High Quality <b>Furnace</b> You Can Rely On.";
        //     document.getElementById("acimage").src = "assets/images/services/furnace-instal.jpg";
        //     document.getElementById("actitle").innerHTML = "Furnace Installation";
        //     document.getElementById("acbodycopy").innerHTML = "We stand behind the new furnaces we install and that's why we only work with the highest quality heating systems on the market. Our licensed technicians can offer you one of the most high-efficiency furnaces with a full service package so you know you and your home are protected. <br> <br> Our certified professionals will help you find the right heating systems that meets all your needs.   Getting a new furnace can be stressful, but it doesn't have to be. Our goal is to give our clients a one-of-a-kind experience.  Click the free estimate button to your right to get in touch with one of our consultants.";
        //     document.getElementById("acsubtitle").innerHTML = "We vow to give you:";
        //     document.getElementById("acfooter").innerHTML = "";
        //     document.getElementById("acsecondtitle").innerHTML = "";
        //     window.scrollTo(0,100);


        //     document.getElementById("calculator").className = "heating";

        //     var codeblock1 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Exceptional value'+'</li>';
        //     document.getElementById("li1").innerHTML = codeblock1;

        //     var codeblock2 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'High quality products that are User friendly'+'</li>';
        //     document.getElementById("li2").innerHTML = codeblock2;

        //     var codeblock3 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Exceptional and convenient year-round customer service'+'</li>';
        //     document.getElementById("li3").innerHTML = codeblock3;

        //     var codeblock4 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'High quality service packages with no additional cost**'+'</li>';
        //     document.getElementById("li4").innerHTML = codeblock4;

        //     var codeblock5 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Consistent and comfortable rate all year round'+'</li>';
        //     document.getElementById("li5").innerHTML = codeblock5;

        //     var codeblock6 = ' ';
        //     document.getElementById("li6").innerHTML = codeblock6;

        //     var codeblock7 = ' ';
        //     document.getElementById("li7").innerHTML = codeblock7;

        //     var codeblock8 = ' ';
        //     document.getElementById("li8").innerHTML = codeblock8;


        //     var codeblock9 = ' ';
        //     document.getElementById("li9").innerHTML = codeblock9;

        //     var codeblock10 = ' ';
        //     document.getElementById("li10").innerHTML = codeblock10;

        //     var codeblock11 = ' ';
        //     document.getElementById("li11").innerHTML = codeblock11;

        //     var codeblock12 = ' ';
        //     document.getElementById("li12").innerHTML = codeblock12;

            

        // }


        // function furnacerepair(){
        //   document.getElementById("pagetitle").innerHTML = "A High Quality <b>Furnace</b> You Can Rely On.";
        //     document.getElementById("acimage").src = "assets/images/services/furnace-repair.jpg";
        //     document.getElementById("actitle").innerHTML = "Furnace Repair & Maintenance";
        //     document.getElementById("acbodycopy").innerHTML = "The best way to prevent expensive furnace emergencies is getting routine maintenance done. During the winter months in Texas the weather is known to change constantly. This means we're turning our furnace on and off again which can cause a lot of wear and tear. Eventually leading to a broken furnace or a furnace that needs recurring maintenance. Our licenced and certified technicians are fully equipped to diagnose and repair any problems you may be having. <br><br> When your furnace needs servicing, we want to help. Call Chill Brothers or click the free estimate button to your right to schedule your free in home consultation.";
        //     document.getElementById("acsubtitle").innerHTML = "When to call an expert?";
        //     document.getElementById("acfooter").innerHTML = "If you believe your Furnace requires emergency service, click here for information about our 24/7 repair services.";
        //     document.getElementById("acsecondtitle").innerHTML = "Signs I Should Replace My Furnace:";
        //     window.scrollTo(0,100);


        //     var codeblock1 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'The furnace won`t turn on.'+'</li>';
        //     document.getElementById("li1").innerHTML = codeblock1;

        //     var codeblock2 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Furnace isn’t sending heat.'+'</li>';
        //     document.getElementById("li2").innerHTML = codeblock2;

        //     var codeblock3 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Furnace has a weird smell.'+'</li>';
        //     document.getElementById("li3").innerHTML = codeblock3;

        //     var codeblock4 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'One room of your home is not heating.'+'</li>';
        //     document.getElementById("li4").innerHTML = codeblock4;

        //     var codeblock5 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'The Furnace keeps turning off and on.'+'</li>';
        //     document.getElementById("li5").innerHTML = codeblock5;

        //     var codeblock6 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'My furnace keeps shutting off.'+'</li>';
        //     document.getElementById("li6").innerHTML = codeblock6;

        //     var codeblock7 = ' ';
        //     document.getElementById("li7").innerHTML = codeblock7;

        //     var codeblock8 = ' ';
        //     document.getElementById("li8").innerHTML = codeblock8;








        //     var codeblock9 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Age - If your Furnace is more than 10-5 years old and giving you trouble, it may be in your best interest to consider a replacement. You could be paying 30-50% more in utility costs than you should be.'+'</li>';
        //     document.getElementById("li9").innerHTML = codeblock9;

        //     var codeblock10 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'An expensive repair bill - When you`re facing an expensive repair, it`s best to weigh the costs of the repair over the cost of a new unit. Especially if your Furnace is showing other problem signs. Our specialists are here to help you make the decision that best for you and your home.'+'</li>';
        //     document.getElementById("li10").innerHTML = codeblock10;

        //     var codeblock11 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'High bills and constant repairs -If your bills are climbing and it seems like you`re calling a contractor once a month with a new problem a new unit may be the way to go. A new furnace will use less energy and could save you big on energy bills and repair bills.'+'</li>';
        //     document.getElementById("li11").innerHTML = codeblock11;

        //     var codeblock12 = ' ';
        //     document.getElementById("li12").innerHTML = codeblock12;







        // }

        //     function duct(){
        //       document.getElementById("pagetitle").innerHTML = "Duct Cleaning Service";
        //         document.getElementById("acimage").src = "assets/images/services/duct-cleaning.jpg";
        //         document.getElementById("actitle").innerHTML = "Duct Cleaning";
        //         document.getElementById("acbodycopy").innerHTML = "We often forget about the importance of having our ducts cleaned as it’s not a service that is required often. Our air ducts  should be cleaned at least once a year in order to keep them in  good condition and to protect our health considering the amount of particles that pass through our ductwork. <br><br> We want to ensure the air you breathe here in texas is as healthy as possible.";
        //         document.getElementById("acsubtitle").innerHTML = "";
        //         document.getElementById("acfooter").innerHTML = "";
        //         document.getElementById("acsecondtitle").innerHTML = "Signs I Should Have My Ducts Cleaned:";
        //         window.scrollTo(0,100);
    
    
        //         var codeblock1 = ' ';
        //         document.getElementById("li1").innerHTML = codeblock1;
    
        //         var codeblock2 = ' ';
        //         document.getElementById("li2").innerHTML = codeblock2;
    
        //         var codeblock3 = ' ';
        //         document.getElementById("li3").innerHTML = codeblock3;
    
        //         var codeblock4 = ' ';
        //         document.getElementById("li4").innerHTML = codeblock4;
    
        //         var codeblock5 = ' ';
        //         document.getElementById("li5").innerHTML = codeblock5;
    
        //         var codeblock6 = ' ';
        //         document.getElementById("li6").innerHTML = codeblock6;
    
        //         var codeblock7 = ' ';
        //         document.getElementById("li7").innerHTML = codeblock7;
    
        //         var codeblock8 = ' ';
        //         document.getElementById("li8").innerHTML = codeblock8;
    
    
    
    
    
    
    
    
        //         var codeblock9 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Allergies - If your family members  find themselves coughing and sneezing more than usual this could be due to the fact that your ducts are filled with dirt and dust.'+'</li>';
        //         document.getElementById("li9").innerHTML = codeblock9;
    
        //         var codeblock10 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Dust is building up faster and faster – If you`re seeing excessive dust buildup or find yourself cleaning more often than you used to, dirty ducts could be the culprit. '+'</li>';
        //         document.getElementById("li10").innerHTML = codeblock10;
    
        //         var codeblock11 = '<li>'+'<i class="fa fa-check-circle">'+'</i>'+ 'Issues with your heating and cooling systems - If your heating and cooling systems aren’t working efficiently this could be due to dirt and debris choking the airflow.'+'</li>';
        //         document.getElementById("li11").innerHTML = codeblock11;
    
        //         var codeblock12 = ' ';
        //         document.getElementById("li12").innerHTML = codeblock12;
    
    

        // }

   /*** =====================================
         * AC PAGE CHANGE TEXT END
         =====================================***/



        function indextofurnacerental(){
           window.location.href = "ac.html#acimg";

        }


 




function requestForm(){
  openForm()


  document.getElementById("getan").innerHTML = "Request this <em>Service!</em>";
  document.getElementById("getan2").innerHTML = "What services are you looking for?";
  document.getElementById("getan3").value = "";
  document.getElementById("subjectform").value = "WEBSITE FORM: request service";

}

$("#booktoday").click(function(){
  $(document).ready(function () {
    $("#selecthid").show();
    $(".hidd").hide();
    $(".buybackimg").width("80%");



    $("#popup_title").text("Book Today!");


    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});

$(".booktoday").click(function(){
  $(document).ready(function () {
    $("#selecthid").show();
    $(".hidd").hide();
    $(".buybackimg").width("80%");



    $("#popup_title").text("Book Today!");


    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});

$("#free_estimate").click(function(){
  $(document).ready(function () {
    $("#selecthid").show();
    $(".buybackimg").width("80%");



    $("#popup_title").text("Get an Estimate");


    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});






$("#free_air_test").click(function(){
  $(document).ready(function () {

    $("#popup_title").text("Free Air Quality Test");
    $("#popup_subtitle").hide();
    $("#selecthid").hide();
    $(".hidd").show();
    $(".buybackimg").width("50%");


    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});

/*black friday*/
$('#close-blackfriday').click(function(){
  $('#blackfriday').hide();
  });
/*end black friday*/


$("#free_inspection").click(function(){
  $(document).ready(function () {

    $("#popup_title").text("Service Inspection");
    $("#popup_subtitle").hide();
    $("#selecthid").hide();
    $(".hidd").show();
    $(".buybackimg").width("50%");

    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});

/*POPUP NEWSLETTER*/

setTimeout(function(){  
  $('#popupnews').modal('show');
   },10000);
 
 
 $(document).ready(function () {
   $("[data-js=open]").on("click", function() {
     popupOpenClose($(".popupnews"));
   });
 });
 
 /*POPUP NEWSLETTER END*/

/*POPUP REFERRAL PROGRAM*/
$("#referral-program").click(function(){
  $(document).ready(function () {

    $("#popup_title").text("Referral Program");
    $("#popup_subtitle").text("Get Chilled with your Friends");
    $("#selecthid").hide();
    $(".hidd").show();
    $(".buybackimg").width("50%");
    $("#txtselect").attr("placeholder", "Friend's Name");

    setTimeout(function () {
      popupOpenClose($(".popup"));
    }, 0); /*POPUP 5 SEC AFTER LANDING PAGE*/
    });
  
});

/*END POPUP REFERRAL PROGRAM*/

if ($(window).width() < 1050) {
    $('#slidersize1').removeClass('slider_bg10 header_slider_bg');
} else {
    $('#slidersize1').addClass('slider_bg10 header_slider_bg');
}

if ($(window).width() < 1050) {
    $('#slidersize2').removeClass('slider_bg9 header_slider_bg');
} else {
    $('#slidersize2').addClass('slider_bg9 header_slider_bg');
}

if ($(window).width() < 1050) {
    $('#slidersize3').removeClass('slider_bg2 header_slider_bg');
} else {
    $('#slidersize3').addClass('slider_bg2 header_slider_bg');
}