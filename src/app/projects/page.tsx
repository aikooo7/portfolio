import CenteredTitle from "../components/CenteredTitle";

export default function Projects() {
  return (
    <main>
      <CenteredTitle>Projects</CenteredTitle>

      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-3/4 text-center text-xl space-y-1">
          <p>This site itself! It works in mobile and desktop, it is fast and very beatifull. That really makes me proud of it! You can see it&apos;s <a target="_blank" href="https://github.com/aikooo7/portfolio">source code here</a>.</p>
          <p><a target="_blank" href="https://aikoblog.vercel.app/">My blog</a>, that even though is fully made with the <a target="_blank" href="https://github.com/oleeskild/Obsidian-Digital-Garden">digital garden obsidian plugin</a>, it makes writing a blog or anything that I want to publicly write just part of the workflow.</p>
          <h1 className="text-3xl mt-40"><br></br>You only talk about web projects and you love low level?</h1>
          <p><br></br>Basicly. As of right now I don&apos;t have much low-level projects because I am still learning, later I will sure have more.</p>
        </div>
      </div>
    </main>
  );
}
