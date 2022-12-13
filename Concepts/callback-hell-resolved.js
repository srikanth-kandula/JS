fs.readdir(source, handleDirRead)

function handleDirRead(err, files) {
  if(err) {
    console.log('Error finding files: ' + err);
  } else {
    files.forEach(handleFile);
  }
}

function handleFile(filename, fileIndex) {
  console.log(filename)
  gm(source + filename).size(resizeFile)
}

function resizeFile(err, values) {
  if (err) {
    console.log('Error identifying file size: ' + err)
  } else {
    console.log(filename + ' : ' + values)
    aspect = (values.width / values.height)
    widths.forEach(changeWidth.bind(this))
  }
}

function changeWidth(width, widthIndex) {
  height = Math.round(width / aspect)
  console.log('resizing ' + filename + 'to ' + height + 'x' + height)
  this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
    if (err) console.log('Error writing file: ' + err)
  })
}