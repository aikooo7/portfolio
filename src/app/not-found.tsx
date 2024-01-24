export default function NotFound() {
  return (
    <main>
      <div className="mx-auto w-1/2 text-center">
        <h1 className="text-3xl mt-5 font-bold">Page not found</h1>
      </div>
      <div className="w-screen h-screen flex items-center items-center justify-center">
        {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 mx-2">
              <h1 className="font-bold text-center py-2 px-4 text-xl">
                My portfolio
              </h1>
            </div> */}
        <div className="mx-auto w-1/2 text-center">
          <h1 className="">You gone too much deep, maybe you should go back to <a href="/">home</a>.</h1>
        </div>
      </div>
    </main>
  )
}
