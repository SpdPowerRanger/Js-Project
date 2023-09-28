
-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);

-- @block

INSERT INTO Users(email,bio,country)
VALUES
    ('hell@world.com','i love ice-creame','IN'),
    ('yo@world.com','no love yo','MX'),
    ('manyof@world','hello all the worlds','CH');


-- @block

SELECT * FROM Users;

-- @block

SELECT email, id FROM Users

WHERE country = 'IN'
AND email LIKE 'hello%'

ORDER BY id ASC 
LIMIT 2;

-- @block


CREATE INDEX email_index ON Users(email);


--@block

CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) REFERENCES Users(id)
);


-- @block


INSERT INTO Rooms(street, owner_id)
VALUES
    ('kota street', 1),
    ('side street', 1),
    ('very street', 1);

--@block

SELECT 
    Users.id AS users_id,
    Rooms.id AS rooms_id,
    email,
    street
 FROM Users
LEFT JOIN Rooms
ON Rooms.owner_id = Users.id;


--@block

CREATE TABLE Bookings(
    id INT AUTO_INCREMENT,
    guest_id Int NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(guest_id) REFERENCES Users(id),
    FOREIGN KEY(room_id) REFERENCES Rooms(id)
);




-- @block

SELECT 
    guest_id,
    street,
    check_in
 FROM Bookings
 INNER JOIN Rooms ON Rooms.id = guest_id
 WHERE guest_id = 1;