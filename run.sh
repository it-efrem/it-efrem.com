sudo npm run build &&
pm2 start "sudo npm run start:prod" --name "main" --log
