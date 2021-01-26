# inventarioFF: inventario "from file"
- Inventario estatico desde archivo inventario
- Se utiliza node.js para devolver por GET http el inventario origen en formato json utilizando ansible-inventory

### build:

docker build -t inventarioFF .
podman build -t inventarioFF .

### run:

docker run -idt -p 8080:8080 --name inventario inventarioFF:latest

