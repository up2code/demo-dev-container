CREATE TABLE event_trans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_source VARCHAR(100),
    name VARCHAR(255) NOT NULL,
    data TEXT
);