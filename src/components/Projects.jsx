export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold">ONELINE SHOPPING SYSTEM (CARTOPIA) - CI/CD Pipeline with AWS EC2</h3>
        <p className="italic">2024</p>
        <p>
          Developed CARTOPIA, an online shopping system using PHP, MySQL, HTML/CSS, and JavaScript. Built CI/CD pipelines with Jenkins and Docker, deployed on AWS EC2 for scalable hosting, and monitored with Prometheus and Grafana.
        </p>
        <p>
          <a href="https://github.com/kushalpanchal181/online-shooping-master" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            Source Code
          </a>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">HEALTH NEST APP</h3>
        <p className="italic">Enblitz Technologies Pvt. Ltd. | 2024</p>
        <p>
          Worked on the HealthNest app using React, NodeJS, MySQL, Docker, Jenkins, and SonarQube. Handled database management, containerized deployment, CI/CD pipeline automation, and continuous code quality analysis.
        </p>
        <p>
          <a href="https://github.com/enblitz/HealthNestApp" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            Source Code
          </a>
        </p>
      </div>
    </div>
  );
}
