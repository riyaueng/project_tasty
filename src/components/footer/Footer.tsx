export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 h-32">
      <div className="h-5">
        <a href="https://www.facebook.com/?locale=de_DE" target="_blank">
          <img src="/img/icon_instagram.svg" alt="Instagram" className="h-9" />
        </a>
      </div>

      <div className="h-5">
        <a href="https://www.youtube.com/">
          <img src="/img/icon_youtube.svg" alt="Youtube" className="h-9" />
        </a>
      </div>

      <div className="h-5">
        <a href="https://de-de.facebook.com/">
          <img src="/img/icon_facebook.svg" alt="Facebook" className="h-9" />
        </a>
      </div>
    </footer>
  )
}
