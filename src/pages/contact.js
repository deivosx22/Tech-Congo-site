export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">Have a question or need assistance? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  )
}
