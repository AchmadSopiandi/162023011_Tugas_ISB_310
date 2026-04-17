CREATE DATABASE IF NOT EXISTS tugas5;
USE tugas5;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO users (name, email) VALUES
('Ahmad', 'ahmadsopiandi989@gmail.com');