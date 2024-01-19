import './styles.css'

function Banner({ imageURL, children }) {
  const bannerImg = {
    background: `url(${imageURL}) center / cover no-repeat`,
  };

  return (
    <section className='banner' id='banner' style={bannerImg}>
      <h2 id='banner-slogan'>{children}</h2>
    </section>
  );
}

export default Banner;
