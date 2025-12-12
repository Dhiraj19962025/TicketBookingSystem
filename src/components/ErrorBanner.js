export default function ErrorBanner({ message }) {
  return message ? <div style={{ color: "red" }}>{message}</div> : null;
}
