import CenteredTitle from "../components/CenteredTitle";

export default function Contact() {
  return (
    <main>
      <CenteredTitle>Contact me</CenteredTitle>

      <div className="w-screen h-screen flex items-center justify-center">
        <div className="mx-auto w-3/4 text-center text-xl">
          <p>
            You can contact me by discord (aikoo7), by matrix (@aikoo7:matrix.org) or to my <a href="mailto:prozinhopro1973@gmail.com">email</a>
            <br></br>
            If you have any security concern or just want a more secure way of communication, send the text cryptographed with <a target="_blank" href="https://keys.openpgp.org/search?q=B0D72955235F6AB5ACFA16198C7FF5BB1ADEF191">my gpg key</a>, and (optionally) if you want me to use yours too, send it in the message and also the message needs to be signed with that key else I&apos;m going to assume that someone is trying to impersonate you.
          </p>
        </div>
      </div>
    </main>
  );
}
