/*** =====================================
         * MULT CONTACT PAGE FORM
         =====================================***/

         var currentTab = 0; // Current tab is set to be the first tab (0)
         showTab(currentTab); // Display the current tab
         
         function showTab(n) {
          // This function will display the specified tab of the form ...
          var x = document.getElementsByClassName("tab");
          x[n].style.display = "block";
        }
   

       
    $(function () {
        $("input[name='radioname']").click(function () {
            if ($("#ac-repair,#ac-instal,#duct-cleaning,#air-purification").is(":checked")) {
                $("#tab2").show();
                $("#tab1").hide();
                $("#formquestion").html("What service do you need?");
            } 
            else {
                $("#tab2").hide();
            }
        });
    });

    $(function () {
      $("input[name='radioname2']").click(function () {
        if ($("#new-instal,#repair,#estimate,#other").is(":checked")){
          $("#tab3").show();
            $("#tab2").hide();
            $("#tab1").hide();
            $("#formquestion").html("Please fill out the form.");
        }
          else {
              $("#tab3").hide();
          }
      });
  });

 