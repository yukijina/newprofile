


$('.btn').click(function createResult() {
  //hide HTML *do not use empyt()remove()detach() - because these remove input data too
  //.hideDiv must be inside #formDiv - that append result of data
  $('.hideDiv').hide()
  $('.title').text('User Profile')
  var firstName = document.getElementById('first-name').value
  var lastName = document.getElementById('last-name').value
  var email = document.getElementById('email').value
  var phone= document.getElementById('phone').value

  var nameEl = document.createElement('h2')
  var emailEl = document.createElement('p')
  var phoneEl = document.createElement('p')

  nameEl.textContent = "Welcome: " + firstName + " " + lastName
  emailEl.textContent = "Your email address: " + email
  phoneEl.textContent = "Your phone number: " + phone

    //gender
    var genderP = document.createElement('p')
    if ($('input[type=radio][value=0]:checked').val()) {
      genderP.textContent = "Gender: Male"
    } else if ($('input[type=radio][value=1]:checked').val()) {
      genderP.textContent = "Gender: Female"
    }

    //favorite color
    var colorP = document.createElement('p')
    if ($('#color option[value=0]:selected').val()) {
      colorP.textContent = "Your Favorite Color: Red"
    } else if($('#color option[value=1]:selected').val()) {
      colorP.textContent = "Your Favorite Color: Blue"
    } else if ($('#color option[value=2]:selected').val()) {
      colorP.textContent = "Your Favorite Color: Green"
    }

    //Country of birth
     var countryP = document.createElement('p')
     if ($('.country[type=radio][value=0]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: Africa"
     } else if ($('.country[type=radio][value=1]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: Asia"
     } else if ($('.country[type=radio][value=2]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: Australia"
     } else if ($('.country[type=radio][value=3]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: Europe"
     } else if ($('.country[type=radio][value=4]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: North America"
     } else if ($('.country[type=radio][value=5]:checked').val()) {
       countryP.textContent = "Your Continent of Birth: South America"
     }



  $('#formDiv').append(nameEl, emailEl, phoneEl, genderP, colorP, countryP)



  // var title = document.createElement('h1')
  // var nameResult = document.createElement('h2')
  // var createP = document.createElement('p')
  //
  // title.textContent = "User Profile"
  // nameResult.textContent = "Welcome: " + firstName + " " + lastName

  // function genderAnswer() {
  //   var inputEl = document.getElementsByClassName('gender')
  //   for (var i = 0; i < inputEl.length; i++) {
  //     if (inputEl[i].checked) {
  //       console.log("gender selected")
  //     }
  //   }
  // }
  // if (gender1.checked) {
  //   var maleT = document.createElement('p').textContent = "Gender: " + gender1
  //   } else if (gender2.checked) {
  //     var femaleT = document.createElement('p').textContent = "Gender: " + gender2
  //   }

  // var emailEl = document.createElement('p')
  // emailEl.textContent = email
  // var phoneEl = document.createElement('p')
  // phoneEl.textContent = phone

  // $('#color>option:selected').text() = console.log('color selected')
  // $('#country>option:selected').text() = $('<p></p>').append($('<div></div')).attr({color: red})


  //container.appendChild(title)
  //container.appendChild(nameResult)
  // container.appendChild(emailEl)
  // container.appendChild(phoneEl)

})
