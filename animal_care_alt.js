/** @format */

// import {animals} from "animal_info.js";

const establishFeedTimes = (index) => {
    console.log(animals[index].feed_times);
    $(".care").eq(index).text(animals[index].feed_times);
};

const showInformation = () => {
    setUpBoxes();
    // Display the feed times for each dog
    // using the JSON data, with function establishFeedTimes
    jQuery.each($(".box"), establishFeedTimes);

    // Add an event handler for when the element of
    // class box gets a click event, anonymous function here
    $(".box").on("click", function () {
        // Find the box clicked using the index method
        let indexOfAnimal = $(".box").index(this);

        // Find the paragraph of class p and set the text
        $(this).find("p.care").text(animals[indexOfAnimal].warning);
    });

    // Add an event handler for when the element
    // of class box gets a mouseover event
    $(".box").on("mouseover", function () {
        let indexOfAnimal = $(".box").index(this);

        $(this)
            .find("p.care")
            .text(
                animals[indexOfAnimal].scoops + " scoops " + animals[indexOfAnimal].food
            );
    });

    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".box").on("mouseout", function () {
        let indexOfAnimal = $(".box").index(this);

        $(this).find("p.care").text("Feeding Schedule: "+ animals[indexOfAnimal].feed_times);
    });
};

const setUpBoxes = () => {
    let wrapperRef = $('.wrapper');
    animals.forEach((animal) => {
        // Updated boxMarkup to include the animal name
        let boxMarkup = `
          <div class="box">
            <img class="animal_pic" src="./images/${animal.animal_name.toLowerCase()}.png" />
            <p class="animal_name">${animal.animal_name}</p> <!-- Added this line -->
            <p class="care"></p>
          </div>`;
        wrapperRef.append(boxMarkup);
    });
};

$(document).ready(showInformation); // @format
