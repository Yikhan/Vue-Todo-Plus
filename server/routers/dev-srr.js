const Router = require('koa-router')
const Axios = require('axios')
const MemoryFS = require('memory-fs')
const Webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = Webpack(serverConfig)
const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.erros.forEach(err => console.log(err))
  stats.hasWarnings.forEach(warn => console.warn(err))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

const handleSSR = async (context) => {
  if (!bundle) {
    context.body = 'Please wait for a second'
    return
  }

  const clientManifestResp = await Axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs')
  )
  const renderer = VueServerRenderer.createBundleRenderer(
    bundle,
    {
      inject: false,
      clientManifest
    }
  )


}
