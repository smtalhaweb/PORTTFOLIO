const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-center gap-7 my-10">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/smtalhaweb"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/github.png" alt="github-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/facebook.png" alt="facebook-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/twitter.png" alt="twitter-link" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
