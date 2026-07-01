import trusted from "../assets/trusted-bg.jpg";
import './css/Blog.css'
const LatestBlog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://cutesolution.com/html/inspire/assets/img/blog/blog-1.jpg",
      date: "20 January - 2024",
      category: "Technology",
      title: "What Could 5g Change About The Way We Use Technology?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
      link: "index.html"
    },
    {
      id: 2,
      image: "https://cutesolution.com/html/inspire/assets/img/blog/blog-2.jpg",
      date: "25 January - 2024",
      category: "IT Services",
      title: "3 Factors To Consider When Choosing A Managed It Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
      link: "index.html"
    },
    {
      id: 3,
      image: "https://cutesolution.com/html/inspire/assets/img/blog/blog-3.jpg",
      date: "30 January - 2024",
      category: "Business",
      title: "How To Quickly Shift To A Work-from-home Business Model",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
      link: "index.html"
    }
  ];

  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Blog</h1>
          <h5> Home <span>•</span>Blog</h5>
        </div>
      </section>
      <section className='container'>
        <div className="latest-blog">
          <h4 className="main-heading pt-5 text-primary mt-5">OUR LATEST BLOG</h4>
          <h1>News & Updates</h1>

          <div className="blogs">
            {blogPosts.map((post) => (
              <div className="blog-cards" key={post.id}>
                <img src={post.image} alt={post.title} />
                <div className="blog-content">
                  <h6>{post.date} | <span>{post.category}</span></h6>
                  <a href={post.link} className="quest">{post.title}</a>
                  <p className="para">{post.description}</p>
                  <a href={post.link} className="read-me">+ Read More</a>
                </div>
              </div>
            ))}
          </div>

          <div className="btn2">
            <button className="button btn-primary">Get Free Quote</button>
            <button className="button btn-primary">View All Projects</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;