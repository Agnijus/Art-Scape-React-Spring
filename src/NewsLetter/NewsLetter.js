import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section class="newsletter-container">
      <div class="newsletter-container-center">
        <div class="newsletter-container-text">
          <h3 class="newsletter-title">want latest update about our art?</h3>
          <div class="newsletter-underline">
            sign up for newsletter and stay up to date
          </div>
        </div>
        <form action="">
          <textarea
            class="newsletter-textarea"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Email"
          ></textarea>
          <button class="newsletter-btn">submit</button>
        </form>
      </div>
    </section>
  );
};
export default NewsLetter;
