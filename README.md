Lataa tiedostot

cd backend npm install

cd frontend npm install

luo .env-tiedosto backend-kansioon

kirjoita seuraava env-tiedostoon:

DB_HOST=localhost
DB_PORT=3306
DB_USER=testuser
DB_PASSWORD=testpass
DB_NAME=muotiopas
PORT=3000

aktivoi xampp apache + mysql

luo muotiopas tietokanta

tuo (import) muotiopas tietokanta juuresta

laita nämä sql komennot phpmyadmin

CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpass';
GRANT ALL PRIVILEGES ON muotiopas.* TO 'testuser'@'localhost';
FLUSH PRIVILEGES;

backend npm run dev

frontend npm run dev
