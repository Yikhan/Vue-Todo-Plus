const Koa = require('koa')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

app.use(async (context, next) => {
  try {
    console.log(`request with path ${context.path}`)
    await next
  } catch (err) {
    console.log(err)
    context.status = 500
    if (isDev) {
      context.body = err.message
    } else {
      context.body = 'please try again later'
    }
  }
})
