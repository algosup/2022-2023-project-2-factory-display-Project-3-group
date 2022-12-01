import express from 'express';
import { Router } from 'express';


Router.post('/', ProdCtrl.createProduct); // Create a new product


module.exports = Router;
