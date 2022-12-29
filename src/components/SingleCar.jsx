import React from "react";

function SingleCar({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors
}) {
    return (
        <li>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>Max Speed: {maxSpeed}</p>
            <p>{isAutomatic} Automatic </p>
            <p>Engine: {engine}</p>
            <p>Number of doors: {numberOfDoors}</p>
        </li>
    )
}
export default SingleCar;