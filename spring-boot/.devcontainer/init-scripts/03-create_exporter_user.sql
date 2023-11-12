CREATE USER 'exporter'@'%' IDENTIFIED BY 'password';
GRANT PROCESS, REPLICATION CLIENT, SELECT ON *.* TO 'exporter'@'%';
FLUSH PRIVILEGES;

-- If you want to limit the maximum number of connections for the 'exporter' user:
-- SET MAX_USER_CONNECTIONS = 3;
