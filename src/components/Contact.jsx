export default function Contact() {
  return (
    <div className="bg-primary-bg max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-heading-text mb-8">Get in Touch</h2>
      <p className="text-text-primary mb-10 text-lg">
        If you'd like to connect or discuss opportunities, feel free to contact me.
      </p>
      <div className="space-y-4 text-lg text-text-primary">
        <p>
          Email:{" "}
          <a href="mailto:panchalkushalm@gmail.com" className="text-accent-primary hover:text-accent-secondary underline">
            panchalkushalm@gmail.com
          </a>
        </p>
        <p>Phone: 7433913655</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/panchal-kushal"
            target="_blank"
            rel="noreferrer"
            className="text-accent-primary hover:text-accent-secondary underline"
          >
            linkedin.com/in/panchal-kushal
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/kushalpanchal181"
            target="_blank"
            rel="noreferrer"
            className="text-accent-primary hover:text-accent-secondary underline"
          >
            github.com/kushalpanchal181
          </a>
        </p>
      </div>
    </div>
  );
}
