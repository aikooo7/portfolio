import CenteredTitle from "../components/CenteredTitle";

export default function About() {
  return (
    <main>
      <CenteredTitle>About me</CenteredTitle>
      <div className="h-screen w-screen flex items-center">
        <div className="mx-auto w-3/4 text-center">
          <p className="text-xl">
            I am a hobbiest programmer, who enjoys doing nerdy stuff aka low
            level and embedded stuff.
            <br></br>
            Feel free to <a href="/contact">contact me</a> if you have any
            questions. <br></br>
            You can see my work at <a href="/projects">the projects tab</a> or
            if you want to see all the stuff I do you can see it at{" "}
            <a href="https://github.com/aikooo7">my github</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
