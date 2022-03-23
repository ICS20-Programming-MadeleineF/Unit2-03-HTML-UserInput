// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: March 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street name and Street Number and displays it back to user

  // get street name from text field
  let streetName = document.getElementById("street-name").value
	// get Street Number from text field and cast it to integer
  let userStreetNumber = parseInt(document.getElementById("streetnumber-entered").value)

  // display Street Name and Street Number back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + streetName + " and your street number is " + userStreetNumber + "."
}
