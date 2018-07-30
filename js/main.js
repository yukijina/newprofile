
$('.btn').click(function createResult() {
  //hide HTML *do not use empyt()remove()detach() - because these remove input data too
  //.hideDiv must be inside #formDiv - that append result of data
  $('.hideDiv').hide()
  $('.title').text('USER PROFILE')
  //store in a variable for each value
  var firstName = document.getElementById('first-name').value
  var lastName = document.getElementById('last-name').value
  var email = document.getElementById('email').value
  var phone= document.getElementById('phone').value

  var nameEl = document.createElement('h2')
  var emailEl = document.createElement('p')
  var phoneEl = document.createElement('p')

  //name, email, phone input section
  nameEl.textContent = "Welcome:  " + firstName + " " + lastName
  emailEl.textContent = "Email address: " + email
  phoneEl.textContent = "Phone number: " + phone

  //gender
  var genderP = document.createElement('p')
  var genderImg = document.createElement('img')
  var imgDiv = document.createElement('div')
  //grab input data if user selected male or female
  if ($('input[type=radio][value=0]:checked').val()) {
      genderP.textContent = "Gender: Male"
      genderImg.src = "img/male.png" //add male image
    } else if ($('input[type=radio][value=1]:checked').val()) {
      genderP.textContent = "Gender: Female"
      genderImg.src = "img/female.png" //add female image
    }

  //favorite color
  //grab option data which color user selected
  //change body background to user's favorite color
  var colorP = document.createElement('p')
  if ($('#color option[value=0]:selected').val()) {
    colorP.textContent = "Your Favorite Color: Red"
    $('body').css('background-color', '#ff3333')
  } else if($('#color option[value=1]:selected').val()) {
    colorP.textContent = "Your Favorite Color: Blue"
    $('body').css('background-color', '#1a1aff')
  } else if ($('#color option[value=2]:selected').val()) {
    colorP.textContent = "Your Favorite Color: Green"
    $('body').css('background-color', '#00b300')
  } else if ($('#color option[value=3]:selected').val()) {
    colorP.textContent = "Your Favorite Color: Yellow"
    $('body').css('background-color', '#ffff1a')
  } else if ($('#color option[value=4]:selected').val()) {
    colorP.textContent = "Your Favorite Color: Pink"
    $('body').css('background-color', '#ffc0cb')
  }

  //Country of birth
  //grab input data which continate user selected
   var countryP = document.createElement('p')
   if ($('.country[type=radio][value=0]:checked').val()) {
     countryP.textContent = "Continent of Birth: Africa"
   } else if ($('.country[type=radio][value=1]:checked').val()) {
     countryP.textContent = "Continent of Birth: Asia"
   } else if ($('.country[type=radio][value=2]:checked').val()) {
     countryP.textContent = "Continent of Birth: Australia"
   } else if ($('.country[type=radio][value=3]:checked').val()) {
     countryP.textContent = "Continent of Birth: Europe"
   } else if ($('.country[type=radio][value=4]:checked').val()) {
     countryP.textContent = "Continent of Birth: North America"
   } else if ($('.country[type=radio][value=5]:checked').val()) {
     countryP.textContent = "Continent of Birth: South America"
   }

   //Style (bootstrap/addClass or css)
   $('#formDiv').addClass('col-7 pl-5')
   $(genderImg).css('width', '100%')
   //when you select multiple variable, use []
   $([emailEl, phoneEl, genderP, colorP, countryP]).css({
     'font-size': '1.5rem',
     'margin': '2%',
     'padding-top': '2%'
   })

    document.getElementsByClassName('row')[0].appendChild(imgDiv)
    //image append to another Div to diplay right side
    imgDiv.appendChild(genderImg)



    //append everything to formDiv
    $('#formDiv').append(nameEl, emailEl, phoneEl, genderP, colorP, countryP)

    //doesnot work - also need to append to #formDiv when you start again
    // var backBtn = document.createElement('button')
    // backBtn.textContent = 'Back'
    // backBtn.className = 'btn btn-outline-danger btn-lg mt-5'

    //does not work
     // $(backBtn).click(function goBack(){
     // $('#formDiv').hide()
     // $(imgDiv).hide()
     //
     // $('.hideDiv').show()
     //})


})
