# Scandiweb Test Front

## Introduction:

This is a Vue.js-based frontend application that serves as the client-side component of the product management system. It provides a user-friendly interface for adding, viewing, and deleting products. It uses the RESTful API endpoints provided by the PHP backend application to perform the necessary CRUD operations.

API Base URL: https://scandiweb-test-back.000webhostapp.com/

## Pages:

### Product List Page:

This page displays all the products fetched from the backend. The user can select one or more products using checkboxes and delete them on clicking MASS DELETE button.

### Product Add Page:

This page contains a form where the user can fill out the details of the new product and add it to the list by clicking the ADD button.

## Dependencies:

- vee-validate/i18n: ^4.8.3
- vee-validate/rules: ^4.8.4
- axios: ^1.3.4
- vee-validate: ^4.8.4
- vue: ^3.2.47
- vue-router: ^4.1.6

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
