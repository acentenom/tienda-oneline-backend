# GET Productos.

La siguiente ruta es la utilizada para traer todos los productos:
- GET /prodcuts

# Estructura JSON de Productos

Al realizar la petición, el servidor retorna un JSON con las siguientes caracteristicas:

```json
[
  {
     "id": 5,
     "name": "ENERGETICA MR BIG",
     "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
     "price": 1490,
     "discount": 20,
     "category": 1
  },
...]
```
### Tablas:
- id: Identificador único del producto (int).
- name: Nombre del producto (varchar).
- url_image: URL de la imagen asociada al producto (varchar).
- price: Precio de venta del producto (float).
- discount: Porcentaje de descuento del producto (int).
- category: Identificador de la categoría (int).


# GET Categorías.

La siguiente ruta es utilizada para devolver todas las Categorías:

- GET /category

Al realizar la petición, el servidor retorna un JSON con las siguientes caracteristicas:

```json
[
  {
    "id": 1,
    "name": "Bebida energetica"
  },
...]
```
### Tablas:
- id: Identificador único de la categoría (int).
- name: Nombre de la categoría (varchar).


## GET Buscar productos por Nombre.

La siguiente ruta es utilizada para devolver todas las Categorías:

- GET /product?name=${name}

>__Ejemplo:__ /product?name=ron

Al realizar la petición, el servidor retorna un JSON con las siguientes caracteristicas:

```json
[
  {
    "id": 23,
    "name": "RON BACARDI AÑEJO",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
    "price": 4990,
    "discount": 0,
    "category": 3
  },
...]
```

## GET Buscar productos por Categoría.


La siguiente ruta es utilizada para devolver todas las Categorías:

- GET /product7category/${id}

>__Ejemplo:__ /product?name=8

Al realizar la petición, el servidor retorna un JSON con las siguientes caracteristicas:

```json
[
  {
    "id": 8,
    "name": "PISCO ALTO DEL CARMEN 35º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
    "price": 7990,
    "discount": 10,
    "category": 2
  },
...]
```