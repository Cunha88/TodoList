import Link from "next/link";

export default function Page() {
  return <>
    <header className="text-2xl">New</header>
    <form className="flex gap-2 flex-col">
      <input type="text" name="title"
        className="border corder-slate300 bg-transparent rounded px-2 py-1 outline-none focus-withun:border-slate-100">

      </input>
      <div>
        <Link href="..">Cancel</Link>
        <Link href="..">Submit</Link>
      </div>
    </form>
  </>
}