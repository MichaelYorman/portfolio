Lataa tiedostot

cd backend npm install

cd frontend npm install

aktivoi xampp apache + mysql

luo muotiopas tietokanta

laita nämä sql komennot tietokantaan

-- 1. Create the user
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpass';
-- 2. Grant all privileges on that database to the user
GRANT ALL PRIVILEGES ON muotiopas.* TO 'testuser'@'localhost';
-- 3. Apply privileges
FLUSH PRIVILEGES;

backend npm run dev

frontend npm run dev
