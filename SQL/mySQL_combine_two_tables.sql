SELECT Person.firstName, Person.lastName, IF(city is NULL, DEFAULT(city), city) AS city, IF(state is NULL, DEFAULT(state), state) AS state FROM Person
LEFT JOIN Address ON Address.personId = Person.personId;