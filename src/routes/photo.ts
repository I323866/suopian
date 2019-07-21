// import path from 'path'
// import express from 'express'
import { Router, Application } from 'express'
import * as PhotoController from '../controllers/photo'

const ApiRouter: Router = Router()

export default (app: Application) => {
  ApiRouter.get('/', PhotoController.getPhotos)
  ApiRouter.post('/', PhotoController.addPhoto)
  ApiRouter.delete('/:id', PhotoController.removePhoto)

  app.use('/api/photos', ApiRouter)
}
