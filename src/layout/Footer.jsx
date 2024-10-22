function Footer () {
    return(
        <footer className="page-footer #212121 grey darken-4">
          <div className="container">
          © {new Date().getFullYear()} Copyright Filmopoisk QHD
          <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
          </div>
      </footer>
    )
}

export {Footer}