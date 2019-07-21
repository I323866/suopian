import { getManager } from 'typeorm'
import { Photo } from '../models/Photo'

const getPhotos = async () => {
  const photoRepo = getManager().getRepository(Photo)
  return photoRepo.find()
}

const addPhoto = async (filepath: string, name: string) => {
  const photoRepo = getManager().getRepository(Photo)
  const photo: Photo = new Photo()
  photo.filename = filepath
  photo.description = "test"
  return photoRepo.save(photo)
}

const removePhoto = async (id: number) => {
  const photoRepo = getManager().getRepository(Photo)
  const photo = await photoRepo.findOne(id)
  return photoRepo.remove(photo)
}

export default {
  getPhotos,
  addPhoto,
  removePhoto
}
