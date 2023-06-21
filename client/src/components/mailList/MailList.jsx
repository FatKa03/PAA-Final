import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Simpan uangmu, simpan waktumu!</h1>
      <span className="mailDesc">Daftar dan kami akan mengirimkan berbagai promo kepadamu</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList