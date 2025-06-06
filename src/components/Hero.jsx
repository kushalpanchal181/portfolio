import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Kushal Panchal</h1>
      <p className="text-xl max-w-xl">
        DevOps Engineer Intern & Aspiring Software Developer<br />
        Passionate about Cloud, Automation, and Full-Stack Development
      </p>
      <ThreeScene />
    </div>
  );
}
