export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-4">
        I am a Bachelor of Engineering in Information Technology graduate from SAL Engineering & Technical Institute, Ahmedabad, with a CGPA of 7.17. I am passionate about DevOps, cloud computing, and software development.
      </p>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Contact</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Email: <a href="mailto:panchalkushalm@gmail.com" className="text-blue-600 underline">panchalkushalm@gmail.com</a></li>
        <li>Phone: 7433913655</li>
        <li>Location: Ahmedabad, Gujarat, India</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/panchal-kushal" target="_blank" rel="noreferrer" className="text-blue-600 underline">linkedin.com/in/panchal-kushal</a></li>
        <li>GitHub: <a href="https://github.com/kushalpanchal181" target="_blank" rel="noreferrer" className="text-blue-600 underline">github.com/kushalpanchal181</a></li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Education</h3>
      <ul className="space-y-4">
        <li>
          <strong>SAL Engineering & Technical Institute - Ahmedabad</strong><br />
          Bachelor of Engineering in Information Technology (2020 – 2024) <br />
          CGPA: 7.17
        </li>
        <li>
          <strong>SETH R. T. New Education Higher Secondary School - Ahmedabad</strong><br />
          Higher Secondary School (12th) - HSC <br />
          Percentage: 62.46
        </li>
        <li>
          <strong>SETH R. T. New Education Higher Secondary School - Ahmedabad</strong><br />
          Secondary School (10th) - SSC <br />
          Percentage: 78.66
        </li>
      </ul>
    </div>
  );
}
