###### Proyecto final: Ecommerce Reactjs - Alexis Krenz #####

Creado a través de [Create React App](https://github.com/facebook/create-react-app).

Utiliza:

- Bootstrap
- ReactJS
- Firebase
- react-icons
- react-router
- context
- react hooks

### Deployment ###

[https://alexisKrenz.github.io/ecommerce-reactjsfinal/](https://alexisKrenz.github.io/ecommerce-reactjsfinal/)


### Demo  ###

[GIF animado mostrando funcionamiento y navegabilidad del sitio](https://drive.google.com/file/d/108yXiwjAXhzBNkExL4gWjOGlj_EeJ1o5/view)

## E-commerce ##

Este proyecto fue realizado en ReactJS, simula una tienda de vinos. 
Obtiene de una base de datos en la nube de Firebase los articulos con sus respectivas propiedades y las muesta. 

Posee las siguientes funciones: 

- Seleccionar las categorias para que se muestren solo aquellos productos que coincidan con ella. 
- Ver el detalle descripcion, precio y stock de los productos. 
- Seleccionar la cantidad hasta el limite determinado por el stock en la base de datos.
- Agregar los productos al carrito de compras, el cual se puede acceder facilmente desde la parte superior de la pagina.
- Ver la cantidad de productos que forman parte del carrito.
- Ver el valor parcial/total de la compra, detallando aparte el precio por unidad.
- Comprar todos los productos figurantes en el carrito.
- Eliminar todos o un solo producto.
- A la hora de efectuar la compra realiza peticion de datos y en el caso de no cumplir con lo pedido deshabilita la opcion de comprar. 

## Proximas funciones a agregar ##

- Lista de deseos
- Almacenar carrito que quede disponible y seguir la compra en otro momento
- Historial de compras

## Estructura ##

#### `/context` ####

Contiene cartContext.js. Tiene dentro la parte de codigo que se encarga de agregar los productos, checkear si ya se encuentran dentro, remover 1 o todos, calcular la cantidad de items y el total a pagar. 

#### `/Utils` ####

Contiene orders.js y products.js.

orders.js crea una nueva coleccion en firebase usando la base de datos y el nombre a utilizar de la coleccion a crear. Devuelve una promesa utilizando addDoc() para crear el objeto en firestore. despues, la funcion createOrder() es importada en Cart.js y obtiene los parametros de la nueva orden. 

products.js 

products.js accede a la base de datos de firestore en donde estan alojados todos los productos y los trae conforme sea necesario, ya sea por el id o bien por el categoryId. 

#### `/components` ####

contiene las carpetas:
- Cart:

Contiene Cart.css y Cart.js. Cart.js Contiene las funciones que permiten agregar items al Cart, removerlos de a uno o todos a la vez. Aparte contiene como componente hijo a OrderModal y habilita su renderizado. 

- CartWidget:

Contiene CartWidget.css para estilizado y CartWidget.js. CartWidget.js tiene la variable quantity por medio de useContext y muestra el numero de elementos que el Cart tiene dentro; ademas del icono del Cart en el NavBar

- ItemDetail:

Contiene ItemDetailContainer.js, ItemDetail.js, ItemCount.js, ItemCount.css, Description.js y Description.css

ItemDetailContainer.js usa el hook useParams y obtiene un id perteneciente a un producto especifico por medio de una promesa en products.js dentro de Utils, que devuelve los productos traidos de Firebase. Usa el hook useState para asignarlos al estado "product" y lo envia como atributo a ItemDetail.js

ItemDetail.js toma el producto recibido y la funcion addItem traida del cartContext.js; en tanto addItem se encargara de checkear si este ya existe en el cart tambien envia la cantidad seleccionada. Envia el objeto "product", el estado "showItemCount" y la funcion handleAdd() a Description.js.

Description.js toma el objeto "product" y lista sus propiedades y valores para que el usuario pueda ver lo que esta comprando. Al ejecutarse handleAdd() el valor de showItemCount es seteado a false y Description.js por medio de un condicional ofrece los botones de volver al index o bien dirigirse al carrito. 

ItemCount.js maneja los valores (adiciones y sustracciones) de la cantidad de productos que se desean al terminar ejecuta la funcion handleAdd().

- ItemList

Contiene ItemListContainer.js, ItemList.js e Item.js; ademas contiene itemList.css e ItemListContainer.css

ItemListContainer.js obtiene el parametro categoryId por medio del hook useParams(). Si la especificacion se da, al estado products lo setea con el resultado de los objetos en la base de datos cuya categoria coincida, sino los mouestra todos. products es enviado a ItemList.

ItemList.js recibe products y por medio de el metodo map a cada uno lo asigna a un componente Item, que recibe por atributo el objeto product (cada uno de los productos que conformaban products).

Item.js recibe product y se encarga de en una Card mostrar las propiedades solicitadas. Si ya se encontrase seleccionado por medio de un condicional y utilizando la funcion isInCart de CartContext se encarga de anular la posibilidad de volver a agregarlo.

- OrderModal

Contiene OrderModal.css y OrderModal.js. La funcion de OrderModal.js es morstrar el formulario a llenar para poder completar la compra, solicitando una repeticion del input perteneciente al correo electronico.

Recibe la funcion handleBuy (por atributo onBuy) la cual crea la orden y al terminar vacia el Cart.

y los archivos:

- Loader.js

Mientras se espera que se cumpla la promesa que trae todos los productos en ItemList, Loader se muestra en tanto products figure como un array vacio, al cumplirse la promesa este desaparece. 

- NavBar.js 

Solo un NavBar traido de react-bootstrap. Tiene adentro el CartWidget.# ecommerce-reactjsfinal
# ecommerce-reactjsfinal
