import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`banner-container ${className}`}>
      <div>
        <h1 className="main-head">{headerText}</h1>
        <p className="main-para">{description}</p>
        <button className="button-el" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
