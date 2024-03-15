export default function About() {
  return (
    <section className="py-16 flexCenter flex-col px-3 max-w-screen-md mx-auto">
      <h2 className="font-semibold text-2xl">Instant Team Chats</h2>
      <p className="text-center text-pretty py-6">
        Chatting app allows you to communicate with your customers in web chat
        rooms. It enables you to send and receive messages. Chatting apps make
        it easier, simpler, and faster to connect with everyone and it is also
        easy to use. There are many types of chatting apps and every one has its
        own format, design, and functions.
      </p>
      <img alt="demo-img" src="/demo.jpeg" className="rounded-md shadow" />
    </section>
  );
}
