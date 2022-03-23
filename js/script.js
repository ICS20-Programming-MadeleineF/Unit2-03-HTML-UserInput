// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and Street Number and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get Street Number from text field and cast it to integer
  let userStreetNumber = parseInt(document.getElementById("streetnumber-entered").value)

  // display name and Street Number back to user
  document.getElementById('user-info').innerHTML = "Your first name is " + firstName + " and you are " + userStreetNumber + " years old."
}
