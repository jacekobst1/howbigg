export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1>Oops, page not found 🦧</h1>
      <div className="mt-5">
        <a className="btn btn-primary" href="/compare/display">
          Go back to Home
        </a>
      </div>
    </div>
  );
}
