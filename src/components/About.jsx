export default function About() {
  return (
    <div className="bg-primary-bg max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-heading-text mb-8">About Me</h2>
      <p className="text-text-primary mb-6 text-lg">
        I am a Bachelor of Engineering in Information Technology graduate from SAL Engineering & Technical Institute, Ahmedabad, with a CGPA of 7.17. I am passionate about DevOps, cloud computing, and software development.
      </p>
      <h3 className="text-3xl font-semibold text-heading-text mt-12 mb-6">Contact</h3>
      <ul className="list-disc list-inside space-y-2 text-text-primary">
        <li>Email: <a href="mailto:panchalkushalm@gmail.com" className="text-accent-primary hover:text-accent-secondary underline">panchalkushalm@gmail.com</a></li>
        <li>Phone: 7433913655</li>
        <li>Location: Ahmedabad, Gujarat, India</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/panchal-kushal" target="_blank" rel="noreferrer" className="text-accent-primary hover:text-accent-secondary underline">linkedin.com/in/panchal-kushal</a></li>
        <li>GitHub: <a href="https://github.com/kushalpanchal181" target="_blank" rel="noreferrer" className="text-accent-primary hover:text-accent-secondary underline">github.com/kushalpanchal181</a></li>
      </ul>

      <h3 className="text-3xl font-semibold text-heading-text mt-12 mb-6">Education</h3>
      <ul className="space-y-6 text-text-primary">
        <li>
          <strong className="font-semibold">SAL Engineering & Technical Institute - Ahmedabad</strong><br />
          Bachelor of Engineering in Information Technology (2020 – 2024) <br />
          CGPA: 7.17
        </li>
        <li>
          <strong className="font-semibold">SETH R. T. New Education Higher Secondary School - Ahmedabad</strong><br />
          Higher Secondary School (12th) - HSC <br />
          Percentage: 62.46
        </li>
        <li>
          <strong className="font-semibold">SETH R. T. New Education Higher Secondary School - Ahmedabad</strong><br />
          Secondary School (10th) - SSC <br />
          Percentage: 78.66
        </li>
      </ul>
    </div>
  );
}
