import { Request, Response } from 'express'
import PhotoService from '../services/photo'
import fs from 'fs'
import formidable from 'formidable'


/* API Controllers */
export const getPhotos = async (req: Request, res: Response) => {
  try {
    const photos = await PhotoService.getPhotos()
    res.json(photos)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const addPhoto = async (req: Request, res: Response) => {
  var form = new formidable.IncomingForm();   //创建上传表单
  form.encoding = 'utf-8';                    //设置编辑
  form.uploadDir = 'src/public/upload/';      //设置上传目录
  form.keepExtensions = true;                 //保留后缀
  form.maxFieldsSize = 20 * 1024 * 1024;       //文件大小
  form.parse(req, function (err, fields, files) {
    if (err) {
      res.send({
        retcode: -999,
        msg: JSON.stringify(err)
      });
    }
    fs.renameSync(files.data.path, form.uploadDir + files.data.name);
  });
  // received -> 接收到的表单数据, expected -> 预计接受的表单数据
  form.on('progress', function (received, expected) {
    console.log(((received / expected) * 100).toFixed(2), '% uploaded');
  });
  form.on('end', function () {
    res.send({
      retcode: 0,
      msg: '上传完毕！'
    })
  })
  try {
    const filePath = req.body.filePath
    console.log(req.body)
    const name = req.body.name
    const photo = await PhotoService.addPhoto(filePath, name)
    res.json(photo)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const removePhoto = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await PhotoService.removePhoto(id)
    res.send('ok')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
