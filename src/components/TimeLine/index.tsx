declare const window: any;

const TimeLine = ( ) => {

    const items  : NodeListOf<HTMLElement> = document.querySelectorAll("#timeline li");
    const isInViewport = (el : HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWhith || document.documentElement.clientWidth)
        );
    };

    const run = () =>
        items.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add("show");
            }
    });

    // Events
    window.addEventListener("load", run);
     window.addEventListener("resize", run);
     window.addEventListener("scroll", run);

    return (
        <section id="timeline">
        <ul>
          <h3>2015</h3>
          <li>
            <div>
              <div>
                <h2>Title One</h2>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
                libero dolor rerum repellat tenetur enim impedit?
              </p>
            </div>
          </li>
          <h3>2016</h3>
          <li>
            <div>
              <div>
                <h2>Title Two</h2>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
                illum dolores est harum minus, modi alias ad dolorum ipsum.
              </p>
            </div>
          </li>
          <h3>2017</h3>
          <li>
            <div>
              <div>
                <h2>Title Three</h2>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                recusandae cumque cupiditate eius quis! Hic assumenda nemo eos.
                Consequuntur, fugiat. Nam quis dolor magni distinctio.
              </p>
            </div>
          </li>
          <h3>2018</h3>
          <li>
            <div>
              <div>
                <h2>Title Four</h2>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
                quae nesciunt ullam officia asperiores culpa.
              </p>
            </div>
          </li>
          <h3>2019</h3>
          <li>
            <div>
              <div>
                <h2>Title Five</h2>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
                rerum facere quisquam quasi? Totam nulla libero beatae itaque?
              </p>
            </div>
          </li>
          <h3>2020</h3>
          <li>
            <div>
              <div>
                <h2>Title Six</h2>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
                illum dolores est harum minus, modi alias ad dolorum ipsum.
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  };
  
  export default TimeLine;