export const filesFilter = (req: any, file: any, callback: any) => {
    console.log(file)

    file.mimetype = file.mimetype.split('/')[1];

    if(!file.originalname.match(/\.(pdf)$/))
   {    
       req.error = "only pdf allowed"
       return callback(new Error("must be pdf"), false)}
    callback(null, true)
}