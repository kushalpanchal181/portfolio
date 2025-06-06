export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p>If you'd like to connect or discuss opportunities, feel free to contact me.</p>
      <div className="mt-6 space-y-3 text-lg">
        <p>
          Email:{" "}
          <a href="mailto:panchalkushalm@gmail.com" className="text-blue-600 underline">
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
            className="text-blue-600 underline"
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
            className="text-blue-600 underline"
          >
            github.com/kushalpanchal181
          </a>
        </p>
      </div>
    </div>
  );
}
