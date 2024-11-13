# ReactJs-UserList

Este es un proyecto de prueba técnica para el puesto de **Desarrollador Frontend ReactJS** en UPCH. El proyecto consiste en replicar un prototipo HTML en ReactJS utilizando las mejores prácticas de desarrollo web. Además, se utiliza una API pública para poblar una tabla con usuarios y aplicar filtros de búsqueda.

## Descripción

El objetivo de esta prueba técnica fue implementar una interfaz en ReactJS que consuma la API pública de usuarios y permita:

- Mostrar una lista de usuarios en una tabla.
- Implementar un sistema de búsqueda para filtrar los usuarios por múltiples campos.
- Integrar funcionalidades como la edición, eliminación y paginación de los registros.
- Utilizar GitHub Pages para el despliegue del proyecto.

## Tecnologías utilizadas

- **ReactJS**: Framework de JavaScript para construir la interfaz de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Axios**: Para hacer solicitudes HTTP a la API pública.
- **SweetAlert**: Para mostrar alertas de confirmación y error.
- **GitHub Pages**: Para desplegar la aplicación en línea.

## Instalación

Si deseas ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/Elvis-Benites-N/ReactJS-UserList.git
    ```

2. Accede al directorio del proyecto:

    ```bash
    cd ReactJS-UserList
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm run dev
    ```

## Despliegue

La aplicación está desplegada en GitHub Pages. Puedes acceder a ella en el siguiente enlace:

[Enlace al proyecto desplegado](https://elvis-benites-n.github.io/ReactJS-UserList/#/users)

## Funcionalidades

- **Tabla de usuarios**: Muestra una lista de usuarios obtenidos de la API pública.
- **Búsqueda**: Permite buscar usuarios por nombre, edad, entre otros campos.
- **Edición**: Permite editar un solo usuario a la vez.
- **Eliminación**: Permite eliminar múltiples usuarios seleccionados.
- **Paginación**: Muestra los usuarios de 10 en 10 por página usando lazy loading.

