Create or replace database citiesAndCountries;

use citiesAndCountries;

Create Table Countries(
    countryId INT PRIMARY KEY,
    NameOfCountry VARCHAR(50)
);

Create Table Cities(
    cityID INT PRIMARY KEY,
    NameOfCity VARCHAR(50),
    countryId INT NOT NULL,
    FOREIGN KEY (countryId) REFERENCES Countries(countryId)
);
INSERT INTO Countries (countryId, NameOfCountry) VALUES
(1, 'United States'),
(2, 'Canada'),
(3, 'Mexico'),
(4, 'France'),
(5, 'Japan');

INSERT INTO Cities (cityID, NameOfCity, countryId) VALUES
(1, 'New York', 1),
(2, 'Los Angeles', 1),
(3, 'Toronto', 2),
(4, 'Vancouver', 2),
(5, 'Mexico City', 3),
(6, 'Guadalajara', 3),
(7, 'Paris', 4),
(8, 'Tokyo', 5);

